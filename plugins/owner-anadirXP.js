import MessageType from '@adiwajshing/baileys'
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[❗𝐈𝐍𝐅𝐎❗] Marque um usuário com @tag*'
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw '*[❗𝐈𝐍𝐅𝐎❗] Insira a quantidade de experiência (XP) que deseja adicionar*'
if (isNaN(txt)) throw '*[❗𝐈𝐍𝐅𝐎❗] Simbolo não permitido, somente numeros!*'
let xp = parseInt(txt)
let exp = xp
let pjk = Math.ceil(xp * pajak)
exp += pjk
if (exp < 1) throw '*[❗𝐈𝐍𝐅𝐎❗] O Número mínimo de experiência(XP) para adicionar é 1*'
let users = global.db.data.users
users[who].exp += xp
  m.reply(`≡ *XP adicionado*
┌──────────────
▢  *Total:* ${xp}
└──────────────`)
}
handler.command = ['adicionarxp','addexp'] 
handler.rowner = true
export default handler
