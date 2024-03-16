import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command, args, text }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw '⚠️️ Resnpoda a alguma imagem ou vídeo.'
if (!text) throw '⚠️️ Insira o novo peso da imagem/vídeo.'
  if (isNaN(text)) throw ' 🔢 somente números'
if (!/image\/(jpe?g|png)|video|document/.test(mime)) throw `⚠️️ formato não suportado`
let img = await q.download()
let url = await uploadImage(img)

if (/image\/(jpe?g|png)/.test(mime)) {
conn.sendMessage(m.chat, { image: {url: url}, caption: `Aqui tens`, fileLength: `${text}`, mentions: [m.sender] }, { ephemeralExpiration: 24*3600, quoted: m})
} else if (/video/.test(mime)) {
return conn.sendMessage(m.chat, { video: {url: url}, caption: `Aqui tens`, fileLength: `${text}`, mentions: [m.sender] }, { ephemeralExpiration: 24*3600, quoted: m })}
}
handler.tags = ['tools']
handler.help = ['tamanho <quantidade>']
handler.command = /^(length|filelength|edittamanho|editartamanho|tamanho)$/i
export default handler
