import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';

// Defina a chave da API do Lol Human
const lolkeysapi = 'sua_chave_da_api';

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw '*[❗𝐈𝐍𝐅𝐎❗] Insira o comando e o link de um vídeo no youtube!*';

    let youtubeLink = '';
    if (args[0].includes('you')) {
        youtubeLink = args[0];
    } else {
        const index = parseInt(args[0]) - 1;
        if (index >= 0) {
            if (Array.isArray(global.videoList) && global.videoList.length > 0) {
                const matchingItem = global.videoList.find(item => item.from === m.sender);
                if (matchingItem) {
                    if (index < matchingItem.urls.length) {
                        youtubeLink = matchingItem.urls[index];
                    } else {
                        throw `*[❗] Nenhum link encontrado para esse número, digite um número entre 1 e ${matchingItem.urls.length}*`;
                    }
                } else {
                    throw `*[❗] Para poder usar este comando assim (${usedPrefix + command} <numero>), Pesquise vídeos com o comando ${usedPrefix}playlist <texto>*`;
                }
            } else {
                throw `*[❗] Para poder usar este comando assim (${usedPrefix + command} <numero>), Pesquise vídeos com o comando ${usedPrefix}playlist <texto>*`;
            }
        }
    }

    await m.reply(`*_⏳Seu vídeo está sendo baixado...⏳_*\n\n*◉ Se o seu vídeo não for enviado, tente usar o comando #playdoc ou #play.2 ou #ytmp4doc ◉*`);

    try {
        let mediaa = await ytMp4(youtubeLink);
        await conn.sendMessage(m.chat, { video: { url: mediaa.result }, fileName: `error.mp4`, caption: `_The Hercules Bot_`, thumbnail: mediaa.thumb, mimetype: 'video/mp4' }, { quoted: m });
    } catch (E2) {
        try {
            let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${youtubeLink}`);
            let lolh = await lolhuman.json();
            let n = lolh.result.title || 'error';
            let n2 = lolh.result.link;
            let n3 = lolh.result.size;
            let n4 = lolh.result.thumbnail;
            await conn.sendMessage(m.chat, { video: { url: n2 }, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: `▢ Titulo: ${n}\n▢ Peso do vídeo: ${n3}`, thumbnail: await fetch(n4) }, { quoted: m });
        } catch (E3) {
            await conn.reply(m.chat, '*[❗] Erro não foi possível baixar o seu vídeo!*', m);
        }
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
