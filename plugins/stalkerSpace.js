import puppeteer from 'puppeteer';
import axios from 'axios'; // Importa o Axios para enviar dados ao webhook

const THRESHOLD = 3; // Limite inferior para alerta automático
const INTERVAL = 5 * 1000; // Intervalo de 5 segundos em milissegundos
const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1315148362324115518/ZVdk0G60y02kXpu1h1D838uQVrRgNf6GtvJ9HH7KKOz3w3hoqmwWtQneRyj5HvcbDnfk'; // URL do webhook do Discord

const monitorPlayers = async (conn, chatId) => {
    let lastAlertCount = null; // Para evitar envio repetitivo

    const checkPlayers = async () => {
        try {
            const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
            const page = await browser.newPage();

            // Desativa cache e recursos desnecessários
            await page.setCacheEnabled(false);
            await page.setRequestInterception(true);
            page.on('request', (req) => {
                const resourceType = req.resourceType();
                if (['image', 'stylesheet', 'font'].includes(resourceType)) {
                    req.abort();
                } else {
                    req.continue();
                }
            });

            // Acessa a página
            await page.goto('https://cfx.re/join/r3ma3p', { waitUntil: 'networkidle2', timeout: 60000 });

            // Aguarda o seletor e extrai a quantidade de jogadores
            await page.waitForSelector('aside .players', { timeout: 15000 });
            const playerCount = await page.$eval('aside .players', el => el.textContent.trim().replace(/[^\d]/g, ''));

            await browser.close();
            return parseInt(playerCount);
        } catch (error) {
            console.error('Erro ao buscar a quantidade de jogadores:', error);
            return null; // Retorna nulo em caso de erro
        }
    };

    const sendDiscordAlert = async (message) => {
        try {
            await axios.post(DISCORD_WEBHOOK_URL, {
                content: message, // Conteúdo da mensagem enviada ao Discord
            });
            console.log('Alerta enviado ao Discord com sucesso.');
        } catch (error) {
            console.error('Erro ao enviar alerta ao Discord:', error);
        }
    };

    while (true) {
        const playerCount = await checkPlayers();

        if (playerCount !== null) {
            if (playerCount < THRESHOLD && playerCount !== lastAlertCount) {
                const alertMessage = `🚨 Alerta! O número de jogadores conectados caiu para ${playerCount}.`;

                // Envia mensagem no WhatsApp
                await conn.reply(chatId, `*${alertMessage}*`);

                // Envia mensagem ao Discord
                await sendDiscordAlert(alertMessage);

                lastAlertCount = playerCount; // Atualiza a última contagem de alerta
            }
        }

        await new Promise(resolve => setTimeout(resolve, INTERVAL)); // Aguarda o intervalo antes da próxima verificação
    }
};

let handler = async (m, { conn, command }) => {
    if (command === 'stalkerspace') {
        const playerCount = await checkPlayers();
        if (playerCount !== null) {
            await conn.reply(m.chat, `*👥 Jogadores conectados no servidor: ${playerCount}.*`);
        } else {
            await conn.reply(m.chat, `⚠️ Não foi possível verificar a quantidade de jogadores conectados. Tente novamente mais tarde.`);
        }
    }
};

// Inicia o monitoramento automático ao carregar o bot
(async () => {
    const conn = global.conn; // Substitua por como sua instância de conexão é gerenciada
    const chatId = '120363044778776976@g.us'; // Coloque o ID do chat onde as mensagens automáticas serão enviadas

    monitorPlayers(conn, chatId).catch(error => {
        console.error('Erro no monitoramento automático:', error);
    });
})();

handler.command = /^(stalkerspace)$/i;
export default handler;
