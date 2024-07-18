import puppeteer from 'puppeteer';
import axios from 'axios';

async function getDownloadLink(instagramUrl) {
    const browser = await puppeteer.launch({ 
        executablePath: '/usr/bin/google-chrome',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.goto(`http://thejaxapi.rf.gd/api/instagram/insta-downloader2.php?link=${instagramUrl}`);

    // Wait for the download link to be available
    await page.waitForSelector('pre', { timeout: 60000 });

    // Extract the download link from the page
    const downloadLink = await page.$eval('pre', element => {
        const json = JSON.parse(element.textContent);
        return json.data.download;
    });

    await browser.close();
    return downloadLink;
}

async function downloadVideo(downloadLink) {
    const response = await axios.get(downloadLink, { responseType: 'arraybuffer' });
    return Buffer.from(response.data);
}

let handler = async (m, { conn, args, command, usedPrefix }) => {
    if (!args[0]) {
        throw `*[❗𝐈𝐍𝐅𝐎❗] Insira um link do Instagram. Exemplo: ${usedPrefix + command} https://www.instagram.com/reel/Cc0NuYBg8CR/?utm_source=ig_web_copy_link*`;
    }

    m.reply(`*✅ Obtendo link de download, por favor aguarde um momento...*`);

    try {
        const instagramUrl = args[0];
        const downloadLink = await getDownloadLink(instagramUrl);
        const videoBuffer = await downloadVideo(downloadLink);

        // Send the downloaded video to the user
        await conn.sendFile(m.chat, videoBuffer, 'video.mp4', '', m);
    } catch (error) {
        console.error('Erro ao baixar vídeo:', error);
        throw `*[❗𝐄𝐑𝐑𝐎❗] Não foi possível baixar o vídeo. Por favor, tente novamente mais tarde.*`;
    }
};

handler.command = /^(instagramdl|instagram|igdl|ig|instagramdl2|instagram2|igdl2|ig2|instagramdl3|instagram3|igdl3|ig3)$/i;
export default handler;
