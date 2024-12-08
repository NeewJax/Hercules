import { pinterest } from '@bochilteam/scraper'
let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] Exemplo do uso do comando: ${usedPrefix + command} Minecraft*`
const json = await pinterest(text)
conn.sendFile(m.chat, json.getRandom(), 'error.jpg', `
*Resultado da busca*
${text}
`.trim(), m)
}
handler.help = ['pinterest <keyword>']
handler.tags = ['internet']
handler.command = /^(searchpinterest|buscarpinterest|buscarpin)$/i
export default handler
