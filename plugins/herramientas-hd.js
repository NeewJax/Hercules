import fetch from "node-fetch";
import uploadImage from "../lib/uploadImage.js";
let handler = async (m, { conn, usedPrefix, command }) => {
conn.unblur_high = conn.unblur_high ? conn.unblur_high : {}
if (m.sender in conn.unblur_high) throw "*[❗] Seu pedido anterior ainda não foi enviado, para não saturar o comando, aguarde até que seja enviado.*"
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ""
if (!mime) throw `*[❗] Envie uma imagem ou responda a uma imagem com o comando ${usedPrefix + command}*`
if (!/image\/(jpe?g|png)/.test(mime)) throw `*[❗] O formato do arquivo (${mime}) Não é compartilhável, envie ou responda a uma foto.`
else conn.unblur_high[m.sender] = true
m.reply('*[❗] Processando a imagem, isto pode demorar alguns minutos.. Por favor seja paciente*')
let img = await q.download?.()
let upld = await uploadImage(img)
let img2
try {
img2 = await fetch(`https://api.itsrose.site/image/unblur?url=${upld}&apikey=${global.itsrose}`)
let image = await img2.arrayBuffer()
conn.sendFile(m.chat, image, null, '', m)
} catch {
m.reply("*[❗] Erro, por favor tente novamente*");
} finally {
delete conn.unblur_high[m.sender]
}}
handler.help = ["remini", "hd", "enhance"]
handler.tags = ["ai", "tools"]
handler.command = ["remini", "hd", "enhance"]
export default handler
