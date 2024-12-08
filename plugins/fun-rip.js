import fetch from "node-fetch";
import uploadImage from "../lib/uploadImage.js";
let handler = async (m, { conn, usedPrefix, command }) => {
conn.rip = conn.rip ? conn.rip : {}
if (m.sender in conn.rip) throw "*[❗] Seu pedido anterior ainda não foi enviado, para não saturar o comando, aguarde até que seja enviado.*"
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ""
if (!mime) throw `*[❗] Envie uma imagem ou responda a uma imagem com o comando ${usedPrefix + command}*`
if (!/image\/(jpe?g|png)/.test(mime)) throw `*[❗] O formato do arquivo (${mime}) Não é compartilhável, envie ou responda a uma foto.`
else conn.rip[m.sender] = true
m.reply('Parece que alguém aqui morreu não é mesmo? descanse em paz... 💀')
let img = await q.download?.()
let upld = await uploadImage(img)
let img2
try {
img2 = await fetch(`https://api.lolhuman.xyz/api/creator1/rip?apikey=${global.lolkeysapi}&img=${upld}`)
let image = await img2.arrayBuffer()
conn.sendFile(m.chat, image, null, '', m)
} catch {
m.reply("*[❗] Erro, por favor tente novamente*");
} finally {
delete conn.rip[m.sender]
}}
handler.help = ["rip", "morto"]
handler.tags = ["rip", "morto"]
handler.command = ["rip", "morto", "morri"]
export default handler
