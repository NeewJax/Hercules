import puppeteer from 'puppeteer';

let handler = async (m, { conn, args, command, usedPrefix }) => {
    if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] Insira um CPF para consultar. Exemplo: ${usedPrefix + command}* 07068093868`;
    m.reply(`*✅ Consultando CPF, por favor aguarde um momento...*`);

    try {
        const browser = await puppeteer.launch({ args: ['--no-sandbox'] }); // usando --no-sandbox para lançar na instância aws
        const page = await browser.newPage();
        await page.goto(`https://apis.ngrok.app/apis/cadsus/api.php?key=@BINGSIXBOT&cpf=${args[0]}`);

        // Espera até que o elemento com o link de download esteja disponível na página
        await page.waitForSelector('pre', { timeout: 60000 }); // Aumentando o tempo limite para 60 segundos

        // Obtém o link de download diretamente do texto dentro do elemento 'pre'
        const globalData = await page.$eval('pre', element => {
            const json = JSON.parse(element.textContent);
            return {
                nome: json.nome,
                cpf: json.cpf,
                dataNascimento: json.dataNascimento,
                idade: json.idade,
                sexo: json.sexo,
                obito: json.obito,
                nomeMae: json.nomeMae,
                nomePai: json.nomePai,
                telefones: json.telefones,
                logradouro: json.endereco.logradouro,
                numero: json.endereco.numero,
                bairro: json.endereco.bairro,
                estado: json.endereco.estado,
                cep: json.endereco.cep,
            };
        });

        await browser.close();

        // Formatar a data de nascimento para "dd/mm/aaaa"
        const [ano, mes, dia] = globalData.dataNascimento.split('-');
        const dataNascimentoFormatada = `${dia}/${mes}/${ano}`;

        const caption = `\`\`\`
Nome: ${globalData.nome}
CPF: ${globalData.cpf}
Nascimento: ${dataNascimentoFormatada} - ${globalData.idade} anos
Sexo: ${globalData.sexo}
Óbito: ${globalData.obito}
Nome da Mãe: ${globalData.nomeMae}
Nome do Pai: ${globalData.nomePai}
Telefones: ${globalData.telefones.join(', ')}
Endereço: ${globalData.logradouro}, ${globalData.numero}, ${globalData.bairro}, ${globalData.estado}, ${globalData.cep}\`\`\`
        `;

        await conn.sendMessage(m.chat, { text: caption }, { quoted: m });
    } catch (error) {
        console.error('Error:', error);
        throw `CPF não encontrado`;
    }
};

handler.command = /^(cpf|consultarcpf|consultacpf|chkcpf|cadsus)$/i;
export default handler;

