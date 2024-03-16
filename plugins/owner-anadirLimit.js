import MessageType from '@adiwajshing/baileys'
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[❗𝐈𝐍𝐅𝐎❗] Insira algum usuário com @tag*'
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw '*[❗𝐈𝐍𝐅𝐎❗] Insira a quantidade de diamaentes que deseja!*'
if (isNaN(txt)) throw '*[❗𝐈𝐍𝐅𝐎❗] Simbolo não permitido, somente números!*'
let dmt = parseInt(txt)
let limit = dmt
let pjk = Math.ceil(dmt * pajak)
limit += pjk
if (limit < 1) throw '*[❗𝐈𝐍𝐅𝐎❗] O número minimo para dar diamantes é 1*'
let users = global.db.data.users
users[who].limit += dmt
m.reply(`≡ *💎 Adicionado*
┌──────────────
▢ *Total:* ${dmt}
└──────────────`)
}
handler.command = ['adicionardiamantes','addd','dard','dardiamantes'] 
handler.rowner = true
export default handler
