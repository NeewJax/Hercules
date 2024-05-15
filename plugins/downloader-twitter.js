import fetch from 'node-fetch';
import puppeteer from 'puppeteer';
import axios from 'axios';

let handler = async (m, { conn, args, command, usedPrefix }) => {
    if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] Insira um link do Twitter. Exemplo: ${usedPrefix + command}* https://twitter.com/auronplay/status/1586487664274206720?s=20&t=3snvkvwGUIez5iWYQAehpw`;
    m.reply(`*✅ Obtendo link de download, por favor aguarde um momento...*`);
    try {
        const browser = await puppeteer.launch({ args: ['--no-sandbox'] }); // using --no-sandbox to launch on aws instance
        const page = await browser.newPage();
        await page.goto(`http://thejaxapi.rf.gd/api/twitter/video-downloader.php?link=${args[0]}`);

        // Espera até que o elemento com o link de download esteja disponível na página
        await page.waitForSelector('pre', { timeout: 60000 }); // Aumentando o tempo limite para 60 segundos

        // Obtém o link de download diretamente do texto dentro do elemento 'pre'
        const downloadLink = await page.$eval('pre', element => {
            const json = JSON.parse(element.textContent);
            return json.data.download_data.best_video_quality;
        });

        await browser.close();

        const response = await axios.get(downloadLink, { responseType: 'arraybuffer' });


        // Envie o vídeo
        await conn.sendFile(m.chat, Buffer.from(response.data), 'video.mp4', '', m);
    } catch (error) {
        console.log('Erro:', error);
        throw `*[❗𝐈𝐍𝐅𝐎❗] Ocorreu um erro ao baixar o vídeo. Por favor, tente novamente.*`;
    } 
}

handler.command = /^(twitterdl|twitter)$/i;
export default handler;