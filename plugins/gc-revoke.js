/* Creditos a https://github.com/ALBERTO9883 */

let handler = async(m, { conn }) => {
let revoke = await conn.groupRevokeInvite(m.chat)
await conn.reply(m.chat, `🔹️ *_O link do grupo foi restaurado com sucesso._*\n♾ • Novo link: ${'https://chat.whatsapp.com/' + revoke}`, m)}
handler.command = ['resetlink', 'revoke']
handler.botAdmin = true
handler.admin = true
handler.group = true
export default handler
