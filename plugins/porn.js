import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let pp = imagen5
let vn = './media/La biblia.mp3'
let img = await(await fetch('https://i.imgur.com/JP52fdP.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let str = `╭═══〘 ✯✯✯✯✯✯✯✯✯ 〙══╮
║    ◉— *The Hercules Bot* —◉
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *Oii, ${taguser}*
╰═══╡✯✯✯✯✯✯✯✯✯╞═══╯

┏━━━━━━━━━━━━━━━━┓
┃ *< MENU+18 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟🔞*.nsfwloli*
┣ ඬ⃟🔞*.nsfwfoot*
┣ ඬ⃟🔞*.nsfwassnsfwbdsm*
┣ ඬ⃟🔞*.nsfwcum*
┣ ඬ⃟🔞*.nsfwero*
┣ ඬ⃟🔞*.nsfwfemdom*
┣ ඬ⃟🔞*.nsfwfoot*
┣ ඬ⃟🔞*.nsfwglss*
┣ ඬ⃟🔞*.nsfworgy*
┣ ඬ⃟🔞*.yuri*
┣ ඬ⃟🔞*.yuri2*
┣ ඬ⃟🔞*.yaoi*
┣ ඬ⃟🔞*.yaoi2*
┣ ඬ⃟🔞*.panties*
┣ ඬ⃟🔞*.tits*
┣ ඬ⃟🔞*.booty*
┣ ඬ⃟🔞*.pechos*
┣ ඬ⃟🔞*.tetas*
┣ ඬ⃟🔞*.booty*
┣ ඬ⃟🔞*.ecchi*
┣ ඬ⃟🔞*.furro*
┣ ඬ⃟🔞*.hentai*
┣ ඬ⃟🔞*.trapito*
┣ ඬ⃟🔞*.imagenlesbians*
┣ ඬ⃟🔞*.pene*
┣ ඬ⃟🔞*.porno*
┣ ඬ⃟🔞*.randomxxx*
┣ ඬ⃟🔞 _${usedPrefix}xnxxsearch <texto>_
┣ ඬ⃟🔞 _${usedPrefix}xnxxdl <link / url>_
┣ ඬ⃟🔞 _${usedPrefix}xvideosdl <link / url>_
┗━━━━━━━━━━━━━━━━┛`.trim()
if (m.isGroup) {
await conn.sendFile(m.chat, vn, 'La biblia.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })  
} else {    
await conn.sendFile(m.chat, vn, 'La biblia.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] O MENU TEM UM ERRO E NÃO FOI POSSÍVEL ENVIAR, REPORTE ISSO AO CRIADOR DO BOT*', m)
}}
handler.command = /^(porn|menuporn|Porn)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}