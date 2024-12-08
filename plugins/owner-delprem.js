let handler = async (m, { conn, text, usedPrefix, command }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
else who = m.chat
let user = global.db.data.users[who]
if (!who) throw `*[❗] Insira a @tag da pessoa ou responda alguma mensagem da pessoa que deseja eliminar dos usuários premium*`
if (!user) throw `*[❗] O usuário não foi encontrado no banco de dados*`
if (user.premiumTime = 0) throw '*[❗] O usuário mencionado não é premium!*'
let txt = text.replace('@' + who.split`@`[0], '').trim()

user.premiumTime = 0
  
user.premium = false
  
let textdelprem = `*[❗] @${who.split`@`[0]} Agora você não faz mais parte dos usuários premium*`
m.reply(textdelprem, null, { mentions: conn.parseMention(textdelprem) })  
    
}
handler.help = ['delprem <@user>']
handler.tags = ['owner']
handler.command = /^(remove|-|del)prem$/i
handler.group = true
handler.rowner = true
export default handler
