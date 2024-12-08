import { youtubedl, youtubedlv2 } from '@bochilteam/scraper';
import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';
import { bestFormat, getUrlDl } from '../lib/y2dl.js';

const handler = async (m, { text, conn, args, usedPrefix, command }) => {
  if (!args[0]) throw 'Texto não fornecido.';
  let youtubeLink = '';
  if (args[0].includes('you')) {
    youtubeLink = args[0];
  } else {
    const index = parseInt(args[0]) - 1;
    if (index >= 0) {
      if (Array.isArray(global.videoList) && global.videoList.length > 0) {
        const matchingItem = global.videoList.find((item) => item.from === m.sender);
        if (matchingItem) {
          if (index < matchingItem.urls.length) {
            youtubeLink = matchingItem.urls[index];
          } else {
            throw 'Link inválido.';
          }
        } else {
          throw 'Você não tem uma lista de reprodução.';
        }
      } else {
        throw 'Você não tem uma lista de reprodução.';
      }
    }
  }
  const { key } = await conn.sendMessage(m.chat, { text: 'Processando...' }, { quoted: m });
  try {
    const formats = await bestFormat(youtubeLink, 'audio');
    const dl_url = await getUrlDl(formats.url);
    const buff = await getBuffer(dl_url.download);
    const yt_1 = await youtubedl(youtubeLink).catch(async (_) => await youtubedlv2(youtubeLink));
    const ttl_1 = `${yt_1?.title ? yt_1.title : 'Audio'}`;
    const fileSizeInBytes = buff.byteLength;
    const fileSizeInKB = fileSizeInBytes / 1024;
    const fileSizeInMB = fileSizeInKB / 1024;
    const roundedFileSizeInMB = fileSizeInMB.toFixed(2);
    if (fileSizeInMB > 50) {
      await conn.sendMessage(m.chat, { document: buff, caption: `Título: ${ttl_1}\nTamanho: ${roundedFileSizeInMB} MB`, fileName: ttl_1 + '.mp3', mimetype: 'audio/mpeg' }, { quoted: m });
      await conn.sendMessage(m.chat, { text: 'Arquivo grande, envio como documento.', edit: key }, { quoted: m });
    } else {
      await conn.sendMessage(m.chat, { audio: buff, caption: `Título: ${ttl_1}\nTamanho: ${roundedFileSizeInMB} MB`, fileName: ttl_1 + '.mp3', mimetype: 'audio/mpeg' }, { quoted: m });
      await conn.sendMessage(m.chat, { text: 'Arquivo de áudio enviado.', edit: key }, { quoted: m });
    }
  } catch {
    console.log('Erro ao processar o áudio');
    throw 'Erro ao processar o áudio.';
  }
};

handler.command = /^(audio|fgmp3|dlmp3|getaud|yt(a|mp3))$/i;
export default handler;

const getBuffer = async (url, options) => {
  try {
    options ? options : {};
    const res = await axios({
      method: 'get',
      url,
      headers: {
        'DNT': 1,
        'Upgrade-Insecure-Request': 1,
      },
      ...options,
      responseType: 'arraybuffer',
    });

    return res.data;
  } catch (e) {
    console.log(`Error : ${e}`);
  }
};
