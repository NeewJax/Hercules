import puppeteer from 'puppeteer';

let handler = async (m, { conn, args, command, usedPrefix }) => {
    if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] Insira um CPF para consultar. Exemplo: ${usedPrefix + command}* 07068093868`;
    m.reply(`*✅ Consultando CPF, por favor aguarde um momento...*`);

    try {
        const browser = await puppeteer.launch({ args: ['--no-sandbox'] }); // using --no-sandbox to launch on aws instance
        const page = await browser.newPage();
        await page.goto(`https://apis.ngrok.app/apis/si-pni/api.php?key=@BINGSIXBOT&cpf=${args[0]}`);

        // Espera até que o elemento com o link de download esteja disponível na página
        await page.waitForSelector('pre', { timeout: 60000 }); // Aumentando o tempo limite para 60 segundos

        // Obtém o link de download diretamente do texto dentro do elemento 'pre'
        const globalData = await page.$eval('pre', element => {
            const json = JSON.parse(element.textContent);
            return {
                nome: json.records.nome,
                cpf: json.records.cpf
            };
        });

        await browser.close();

        const caption = `Nome: ${globalData.nome}\nCPF: ${globalData.cpf}`;
        await conn.sendMessage(m.chat, caption, { quoted: m });
    } catch (error) {
        console.error('Erro ao baixar vídeo:', error);
        throw `ixe, conseguir baixar não viu...`;
    }
};

handler.command = /^(cpf|consultarcpf|consultacpf|chkcpf)$/i;
export default handler;