let handler = m => m
handler.before = async function (m) {
this.suit = this.suit ? this.suit : {}
if (db.data.users[m.sender].suit < 0) db.data.users[m.sender].suit = 0
let room = Object.values(this.suit).find(room => room.id && room.status && [room.p, room.p2].includes(m.sender))
if (room) {
let win = ''
let tie = false
if (m.sender == room.p2 && /^(acc(ept)?|terima|aceitar|gas|aceptare?|nao|gamau|recusar|ga(k.)?bisa)/i.test(m.text) && m.isGroup && room.status == 'wait') {
if (/^(tolak|gamau|rechazar|ga(k.)?bisa)/i.test(m.text)) {
let textno = `*[❗] @${room.p2.split`@`[0]}  EU REJEITO O PVP, O JOGO ESTÁ CANCELADO *`
m.reply(textno, null, {mentions: this.parseMention(textno)})
delete this.suit[room.id]
return !0 }
room.status = 'play'
room.asal = m.chat
clearTimeout(room.waktu)
let textplay = `🎮 𝙶𝙰𝙼𝙴𝚂 - 𝙿𝚅𝙿 - 𝙶𝙰𝙼𝙴𝚂 🎮\n\n—◉  O JOGO COMEÇA, AS OPÇÕES FORAM ENVIADAS PARA OS CHATS PRIVADOS DE  @${room.p.split`@`[0]} 𝚈 @${room.p2.split`@`[0]}\n\n◉  SELECIONE UMA OPÇÃO EM SEUS BATE-PAPOS PRIVADOS, RESPECTIVAMENTE\n*◉ ESCOLHA A OPÇÃO EM  wa.me/${conn.user.jid.split`@`[0]}*`
m.reply(textplay, m.chat, {mentions: this.parseMention(textplay)})
let imgplay = `https://www.merca2.es/wp-content/uploads/2020/05/Piedra-papel-o-tijera-0003318_1584-825x259.jpeg`    
if (!room.pilih) this.sendButton(room.p, ' SELECIONE UMA DAS SEGUINTES OPÇÕES ', `GANHADOR +${room.poin}XP\nPerderdor ${room.poin_lose}XP`, imgplay, [['Pedra 🗿', 'Pedra'], ['Papel 📄', 'Papel'], ['Tesoura ✂️', 'Tesoura']], null)  
if (!room.pilih2) this.sendButton(room.p2, ' SELECIONE UMA DAS SEGUINTES OPÇÕES ', `GANHADOR +${room.poin}XP\nPerderdor ${room.poin_lose}XP`, imgplay, [['Pedra 🗿', 'Pedra'], ['Papel 📄', 'Papel'], ['Tesoura ✂️', 'Tesoura']], null)
room.waktu_milih = setTimeout(() => {
if (!room.pilih && !room.pilih2) this.sendButton(m.chat, `[❗]  NENHUM JOGADOR TOMOU A INICIATIVA DE EMEPEZAR O JOGO, O PVP FOI CANCELADO `, wm, null, [['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '#menu']], m)
else if (!room.pilih || !room.pilih2) {
win = !room.pilih ? room.p2 : room.p 
let textnull = `*[❗] @${(room.pilih ? room.p2 : room.p).split`@`[0]}  VOCÊ NÃO ESCOLHEU NENHUMA OPÇÃO, FIM DO PVP *`
this.sendButton(m.chat, textnull, wm, null, [['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '#menu']], m, { mentions: this.parseMention(textnull)})
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin_bot
db.data.users[win == room.p ? room.p2 : room.p].exp -= room.poin_lose
}
delete this.suit[room.id]
return !0
}, room.timeout)}
let jwb = m.sender == room.p
let jwb2 = m.sender == room.p2
let g = /tesoura/i
let b = /pedra/i
let k = /papel/i
let reg = /^(tesoura|pedra|papel)/i
if (jwb && reg.test(m.text) && !room.pilih && !m.isGroup) {
room.pilih = reg.exec(m.text.toLowerCase())[0]
room.text = m.text
m.reply(`*[ ✔ ] Você escolheu ${m.text}, Volte para o grupo e ${room.pilih2 ? `Confira os resultados*` : 'aguarde os resultados*'}`)
if (!room.pilih2) this.reply(room.p2, '*[❗]  O ADVERSÁRIO JÁ ESCOLHEU, É A SUA VEZ DE ESCOLHER !!*', 0)}
if (jwb2 && reg.test(m.text) && !room.pilih2 && !m.isGroup) {
room.pilih2 = reg.exec(m.text.toLowerCase())[0]
room.text2 = m.text
m.reply(`*[ ✔ ] Você escolheu ${m.text}, Volte para o grupo e ${room.pilih ? `Confira os resultados*` : 'aguarde os resultados*'}`)
if (!room.pilih) this.reply(room.p, '*[❗]  O ADVERSÁRIO JÁ ESCOLHEU, É A SUA VEZ DE ESCOLHER !!*', 0)}
let stage = room.pilih
let stage2 = room.pilih2
if (room.pilih && room.pilih2) {
clearTimeout(room.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = room.p
else if (b.test(stage) && k.test(stage2)) win = room.p2
else if (g.test(stage) && k.test(stage2)) win = room.p
else if (g.test(stage) && b.test(stage2)) win = room.p2
else if (k.test(stage) && b.test(stage2)) win = room.p
else if (k.test(stage) && g.test(stage2)) win = room.p2
else if (stage == stage2) tie = true 
this.reply(room.asal, `
*👑 RESULTADOS DO PVP 👑*${tie ? '\n*—◉ EMPATE!!*' : ''}
*@${room.p.split`@`[0]} (${room.text})* ${tie ? '' : room.p == win ? ` *GANHOU 🥳 +${room.poin}XP*` : ` *PERDEU 🤡 ${room.poin_lose}XP*`}
*@${room.p2.split`@`[0]} (${room.text2})* ${tie ? '' : room.p2 == win ? ` *GANHOU 🥳 +${room.poin}XP*` : ` *PERDEU 🤡 ${room.poin_lose}XP*`}
`.trim(), m, { mentions: [room.p, room.p2] } )
if (!tie) {
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin
db.data.users[win == room.p ? room.p : room.p2].exp += room.poin_bot
db.data.users[win == room.p ? room.p2 : room.p].exp += room.poin_lose
}
delete this.suit[room.id]}}
return !0
}
handler.exp = 0
export default handler
function random(arr) {
return arr[Math.floor(Math.random() * arr.length)]}
