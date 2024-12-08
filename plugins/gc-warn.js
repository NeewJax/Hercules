let handler = async (m, { conn, text, command, usedPrefix }) => {
    if (m.mentionedJid.includes(conn.user.jid)) return	
    
    let pp = './src/warn.jpg'
    let who
    
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat
    
    let user = global.db.data.users[who]
    let bot = global.db.data.settings[conn.user.jid] || {}
    
    let warntext = `*[❗]  MARCAR UMA PESSOA OU RESPONDER A UMA MENSAGEM DE GRUPO PARA AVISAR O USUÁRIO *\n\n*—◉ Exemplo:*\n*${usedPrefix + command} @${global.suittag}*`
    
    if (!who) throw m.reply(warntext, m.chat, { mentions: conn.parseMention(warntext)}) 
    user.warn += 1
    
    await conn.reply(m.chat, `${user.warn == 1 ? `*@${who.split`@`[0]}*` : `*@${who.split`@`[0]}*`} Você recebeu uma advertência no grupo!\n\n*ADVERTÊNCIAS ${user.warn}/3*\n\nSe você chegar a 3 advertências será banido(a)!\n\n${wm}`, m, { mentions: [who] })
    
    if (user.warn >= 3) {
      if (!bot.restrict) return m.reply('*[❗𝐈𝐍𝐅𝐎❗]  O PROPRIETÁRIO DO BOT NÃO TEM RESTRIÇÕES ATIVADAS (#enable restrict) FALE COM ELE PARA HABILITAR*')        
      
      user.warn = 0
      await m.reply(`EU AVISEI VÁRIAS VEZES!!\n*@${who.split`@`[0]}* VOCÊ SUPEROU *3* ADVERTÊNCIAS, AGORA VOCÊ VAI SER BANIDO 😡`, null, { mentions: [who]})
      await conn.groupParticipantsUpdate(m.chat, [who], 'remove') 
    } 
    
    // Resposta automática ao comando advertir
    //await conn.reply(m.chat, 'Sua advertência foi registrada.', m)


    
    return !1
  }
  
  handler.command = /^(advertir|advertencia|advertência|warn|warning)$/i
  handler.group = true
  handler.admin = true
  handler.botAdmin = true
  
  export default handler
  