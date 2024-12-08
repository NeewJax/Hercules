let handler = async (m, { conn, text, command, usedPrefix, args }) => {
//let pp = 'https://www.bighero6challenge.com/images/thumbs/Piedra,-papel-o-tijera-0003318_1584.jpeg'
let pp = 'https://telegra.ph/file/c7924bf0e0d839290cc51.jpg'

// 60000 = 1 minuto // 30000 = 30 segundos // 15000 = 15 segundos // 10000 = 10 segundos
let time = global.db.data.users[m.sender].wait + 10000
if (new Date - global.db.data.users[m.sender].wait < 10000) throw `*🕓  Você terá que esperar  ${Math.floor((time - new Date()) / 1000)}  segundos antes de poder jogar novamente *`

if (!args[0]) return conn.reply(m.chat, `*Pedra 🗿, Papel 📄 ou tisoura ✂️*\n\n*—◉ Você pode usar estes comandos: *\n*◉ ${usedPrefix + command} pedra*\n*◉ ${usedPrefix + command} papel*\n*◉ ${usedPrefix + command} tesoura*`, m)
//conn.sendButton(m.chat, `*𝐏𝐢𝐞𝐝𝐫𝐚 🗿, 𝐏𝐚𝐩𝐞𝐥 📄 𝐨 𝐓𝐢𝐣𝐞𝐫𝐚 ✂️*\n\n*—◉  𝙿𝚎𝚍𝚎𝚜 𝚞𝚜𝚊𝚛 𝚕𝚘𝚜 𝚋𝚘𝚝𝚘𝚗𝚎𝚜 𝚙𝚊𝚛𝚊 𝚓𝚞𝚐𝚊𝚛 𝚘 𝚝𝚊𝚖𝚋𝚒𝚎𝚗 𝚙𝚞𝚎𝚍𝚎𝚜 𝚞𝚜𝚊𝚛 𝚎𝚜𝚝𝚘𝚜 𝚌𝚘𝚖𝚊𝚗𝚍𝚘𝚜:*\n*◉ ${usedPrefix + command} piedra*\n*◉ ${usedPrefix + command} papel*\n*◉ ${usedPrefix + command} tijera*`, wm, pp, [['Piedra 🗿', `${usedPrefix + command} piedra`], ['Papel 📄', `${usedPrefix + command} papel`], ['Tijera ✂️', `${usedPrefix + command} tijera`]], m)    
var astro = Math.random()
if (astro < 0.34) {
astro = 'pedra' 
} else if (astro > 0.34 && astro < 0.67) {
astro = 'papel' 
} else {
astro = 'tesoura'
}
let textm = text.toLowerCase()  
if (textm == astro) {
global.db.data.users[m.sender].exp += 500
m.reply(`*🔰 Empate!*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 O Bot: ${astro}*\n*🎁 Prêmio +500 XP*`)
} else if (text == 'papel') {
if (astro == 'pedra') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*🥳 Você ganhou! 🎉*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 O Bot: ${astro}*\n*🎁 Prêmio +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*☠️ Você perdeu! ❌*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 O Bot: ${astro}*\n*❌ Prêmio -300 XP*`)
}
} else if (text == 'tesoura') {
if (astro == 'papel') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*🥳 Você ganhou! 🎉*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 O Bot: ${astro}*\n*🎁 Prêmio +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*☠️ Você perdeu! ❌*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 O Bot: ${astro}*\n*❌ Prêmio -300 XP*`)
}
} else if (textm == 'tesoura') {
if (astro == 'papel') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*🥳 Você ganhou! 🎉*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 O Bot: ${astro}*\n*🎁 Prêmio +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*☠️ Você perdeu! ❌*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 O Bot: ${astro}*\n*❌ Prêmio -300 XP*`)
}
} else if (textm == 'papel') {
if (astro == 'pedra') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*🥳 Você ganhou! 🎉*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 O Bot: ${astro}*\n*🎁 Prêmio +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*☠️ Você perdeu! ❌*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 O Bot: ${astro}*\n*❌ Prêmio -300 XP*`)
}
} else if (textm == 'pedra') {
if (astro == 'tesoura') {
global.db.data.users[m.sender].exp += 1000
m.reply(`*🥳 Você ganhou! 🎉*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 O Bot: ${astro}*\n*🎁 Prêmio +1000 XP*`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`*☠️ Você perdeu! ❌*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 O Bot: ${astro}*\n*❌ Prêmio -300 XP*`)
}}
global.db.data.users[m.sender].wait = new Date * 1
}
handler.help = ['ppt']
handler.tags = ['games']
handler.command = /^(ppt)$/i
export default handler
