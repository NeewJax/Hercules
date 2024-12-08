/* 𝐂𝐑𝐄𝐀𝐃𝐎 𝐏𝐎𝐑 https://github.com/BrunoSobrino */

let handler = async (m, { conn, usedPrefix, command }) => {
if (!m.quoted) throw `*[❗𝐈𝐍𝐅𝐎❗] Responda a um vídeo que você deseja transformar em GIF com áudio*`
const q = m.quoted || m
let mime = (q.msg || q).mimetype || ''
if (!/(mp4)/.test(mime)) throw `*[❗] O tipo de arquivo ${mime} não é correto! Responda a um vídeo que você deseja transformar em gif com áudio*`
m.reply(global.wait)
let media = await q.download()
conn.sendMessage(m.chat, { video: media, gifPlayback: true, caption: '*Aqui está seu gif com audio, ao abrir irá reproduzir o áudio! :) *' }, { quoted: m })}
handler.command = ['togifaud']
export default handler
