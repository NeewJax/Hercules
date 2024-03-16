let handler = async (m, { conn, participants, usedPrefix, command }) => {
let BANtext = `[❗] Marque uma pessoa ou responda a uma mensagem enviada pelo usuário que você deseja banir\n\n*—◉ Exemplo:*\n*${usedPrefix + command} @${global.suittag}*`
if (!m.mentionedJid[0] && !m.quoted) return m.reply(BANtext, m.chat, { mentions: conn.parseMention(BANtext)})
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
else who = m.chat
let users = global.db.data.users
users[who].banned = true
m.reply('*[❗𝐈𝐍𝐅𝐎❗] O usuário foi banido com sucesso*\n*—◉ O usuário não poderá usar o bot, somente se for desbanido!*')    }
handler.command = /^banuser$/i
handler.rowner = true
export default handler
