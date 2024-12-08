export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {
if (m.isBaileys && m.fromMe) return !0
if (m.isGroup) return !1
if (!m.message) return !0
if (m.text.includes('PEDRA') || m.text.includes('PAPEL') || m.text.includes('TESOURA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
if (bot.antiPrivate && !isOwner && !isROwner) {
await m.reply(`*[❗] Oiii @${m.sender.split`@`[0]}, infelizmente eu não funciono no privado 🙁. Mas não se preocupe,você pode pedir para o meu chefe desbloquear você!! :)*`, false, { mentions: [m.sender] })
await this.updateBlockStatus(m.chat, 'block')}
return !1
}
