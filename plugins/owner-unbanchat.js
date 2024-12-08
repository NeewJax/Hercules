let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = false
m.reply('*[❗𝐈𝐍𝐅𝐎❗] ESTE CHAT FOI DESBANIDO COM ÊXITO*')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^unbanchat$/i
handler.rowner = true
export default handler
