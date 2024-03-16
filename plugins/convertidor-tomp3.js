import { toAudio } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (q || q.msg).mimetype || q.mediaType || ''
if (!/video|audio/.test(mime)) throw `*[❗𝐈𝐍𝐅𝐎❗] Responda o video ou mensagem de voz que você deseja converter em áudio/MP3*`
let media = await q.download()
if (!media) throw '*[❗𝐈𝐍𝐅𝐎❗] Peço desculpas, ocorreu um erro ao baixar o seu vídeo, você poderia tentar novamente? :(*'
let audio = await toAudio(media, 'mp4')
if (!audio.data) throw '*[❗𝐈𝐍𝐅𝐎❗] Peço desculpas, ocorreu um erro ao converter sua mensagem de voz a audio/mp3, você poderia tentar novamente? :(*'
conn.sendMessage(m.chat, { audio: audio.data,  mimetype: 'audio/mpeg' }, { quoted: m })
}
handler.alias = ['tomp3', 'toaudio']
handler.command = /^to(mp3|audio)$/i
export default handler
