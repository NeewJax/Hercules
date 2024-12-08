import fetch from 'node-fetch'
let handler = async (m, { conn, command, args }) => {
if (!args[0]) return conn.reply(m.chat, '*[🔎] Digite o URL de uma página*', m)
let ss = await (await fetch(`https://image.thum.io/get/fullpage/${args[0]}`)).buffer()
conn.sendFile(m.chat, ss, 'error.png', args[0], m)}
handler.help = ['ss', 'ssf'].map(v => v + ' <url>')
handler.tags = ['internet']
handler.command = /^ss(web)?f?$/i
export default handler
