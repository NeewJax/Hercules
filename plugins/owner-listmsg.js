let handler = m => {
let msgs = global.db.data.msgs
m.reply(`
*🔰 LISTA DE TEXTOS E PALAVRAS CHAVES 🔰*

*✳️ Mensagens ✳️*
${Object.keys(msgs).map(v => '*👉🏻 ' + v).join('*\n*')}*
`.trim())
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'list' + v)
handler.tags = ['database']
handler.command = /^list(vn|msg|video|audio|img|sticker)$/
export default handler