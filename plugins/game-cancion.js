import fetch from 'node-fetch';
import axios from 'axios';

let timeout = 60000;
let poin = 1000;

let handler = async (m, { conn, usedPrefix }) => {
  conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu : {};
  let id = m.chat;

  if (id in conn.tebaklagu) {
    conn.reply(m.chat, 'Ainda há músicas sem resposta neste chat.', conn.tebaklagu[id][0]);
    throw false;
  }

  let res = await fetchJson(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/tebaklagu.json`);
  let json = res[Math.floor(Math.random() * res.length)];
  let caption = `
ADIVINHA O TÍTULO DA MÚSICA
Tempo ${(timeout / 1000).toFixed(2)} segundos
Escreva *${usedPrefix}pista* para obter uma dica
Prêmio: ${poin} XP
RESPONDA A ESTA MENSAGEM COM AS RESPOSTAS!`.trim();

  conn.tebaklagu[id] = [
    await m.reply(caption),
    json,
    poin,
    setTimeout(() => {
      if (conn.tebaklagu[id]) {
        conn.reply(m.chat, `O tempo acabou!\nA resposta é ${json.jawaban}`, conn.tebaklagu[id][0]);
        delete conn.tebaklagu[id];
      }
    }, timeout)
  ];

  let aa = await conn.sendMessage(m.chat, { audio: { url: json.link_song }, ptt: true, mimetype: 'audio/mpeg', fileName: `error.mp3` }, { quoted: m });

  if (!aa) return conn.sendFile(m.chat, json.link_song, 'coba-lagi.mp3', '', m);
};

handler.help = ['tebaklagu'];
handler.tags = ['game'];
handler.command = /^musica|música$/i;
export default handler;

async function fetchJson(url, options) {
  try {
    options ? options : {};
    const res = await axios({ method: 'GET', url: url, headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36' }, ...options });
    return res.data;
  } catch (err) {
    return err;
  }
}
