
let { downloadContentFromMessage } = (await import('@whiskeysockets/baileys'));

let handler = async (m, { conn }) => {
if (!m.quoted) throw '*[❗] RESPONDA A UMA MENSAGEM QUE TENHA SIDO ENVIADA EM VISUALIZAÇÃO ÚNICA*'
if (m.quoted.mtype !== 'viewOnceMessageV2') throw '*[❗] A mensagem selecionada não foi enviada em visualização única*'
let msg = m.quoted.message
let type = Object.keys(msg)[0]
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])}
if (/video/.test(type)) {
return conn.sendFile(m.chat, buffer, 'error.mp4', msg[type].caption || '', m)
} else if (/image/.test(type)) {
return conn.sendFile(m.chat, buffer, 'error.jpg', msg[type].caption || '', m)
}}
handler.help = ['readvo']
handler.tags = ['tools']
handler.command = /^(readviewonce|olhar|read|revelar|readvo)$/i
export default handler
