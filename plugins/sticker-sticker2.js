import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'
let handler = async (m, { conn, args, usedPrefix, command }) => {
let stiker = false
try {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/webp|image|video/g.test(mime)) {
if (/video/g.test(mime)) if ((q.msg || q).seconds > 10) return m.reply('*[❗𝐈𝐍𝐅𝐎❗] O vídeo não pode durar mais que 10 segundos!*')
let img = await q.download?.()
if (!img) throw `*[❗𝐈𝐍𝐅𝐎❗] Responda a um vídeo ou imagem ou insira um link de uma imagem com terminação .jpg que ira ser convertido em figurinha. Deve responder ou usar o comando ${usedPrefix + command}*`
let out
try {
stiker = await sticker(img, false, m.quoted, global.author)
} catch (e) {
console.error(e)
} finally {
if (!stiker) {
if (/webp/g.test(mime)) out = await webp2png(img)
else if (/image/g.test(mime)) out = await uploadImage(img)
else if (/video/g.test(mime)) out = await uploadFile(img)
if (typeof out !== 'string') out = await uploadImage(img)
stiker = await sticker(false, out, m.quoted, global.author)
}}
} else if (args[0]) {
if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author)
else return m.reply('*[❗𝐈𝐍𝐅𝐎❗] O link / URL / não é válido, a terminação do link / URL / deve ser .jpg. Exemplo: #s https://telegra.ph/file/d41974054754ea5b366fa.jpg*')
}} catch (e) {
console.error(e)
if (!stiker) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
else throw '*[❗𝐈𝐍𝐅𝐎❗] Sinto muito, ocorreu um erro, tente novamente. Não se esqueça de responder a um vídeo ou imagem ou insira algum link com terminação .jpg que irá ser convertido para figurinha!*'
}}
handler.help = ['stiker (caption|reply media)', 'stiker <url>', 'stikergif (caption|reply media)', 'stikergif <url>']
handler.tags = ['sticker']
handler.command = /^(sfull|s2|sticker2|stickergif2|stickerwm2|stiker2)$/i
export default handler

const isUrl = (text) => {
return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))}
