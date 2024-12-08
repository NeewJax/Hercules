let handler = async (m, { conn, command, text }) => {
let love = `*❤️❤️ MEDIDOR DE AMOR ❤️❤️*
*O amor de ${text} por ti é de* *${Math.floor(Math.random() * 100)}%* *de 100%*
*você deve pedir a ela para ser sua namorada??*
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(love)$/i
export default handler
