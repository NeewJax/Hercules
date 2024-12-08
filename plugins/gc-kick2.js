let handler = async (m, { conn, participants, usedPrefix, command }) => {
    if (!global.db.data.settings[conn.user.jid].restrict) throw '*[ ⚠️ ] O PROPRIETÁRIO RESTRITOU (enable restrict / disable restrict) o uso desse comando*'
    let kicktext = `*[❗] Marque uma pessoa ou responda a uma mensagem de grupo para remover o usuário*\n\n*—◉  Exemplo:*\n*${usedPrefix + command} @${global.suittag}*`
    let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    let owr = m.chat.split`-`[0]
    if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, { mentions: conn.parseMention(kicktext) }) 
    let ownerNumber = '559891191467' // Número do proprietário do bot
    let mentioned = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    if (mentioned.includes(ownerNumber) && m.sender.split("@")[0] !== ownerNumber) {
      return m.reply("*[❗] Não posso remover o meu dono...*")
    }
    if (m.mentionedJid.includes(conn.user.jid) && m.sender.split("@")[0] !== conn.user.jid.split("@")[0]) {
      return m.reply("*[❗] Tente outra pessoa...*")
    }
   //if (m.mentionedJid.includes(conn.user.jid)) return m.reply("*[❗] Não posso aaaa remover o proprietário do bot*")
    //if (m.sender.split("@")[0] === user.split("@")[0]) return m.reply("*[❗] Marque outra pessoa...*")
    let response = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
    if (response[0].status === "200") {
      let successMsg = `*@${user.split("@")[0]} Foi removido do grupo! 😡*`
      m.reply(successMsg, m.chat, { mentions: conn.parseMention(successMsg) })
    } else if (response[0].status === "406") {
      let errorMsg = `*@${user.split("@")[0]} É o criador do grupo... não posso remover o criador do grupo!*`
      m.reply(errorMsg, m.chat, { mentions: conn.parseMention(errorMsg) })
    } else if (response[0].status === "404") {
      let errorMsg = `*@${user.split("@")[0]} já foi removido ou saiu do grupo*`
      m.reply(errorMsg, m.chat, { mentions: conn.parseMention(errorMsg) })
    } else {
      conn.sendMessage(m.chat, {
        text: `*[❗] Ocorreu um erro inesperado!*`,
        mentions: [m.sender],
        contextInfo: { forwardingScore: 999, isForwarded: true }
      }, { quoted: m })
    }
  }
  
  handler.help = ['kick2']
  handler.tags = ['group']
  handler.command = /^(kick2|ban|echar2|hechar2|sacar2)$/i
  handler.admin = true
  handler.group = true
  handler.botAdmin = true
  
  export default handler
  