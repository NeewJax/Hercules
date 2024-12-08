/* Creditos a https://github.com/unptoadrih15/UPABOT-MD */

let handler = async (m, { conn, isAdmin }) => {  
if (m.fromMe) return
if (isAdmin) throw '*[❗] Oii meu dono, tudo bem? você já é administrador deste grupo :) *'
try {  
await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
} catch {
await m.reply('*[❗] Erro... não foi possível transformar você em admin :( *')}}
handler.command = /^autoadmin$/i
handler.rowner = true
handler.group = true
handler.botAdmin = true
export default handler
