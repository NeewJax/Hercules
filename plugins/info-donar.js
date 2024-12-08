/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

import { generateWAMessageFromContent } from '@whiskeysockets/baileys'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
let donar =`
*┏ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*
*┇          「 𝘿𝙤𝙖𝙘̧𝙤̃𝙚𝙨 」*
*┣ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*
*┃ Oii ${name}*
*┃*
*┃ 👉🏻 𝙋𝙞𝙭 𝙥𝙖𝙧𝙖 𝙖𝙥𝙤𝙞𝙖𝙧 𝙤 𝙥𝙧𝙤𝙟𝙚𝙩𝙤 𝙙𝙤 𝙗𝙤𝙩 <3
*┃*
*┃ ➤ 𝘾𝙃𝘼𝙑𝙀 𝙋𝙞𝙭:* 
*┃ de026644-7f36-430f-8cfd-1bc2b911b124*
*┃ ➤ BANCO: Nubank*  
*┃*
*┃ 👉🏻 Entre em contato se precisar*
*┃ wa.me/559891191467*
*┗ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*
`.trim()
let aa = { quoted: m, userJid: conn.user.jid }
let res = generateWAMessageFromContent (m.chat, {liveLocationMessage: {degreesLatitude: 0, degreesLongitude: 0, caption: donar, secuenceNumber: "0", contextInfo: {mentionedJid: conn.parseMention()}}}, aa)
conn.relayMessage(m.chat, res.message, {})
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|donar|doar|doacao|doação|pix|chave|Pix|chavepix|apoyar$/i
export default handler
