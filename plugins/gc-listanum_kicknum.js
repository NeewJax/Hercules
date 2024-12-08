/*              Codigo Creado Por Bruno Sobrino 
      (https://github.com/BrunoSobrino/TheMystic-Bot-MD) 
*/

let handler = async (m, { conn, args, groupMetadata, participants, usedPrefix, command, isBotAdmin, isSuperAdmin }) => {
if (!args[0]) return m.reply(`*[❗] Insira o prefixo de algum país para buscar números neste grupo desse país. Exemplo: ${usedPrefix + command} 52*`) 
if (isNaN(args[0])) return m.reply(`*[❗] Insira o prefixo de algum país para buscar números neste grupo desse país. Exemplo: ${usedPrefix + command} 52*`) 
let lol = args[0].replace(/[+]/g, '')
let ps = participants.map(u => u.id).filter(v => v !== conn.user.jid && v.startsWith(lol || lol)) 
let bot = global.db.data.settings[conn.user.jid] || {}
if (ps == '') return m.reply(`*[❗] Neste grupo não há ninguem com o prefixo +${lol}*`)
let numeros = ps.map(v=> '⭔ @' + v.replace(/@.+/, ''))
const delay = time => new Promise(res=>setTimeout(res,time));
switch (command) {
case "listanum": 
conn.reply(m.chat, `*Lista de números com prefixo +${lol} que estão nesse grupo:*\n\n` + numeros.join`\n`, m, { mentions: ps })
break   
case "kicknum":  
if (!bot.restrict) return m.reply('*[❗𝐈𝐍𝐅𝐎❗] O proprietário do bot não habilitou as restrições (#enable restrict) contate o proprietário do Bot*') 
if (!isBotAdmin) return m.reply('*[❗𝐈𝐍𝐅𝐎❗] O bot não é admin, não pode remover pessoas do grupo!*')          
conn.reply(m.chat, `*[❗] Removendo números com o prefixo +${lol}, a cada 10 segundo irá remover um usuário*`, m)            
let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
let users = participants.map(u => u.id).filter(v => v !== conn.user.jid && v.startsWith(lol || lol))
for (let user of users) {
let error = `@${user.split("@")[0]} Foi removido ou saiu do grupo*`    
if (user !== ownerGroup + '@s.whatsapp.net' && user !== global.conn.user.jid && user !== global.owner + '@s.whatsapp.net' && user.startsWith(lol || lol) && user !== isSuperAdmin && isBotAdmin && bot.restrict) { 
await delay(2000)    
let responseb = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
if (responseb[0].status === "404") m.reply(error, m.chat, { mentions: conn.parseMention(error)})  
await delay(10000)
} else return m.reply('*[❗] Erro...*')}
break            
}}
handler.command = /^(listanum|kicknum)$/i
handler.group = handler.botAdmin = handler.admin = true
handler.fail = null
export default handler
