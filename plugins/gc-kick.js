let handler = async (m, { conn, participants, command, usedPrefix }) => {
  if (!global.db.data.settings[conn.user.jid].restrict) throw '*[ ⚠️ ] O PROPRIETÁRIO RESTRITOU (enable restrict / disable restrict) o uso desse comando*'
  let kicktext = `*[❗] Responda a uma mensagem de grupo para remover o usuário*\n\n*—◉ Exemplo:*\n *Responder mensagem* *${usedPrefix + command}*`
  if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, { mentions: conn.parseMention(kicktext)}) 
  if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return m.reply('*[❗] Marque uma pessoa ou responda a uma mensagem de grupo para remover o usuário*') 
  if (m.message.extendedTextMessage.contextInfo.participant !== null && m.message.extendedTextMessage.contextInfo.participant != undefined && m.message.extendedTextMessage.contextInfo.participant !== "") {
    var mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid[0] ? m.message.extendedTextMessage.contextInfo.mentionedJid[0] : m.message.extendedTextMessage.contextInfo.participant
    let ownerNumber = '559891191467' // Número do proprietário do bot
    if (mentioned.includes(ownerNumber) && m.sender.split("@")[0] !== ownerNumber) {
      return m.reply("*[❗] Não posso remover o proprietário do bot*")
    }
    if (m.sender.split("@")[0] === mentioned.split("@")[0]) return m.reply("*[❗] Não posso remover o proprietário do bot*")
    let responseb = await conn.groupParticipantsUpdate(m.chat, [mentioned], 'remove')
    let exitoso1 = `*@${mentioned.split("@")[0]} 😎 Foi removido do grupo! 😡*`
    let error1 = `*@${mentioned.split("@")[0]} É o criador do grupo... não posso remover o criador do grupo!*`
    let error2 = `*@${mentioned.split("@")[0]} já foi removido ou saiu do grupo*`
    if (responseb[0].status === "200") m.reply(exitoso1, m.chat, { mentions: conn.parseMention(exitoso1)})  
    else if (responseb[0].status === "406") m.reply(error1, m.chat, { mentions: conn.parseMention(error1)})   
    else if (responseb[0].status === "404") m.reply(error2, m.chat, { mentions: conn.parseMention(error2)})  
    else conn.sendMessage(m.chat, {text: `*[❗] Ocorreu um erro inesperado!*`, mentions: [m.sender], contextInfo:{forwardingScore:999, isForwarded:true}}, {quoted: m})
  } else if (m.message.extendedTextMessage.contextInfo.mentionedJid != null && m.message.extendedTextMessage.contextInfo.mentionedJid != undefined) {
    return
  }
}
handler.help = ['kick']
handler.tags = ['group']
handler.command = /^(kick|echar|hechar|sacar)$/i
handler.admin = handler.group = handler.botAdmin = true
export default handler
