let timeout = 60000
let poin = 500
let poin_lose = -100
let poin_bot = 200
let handler = async (m, { conn, usedPrefix, text }) => {
conn.suit = conn.suit ? conn.suit : {}
if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) throw '*[❗]  TERMINE SEU JOGO ANTES DE INICIAR OUTRO *'
let textquien = `* QUEM VOCÊ QUER DESAFIAR? MARCAR UMA PESSOA *\n\n*—◉ Exemplo:*\n${usedPrefix}suit @${global.suittag}`
if (!m.mentionedJid[0]) return m.reply(textquien, m.chat, { mentions: conn.parseMention(textquien)})
if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) throw `*[❗]  A PESSOA QUE VOCÊ QUER DESAFIAR AINDA ESTÁ JOGANDO OUTRO JOGO, ESPERE ATÉ TERMINAR DE JOGAR `
let id = 'suit_' + new Date() * 1
let caption = `🎮 GAMES - PVP - GAMES 🎮\n\n—◉ @${m.sender.split`@`[0]} DESAFIO @${m.mentionedJid[0].split`@`[0]}  A EM UMA PEDRA, PAPEL OU TESOURA PVP `.trim()
let footer = `◉  DIGITE "aceitar" PARA ACEITAR \n◉  DIGITE "recusar" PARA REJEITAR`
let imgplaygame = `https://www.merca2.es/wp-content/uploads/2020/05/Piedra-papel-o-tijera-0003318_1584-825x259.jpeg`
conn.suit[id] = {
chat: await conn.sendButton(m.chat, caption, footer, imgplaygame, [[`aceitar`], [`recusar`]], null, {mentions: conn.parseMention(caption)}),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (conn.suit[id]) conn.reply(m.chat, `[ ⏳ ] TEMPO LIMITE ENCERRADO, PVP CANCELADO DEVIDO À FALTA DE RESPOSTA`, m)
delete conn.suit[id]
}, timeout), poin, poin_lose, poin_bot, timeout
}}
handler.command = /^pvp|suit(pvp)?$/i
handler.group = true
handler.game = true
export default handler
