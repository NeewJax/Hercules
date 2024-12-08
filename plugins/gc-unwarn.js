let handler = async (m, { conn, text, command, usedPrefix }) => {
    let pp = './src/warn.jpg'
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat
    let user = global.db.data.users[who]
    let bot = global.db.data.settings[conn.user.jid] || {}
    let warntext = `*[❗] Marque alguma pessoa ou responda alguma mensagem do grupo*\n\n*—◉ Exemplo:*\n*${usedPrefix + command} @${global.suittag}*`
    if (!who) throw m.reply(warntext, m.chat, { mentions: conn.parseMention(warntext) })
    if (m.mentionedJid.includes(conn.user.jid)) return
    if (user.warn == 0) throw '*[❗] O usuário tem 0 advertências*'
    user.warn -= 1
    //await conn.reply(m.chat, `${user.warn == 1 ? `*@${who.split`@`[0]}*` : `♻️ *@${who.split`@`[0]}*`} Uma advertência foi removida`, `*ADVERTÊNCIAS:*\n⚠️ *Antes: ${user.warn + 1}/3*\n⚠️ *Agora: ${user.warn}/3*\n\n${wm}`, pp, [['📋 LISTWARN 📋', '#listwarn']], m, { mentions: [who] })
    await conn.reply(m.chat, `${user.warn == 1 ? `*@${who.split`@`[0]}*` : `*@${who.split`@`[0]}*`} Uma advertência foi removida!\n\n*ADVERTÊNCIAS:* \n *Antes: ${user.warn + 1}/3*\n *Agora: ${user.warn}/3*\n\n${wm}`, m, { mentions: [who] })
}
  
  handler.command = /^(unwarn|delwarn|deladvertir|deladvertencia|delwarning)$/i
  handler.group = true
  handler.admin = true
  handler.botAdmin = true
  
  export default handler
  