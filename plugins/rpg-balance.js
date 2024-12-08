let handler = async (m, {usedPrefix}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
m.reply(`
┌───⊷ Saldo ⊶
▢ *Nome:* ${name}
▢ *Diamantes:* ${global.db.data.users[who].limit}💎
└──────────────
*NOTA:* 
*Você pode comprar diamantes 💎 usando os comandos*
❏ *${usedPrefix}buy <cantidad>*
❏ *${usedPrefix}buyall*`)
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['bal', 'diamantes', 'diamond', 'balance'] 
export default handler
