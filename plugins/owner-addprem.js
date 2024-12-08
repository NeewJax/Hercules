let handler = async (m, { conn, text, usedPrefix, command }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
  else who = m.chat
  let textpremERROR = `*[❗𝐈𝐍𝐅𝐎❗] Insira a @tag da pessoa ou responda alguma mensagem para que possa adicionar ao premium*\n\n*—◉ Exemplo:*\n*◉ ${usedPrefix + command} @${m.sender.split`@`[0]} 1*\n*◉ ${usedPrefix + command} 1 <responder a mensagem>*`    
  if (!who) return m.reply(textpremERROR, null, { mentions: conn.parseMention(textpremERROR) })
   
  let user = global.db.data.users[who] 
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  //let name = await conn.getName(who)
  let name = await '@' + who.split`@`[0]

  let ERROR = `*[❗] O usuário ${'@' + who.split`@`[0]} não se encontra na minha base de dados*`
  if (!user) return m.reply(ERROR, null, { mentions: conn.parseMention(ERROR) })     
  
  var segundos10 = 10 * 1000; // 10 segundos en milisegundos
  var hora1 = 60 * 60 * 1000 * txt // 1 hora
  var dia1 = 24 * hora1 * txt // 1 día
  var semana1 = 7 * dia1 * txt // 1 semana
  var mes1 = 30 * dia1 * txt // 1 mes
  var now = Date.now()

  if (command == 'addprem' || command == 'userpremium') {
    if (now < user.premiumTime) user.premiumTime += hora1
    else user.premiumTime = now + hora1
    user.premium = true
    let timeLeft = (user.premiumTime - now) / 1000 // tiempo restante en segundos
    let textprem1 = `*🎟️ Novo usuário premium!!!*\n\n*✨ Usuário: ${name}*\n*🕐 Tempo: ${txt} hora(s)*\n*📉 Restante: ${timeLeft} segundos*`
    m.reply(textprem1, null, { mentions: conn.parseMention(textprem1) })}
    
  if (command == 'addprem2' || command == 'userpremium2') {
    if (now < user.premiumTime) user.premiumTime += dia1
    else user.premiumTime = now + dia1
    user.premium = true
    let timeLeft = (user.premiumTime - now) / 1000 / 60 / 60 // tiempo restante en horas
    let textprem2 = `*🎟️ Novo usuário premium!!!*\n\n*✨ Usuário: ${name}*\n*🕐 Tempo: ${txt} día(s)*\n*📉 Restante: ${timeLeft} horas*`
    m.reply(textprem2, null, { mentions: conn.parseMention(textprem2) })}
  
  if (command == 'addprem3' || command == 'userpremium3') {
    if (now < user.premiumTime) user.premiumTime += semana1
    else user.premiumTime = now + semana1
    user.premium = true
  formatTime(user.premiumTime - now).then(timeleft => {
    let textprem3 = `*🎟️ Novo usuário premium!!!*\n\n*✨ Usuário: ${name}*\n*🕐 Tempo: ${txt} semana(s)*\n*📉 Restante: ${timeleft}*`
    m.reply(textprem3, null, { mentions: conn.parseMention(textprem3) })})}
  
  if (command == 'addprem4' || command == 'userpremium4') {
    if (now < user.premiumTime) user.premiumTime += mes1
    else user.premiumTime = now + mes1
    user.premium = true
  formatTime(user.premiumTime - now).then(timeleft => {
    let textprem4 = `*🎟️ Novo usuário premium!!!*\n\n*✨ Usuário: ${name}*\n*🕐 Tempo: ${txt} mes(es)*\n*📉 Restante: ${timeleft}*`
    m.reply(textprem4, null, { mentions: conn.parseMention(textprem4) })})}
}
handler.help = ['addprem [@user] <days>']
handler.tags = ['owner']
handler.command = ['addprem', 'userpremium', 'addprem2', 'userpremium2', 'addprem3', 'userpremium3', 'addprem4', 'userpremium4'] 
handler.group = true
handler.rowner = true
export default handler

async function formatTime(ms) {
let seconds = Math.floor(ms / 1000);
let minutes = Math.floor(seconds / 60);
let hours = Math.floor(minutes / 60);
let days = Math.floor(hours / 24);
seconds %= 60;
minutes %= 60;
hours %= 24;
let timeString = '';
if (days) { timeString += `${days} día${days > 1 ? 's' : ''} `; }
if (hours) { timeString += `${hours} hora${hours > 1 ? 's' : ''} `; }
if (minutes) { timeString += `${minutes} minuto${minutes > 1 ? 's' : ''} `; }
if (seconds) { timeString += `${seconds} segundo${seconds > 1 ? 's' : ''} `; }
return timeString.trim(); }
