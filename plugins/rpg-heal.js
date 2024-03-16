import { join } from 'path' 
import { promises } from 'fs'
let handler = async (m, { conn, args, usedPrefix, __dirname }) => {
let imgr = flaaa.getRandom()
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let user = global.db.data.users[m.sender]
if (user.health >= 100) return conn.reply(m.chat, `*Sua saúde está cheia ❤️*\n\nSaúde: ${user.health}`, m)
/*conn.sendButton(m.chat, `𝚃𝚄 𝚂𝙰𝙻𝚄𝙳 𝙴𝚂𝚃𝙰 𝙻𝙻𝙴𝙽𝙰 ❤️`, wm, imgr + `SALUD: ${user.health}`, [
[`🏕️ 𝙰𝚅𝙴𝙽𝚃𝚄𝚁𝙰𝚁`, `${usedPrefix}adventure`]], m)*/
const heal = 40 + (user.cat * 4)
let count = Math.max(1, Math.min(Number.MAX_SAFE_INTEGER, (isNumber(args[0]) && parseInt(args[0]) || Math.round((90 - user.health) / heal)))) * 1
if (user.potion < count) return conn.reply(m.chat, `*${htki} Sem poções ${htka}\n\nVocê precisa ${count - user.potion} poção 🥤 para te curar
Saúde » ${user.health} ❤️
Poção » ${user.potion} 🥤
Compre poção ou peça a alguém para transferi-lo`, m)
/*conn.sendButton(m.chat,`${htki} 𝚂𝙸𝙽 𝙿𝙾𝙲𝙸𝙾𝙽𝙴𝚂 ${htka}`, 
`𝙽𝙴𝙲𝙴𝚂𝙸𝚃𝙰𝚂 ${count - user.potion} 𝙿𝙾𝙲𝙸𝙾𝙽 🥤 𝙿𝙰𝚁𝙰 𝙲𝚄𝚁𝙰𝚁𝚃𝙴
𝚂𝙰𝙻𝚄𝙳 » ${user.health} ❤️
𝙿𝙾𝙲𝙸𝙾𝙽 » ${user.potion} 🥤
𝙲𝙾𝙼𝙿𝚁𝙰 𝙿𝙾𝙲𝙸𝙾𝙽 𝙾 𝙿𝙸𝙳𝙴𝙻𝙴 𝙰 𝙰𝙻𝙶𝚄𝙸𝙴𝙽 𝚀𝚄𝙴 𝚃𝙴 𝚃𝚁𝙰𝙽𝚂𝙵𝙸𝙴𝚁𝙰`.trim(), imgr + 'POCION BAJA', [
[`𝙲𝙾𝙼𝙿𝚁𝙰𝚁 𝙿𝙾𝙲𝙸𝙾𝙽 🥤`, `${usedPrefix}buy potion ${count - user.potion}`],
[`𝙿𝙴𝙳𝙸𝚁 𝙰𝚈𝚄𝙳𝙰 📣`, `${usedPrefix}pedirayuda *Por Favor alguien ayudeme con ${count - user.potion} de POCION* 🥤 
*» AYUDA TRANSFIRIENDO:*
*${usedPrefix}transfer potion ${count - user.potion}* @${conn.getName(m.sender)}`]], m)*/
user.potion -= count * 1 //1 potion = count (1) 
user.health += heal * count 
conn.reply(m.chat, `**━┈━《 ✅ Saúde completa 》━┈━*\n\nUsada com sucesso ${count} de poção 🥤 para recuperar sua saúde\n\𝚗Saúde » ${user.health} ❤\n\nSaúde completada`, m)}
/*conn.sendButton(m.chat, `*━┈━《 ✅ 𝚂𝙰𝙻𝚄𝙳 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙰 》━┈━*`, `𝙴𝚇𝙸𝚃𝙾𝚂𝙰𝙼𝙴𝙽𝚃𝙴 𝚄𝚂𝙾 ${count} 𝙳𝙴 𝙿𝙾𝙲𝙸𝙾𝙽 🥤 𝙿𝙰𝚁𝙰 𝚁𝙴𝙲𝚄𝙿𝙴𝚁𝙰𝚁 𝚂𝚄 𝚂𝙰𝙻𝚄𝙳\n\𝚗𝚂𝙰𝙻𝚄𝙳 » ${user.health} ❤️`, imgr + 'SALUD COMPLETADA', [
[`𝙰𝚅𝙴𝙽𝚃𝚄𝚁𝙰𝚁 🏕️`, `${usedPrefix}adventure`]], m)*/
handler.help = ['heal']
handler.tags = ['rpg']
handler.command = /^(heal|curar)$/i
export default handler
function isNumber(number) {
if (!number) return number
number = parseInt(number)
return typeof number == 'number' && !isNaN(number)}
