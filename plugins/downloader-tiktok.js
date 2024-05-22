import fetch from 'node-fetch';
import puppeteer from 'puppeteer';
import axios from 'axios';

let handler = async (m, { conn, args, command, usedPrefix }) => {
    if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] Insira um link do instagram. Exemplo: ${usedPrefix + command}* https://vm.tiktok.com/ZMMvxuPng/`;
    m.reply(`*✅ Fazendo o download, por favor aguarde um momento...*`);

    try {
        const browser = await puppeteer.launch({ args: ['--no-sandbox'] }); // using --no-sandbox to launch on aws instance
        const page = await browser.newPage();
        await page.goto(`http://thejaxapi.rf.gd/api/tiktok/video-downloader.php?link=${args[0]}`);

        // Espera até que o elemento com o link de download esteja disponível na página
        await page.waitForSelector('pre', { timeout: 60000 }); // Aumentando o tempo limite para 60 segundos

        // Obtém o link de download diretamente do texto dentro do elemento 'pre'
        const downloadLink = await page.$eval('pre', element => {
            const json = JSON.parse(element.textContent);
            return json.data.download;
        });

        await browser.close();

        // Baixa o vídeo usando o link obtido
        const response = await axios.get(downloadLink, { responseType: 'arraybuffer' });

        // Envie o vídeo baixado para o usuário
        await conn.sendFile(m.chat, Buffer.from(response.data), 'video.mp4', '', m);
    } catch (error) {
        console.error('Erro ao baixar vídeo:', error);
        throw `ixe, conseguir baixar não viu...`;
    }
};
handler.command = /^(tiktok|ttdl|tiktokdl|ttk|tiktoknowm|tt|ttnowm|tiktokaudio)$/i
export default handler