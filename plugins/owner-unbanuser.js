let handler = async (m, { conn, text}) => {
if (!text) throw '*[❗𝐈𝐍𝐅𝐎❗] Insira a @tag de algum usuário*'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[❗𝐈𝐍𝐅𝐎❗] Insira a @tag de algum usuário*'
let users = global.db.data.users
users[who].banned = false
conn.reply(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] O usuario foi desbanido com sucesso!*\n*—◉ O usuário já pode usar o bot :)*`, m)
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^unbanuser$/i
handler.rowner = true
export default handler
