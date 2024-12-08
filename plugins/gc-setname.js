import Presence from '@whiskeysockets/baileys'
let handler  = async (m, { conn, args, text }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] Coloque o nome que deseja para ser o novo nome do grupo*`
try {
let text = args.join` `
if(!args || !args[0]) {
} else {
conn.groupUpdateSubject(m.chat, text)}
} catch (e) {
throw '*[❗𝐈𝐍𝐅𝐎❗] Sinto muito, houve um erro o nome do grupo não pode ter mais do que 25 caracteres*'
}}
handler.help = ['setname <text>']
handler.tags = ['group']
handler.command = /^(setname)$/i
handler.group = true
handler.admin = true
export default handler
