import fetch from 'node-fetch'
import translate from '@vitalets/google-translate-api'
let handler = async (m, { conn, usedPrefix, command, text }) => {
if (m.isGroup) return
let aki = global.db.data.users[m.sender].akinator
if (text == 'end') {
if (!aki.sesi) return m.reply('*[❗]  VOCÊ NÃO ESTÁ ATUALMENTE EM UMA SESSÃO (PARTIDA) DO AKINATOR *')
aki.sesi = false
aki.soal = null
m.reply('*[❗]  A SESSÃO AKINATOR (JOGO) FOI ELIMINADA COM SUCESSO *')
} else {
if (aki.sesi) return conn.reply(m.chat, '*[❗]  VOCÊ AINDA ESTÁ EM UMA SESSÃO (PARTIDA) DO AKINATOR *', aki.soal)
try {
let res = await fetch(`https://api.lolhuman.xyz/api/akinator/start?apikey=${lolkeysapi}`)
let anu = await res.json()
if (anu.status !== 200) throw '*[❗] Erro, tente mais tarde*'
let { server, frontaddr, session, signature, question, progression, step } = anu.result
aki.sesi = true
aki.server = server
aki.frontaddr = frontaddr
aki.session = session
aki.signature = signature
aki.question = question
aki.progression = progression
aki.step = step
let resultes2 = await translate(question, { to: 'es', autoCorrect: false })
let txt = `🎮 *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑* 🎮\n\n*Jogador: @${m.sender.split('@')[0]}*\n*Pergunta: ${resultes2.text}*\n\n`
txt += '*0 - Sí*\n'
txt += '*1 - No*\n'
txt += '*2 - No sé*\n'
txt += '*3 - Probablemente sí*\n'
txt += '*4 - Probablemente no*\n\n'
txt += `*Use o comando ${usedPrefix + command} end  PARA SAIR DA SESSÃO DO AKINATOR (PARTIDA) *`
let soal = await conn.sendMessage(m.chat, { text: txt, mentions: [m.sender] }, { quoted: m })
aki.soal = soal
} catch {
m.reply('*[❗] Erro, tente mais tarde*')
}}}
handler.menu = ['akinator']
handler.tags  = ['game']
handler.command = /^(akinator)$/i
export default handler
