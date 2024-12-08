let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
await conn.reply(id, '*Tchauzinho, o bot está se despedindo!*') 
await conn.groupLeave(id)}
handler.command = /^(out|leavegc|leave|sairdogrupo)$/i
handler.group = true
handler.rowner = true
export default handler
