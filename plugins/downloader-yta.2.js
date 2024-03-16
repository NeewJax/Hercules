import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
if (!args[0]) throw '*[❗𝐈𝐍𝐅𝐎❗] Insira o comando e o link / Link de um vídeo do youtube*'
await m.reply(`*_⏳Seu áudio está sendo processado⏳_*\n\n*◉ Se o seu audio não for enviado tente #playdoc ou #play.2 ou #ytmp4doc ◉*`)
try {
let q = '128kbps'
let v = args[0]
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
let cap = `*◉—⌈📥 YOUTUBE DL 📥⌋—◉*\n❏ *Título:* ${ttl}\n❏ *Tamanho:* ${size}`.trim()
await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: cap, mimetype: 'audio/mpeg', fileName: `${ttl}.mp3`}, { quoted: m })
} catch {
try {
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${args[0]}`)   
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
let n2 = lolh.result.link
let n3 = lolh.result.size
let cap2 = `*◉—⌈📥 YOUTUBE DL 📥⌋—◉*\n❏ *Título:* ${n}\n❏ *Tamanho:* ${n3}`.trim()
await conn.sendMessage(m.chat, { document: { url: n2 }, caption: cap2, mimetype: 'audio/mpeg', fileName: `${n}.mp3`}, {quoted: m})
} catch {
await conn.reply(m.chat, '*[❗] Erro... não foi possível baixar o seu áudio*', m)}
}}
handler.command = /^ytmp3doc|ytadoc|ytmp3.2|yta.2$/i
export default handler
