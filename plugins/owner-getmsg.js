let handler = async (m, { conn, command, usedPrefix, text }) => {
let which = command.replace(/ver/i, '')
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] USAR *${usedPrefix}list${which}* PARA VER A LISTA*`
let msgs = global.db.data.msgs
if (!text in msgs) throw `*[❗𝐈𝐍𝐅𝐎❗] '${text}' Não registrado na lista de mensagens*`
let _m = await conn.serializeM(msgs[text])
await _m.copyNForward(m.chat, true)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'get' + v + ' <text>')
handler.tags = ['database']
handler.command = /^ver(vn|msg|video|audio|img|sticker)$/
handler.rowner = true
export default handler