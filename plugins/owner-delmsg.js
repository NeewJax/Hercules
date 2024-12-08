let handler = async (m, { command, usedPrefix, text }) => {
let which = command.replace(/eliminar/i, '')
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] USAR ${usedPrefix}list${which} PARA VER A LISTA*`
let msgs = global.db.data.msgs
if (!text in msgs) throw `*[❗𝐈𝐍𝐅𝐎❗] '${text}' NÃO REGISTRADO NA LISTA DE MENSAGENS*`
delete msgs[text]
m.reply(`*[❗𝐈𝐍𝐅𝐎❗] Eliminada com sucesso na lista de mensagens a mensagem com o nome '${text}'*`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'del' + v + ' <text>')
handler.tags = ['database']
handler.command = /^eliminar(vn|msg|video|audio|img|sticker)$/
handler.rowner = true
export default handler