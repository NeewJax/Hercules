let handler = async (m, { command, usedPrefix, text }) => {
    let M = m.constructor
    let which = command.replace(/adicionar/i, '')
    if (!m.quoted) throw '*[❗𝐈𝐍𝐅𝐎❗] Responda uma mensagem, imagem ou vídeo, etc. e adicione um texto como palavra-chave*'
    if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] Utilizar *${usedPrefix}list${which}* para ver a lista de mensagens`
    let msgs = global.db.data.msgs
    if (text in msgs) throw `*[❗𝐈𝐍𝐅𝐎❗] '${text}' Foi registrado na lista de mensagens`
    msgs[text] = M.toObject(await m.getQuotedObj())
    m.reply(`*[❗𝐈𝐍𝐅𝐎❗] Mensagem adicionada com sucesso, lista de mensagens: '${text}'*\n*Acesse com ${usedPrefix}ver${which} ${text}*`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'add' + v + ' <text>')
handler.tags = ['database']
handler.command = /^adicionar(vn|msg|video|audio|img|sticker)$/
handler.rowner = true
export default handler