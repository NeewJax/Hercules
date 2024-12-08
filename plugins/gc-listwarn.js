let handler = async (m, { conn, isOwner }) => {
    let adv = Object.entries(global.db.data.users).filter(user => user[1].warn);
    let imagewarn = './src/warn.jpg';
    let caption = `⚠️ USUÁRIOS ADVERTIDOS\n\n*Total: ${adv.length} Usuários*\n\n${adv.length > 0 ? adv.map(([jid, user], i) => {
      return `▫️ ${isOwner ? '@' + jid.split`@`[0] : jid} *(${user.warn}/3)*\n`;
    }).join('\n') : 'Não há usuários com advertências.'}`;
  
    await conn.sendMessage(m.chat, {
      text: caption,
      quoted: m,
      contextInfo: { mentionedJid: await conn.parseMention(caption) }
    });
  };
  
  handler.command = /^(listwarn)$/i;
  handler.group = true;
  handler.admin = true;
  
  export default handler;
  