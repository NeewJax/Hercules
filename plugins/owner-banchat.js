let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
m.reply('*[❗𝐈𝐍𝐅𝐎❗] Este chat foi banido com sucesso*\n\n*—◉ o bot não fara nenhum comando até desbloquear*')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat$/i
handler.rowner = true
export default handler
