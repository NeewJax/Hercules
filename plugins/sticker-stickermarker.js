import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
import MessageType from '@whiskeysockets/baileys'
const effects = ['jail', 'gay', 'glass', 'wasted' ,'triggered', 'lolice', 'simpcard', 'horny']

let handler = async (m, { conn, usedPrefix, text }) => {
let effect = text.trim().toLowerCase()
if (!effects.includes(effect)) throw `
*Uso correto do comando*
*👉 Use:* ${usedPrefix}stickermaker (efeito) 
- E responda a uma imagem
*✅ Exemplo:* ${usedPrefix}stickermaker jail
*Lista efeito:*
${effects.map(effect => `_> ${effect}_`).join('\n')}
`.trim()
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw '*🔰 Imagem não encontrada*\n\n*✅ Responder a uma imagem*'
if (!/image\/(jpe?g|png)/.test(mime)) throw `*Formato não suportado*\n\n*_👉🏻 Responder a uma imagem_*`
let img = await q.download()
let url = await uploadImage(img)
let apiUrl = global.API('https://some-random-api.ml/canvas/', encodeURIComponent(effect), {
avatar: url
})
try {
let stiker = await sticker(null, apiUrl, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
} catch (e) {
m.reply('*Ocorreu um erro ao converter para adesivo*\n\n*Enviando imagem em vez disso...*')
await conn.sendFile(m.chat, apiUrl, 'image.png', null, m)
}}
handler.help = ['stickmaker (caption|reply media)']
handler.tags = ['General']
handler.command = /^(stickmaker|stickermaker|stickermarker|cs)$/i
export default handler
