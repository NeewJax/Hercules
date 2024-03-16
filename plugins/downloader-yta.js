import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';

let handler = async (m, { text, conn, args, usedPrefix, command }) => {
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

  await m.reply(`*_⏳Seu áudio está sendo baixado...⏳_*\n\n*◉ Se o seu áudio não for enviado, tente usar o comando #playdoc #play.2 ou #ytmp4doc ◉*`);

  try {
    let q = '128kbps';
    let v = youtubeLink;
    const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v));
    const dl_url = await yt.audio[q].download();
    const ttl = await yt.title;
    const size = await yt.audio[q].fileSizeH;

    const response = await axios.head(dl_url); // Obter informações sobre o arquivo

    // Verificar o tamanho do arquivo para determinar se é adequado para o iPhone
    const fileSize = response.headers['content-length'];
    const isCompatibleWithiPhone = fileSize <= 10 * 1024 * 1024; // Limite de tamanho em bytes (10 MB)

    if (isCompatibleWithiPhone) {
      await conn.sendMessage(m.chat, { audio: { url: dl_url }, seconds: '1934.4', ptt: true, mimetype: 'audio/mpeg', fileName: `${ttl}.mp3` }, { quoted: m });
    } else {
      await conn.sendFile(m.chat, dl_url, `${ttl}.mp3`, null, m, false, { mimetype: 'audio/mp4' });
    }
  } catch {
    try {
      let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${youtubeLink}`);
      let lolh = await lolhuman.json();
      let n = lolh.result.title || 'error';
      await conn.sendMessage(m.chat, { audio: { url: lolh.result.link }, seconds: '1934.4', ptt: true, mimetype: 'audio/mpeg', fileName: `${n}.mp3` }, { quoted: m });
    } catch {
      try {
        let searchh = await yts(youtubeLink);
        let __res = searchh.all.map(v => v).filter(v => v.type == "video");
        let infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId);
        let ress = await ytdl.chooseFormat(infoo.formats, { filter: 'audioonly' });
        conn.sendMessage(m.chat, { audio: { url: ress.url }, seconds: '1934.4', ptt: true, mimetype: 'audio/mpeg', fileName: `${__res[0].title}.mp3` }, { quoted: m });
      } catch {
        await conn.reply(m.chat, '*[❗] Erro não foi possível baixar o seu áudio!*', m);
      }
    }
  }
};

handler.command = /^fgmp3|dlmp3|getaud|yt(a|mp3)$/i;
export default handler;
