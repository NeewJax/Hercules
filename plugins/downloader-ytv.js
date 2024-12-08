import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';


let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw '*[❗𝐈𝐍𝐅𝐎❗] Insira o comando e o link de um vídeo no youtube!*';
    m.reply(`*✅ Fazendo o download, por favor aguarde um momento...*`);

        try {
            const browser = await puppeteer.launch({ args: ['--no-sandbox'] }); // using --no-sandbox to launch on aws instance
            const page = await browser.newPage();
            await page.goto(`https://delirius-api-oficial.vercel.app/api/ytmp4?url=${args[0]}`);
            await page.waitForSelector('pre', { timeout: 20000 }); // Aumentando o tempo limite para 20 segundos
            // Obtém o link de download diretamente do texto dentro do elemento 'pre'
            const downloadLink = await page.$eval('pre', element => {
                const json = JSON.parse(element.textContent);
                // Acessa o primeiro elemento do array de downloads
                return json.data.url;
            });

            await browser.close();

            await conn.sendMessage(m.chat, { video: { url: n2 }, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: `▢ Titulo: ${n}\n▢ Peso do vídeo: ${n3}`, thumbnail: await fetch(n4) }, { quoted: m });
        } catch (E3) {
            await conn.reply(m.chat, '*[❗] Erro não foi possível baixar o seu vídeo!*', m);
        }
};

handler.command = /^video|fgmp4|dlmp4|getvid|yt(v|mp4)?$/i;
export default handler;

function bytesToSize(bytes) {
    return new Promise((resolve, reject) => {
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes === 0) return 'n/a';
        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
        if (i === 0) resolve(`${bytes} ${sizes[i]}`);
        resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`);
    });
}

async function ytMp4(url) {
    return new Promise(async (resolve, reject) => {
        ytdl.getInfo(url).then(async (getUrl) => {
            let result = [];
            for (let i = 0; i < getUrl.formats.length; i++) {
                let item = getUrl.formats[i];
                if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
                    let { qualityLabel, contentLength } = item;
                    let bytes = await bytesToSize(contentLength);
                    result[i] = { video: item.url, quality: qualityLabel, size: bytes };
                }
            }
            let resultFix = result.filter(x => x.video != undefined && x.size != undefined && x.quality != undefined);
            let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`);
            let tinyUrl = tiny.data;
            let title = getUrl.videoDetails.title;
            let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
            resolve({ title, result: tinyUrl, rersult2: resultFix[0].video, thumb });
        }).catch(reject);
    });
}
