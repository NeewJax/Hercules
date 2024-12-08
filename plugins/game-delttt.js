import MessageType from '@whiskeysockets/baileys'
let handler = async (m, { conn, usedPrefix, command }) => {
let room = Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (room == undefined) return conn.sendButton(m.chat, '*[❗] Você não está em nenhum jogo de três linhas*', wm, null, [['Iniciar sala de jogos', `${usedPrefix}ttt partida nova`]], m)
delete conn.game[room.id]
await m.reply('*[ ✔ ] Removida a sala de jogos do jogo da velha*')}
handler.command = /^(delttt|deltt|sair|delxo|deltictactoe)$/i
handler.fail = null
export default handler
