import fetch from 'node-fetch'
import translate from '@vitalets/google-translate-api'
const teks = '*0 - Sí*\n*1 - No*\n*2 - No sé*\n*3 - Probablemente sí*\n*4 - Probablemente no*\n*5 - Volver a la pregunta anterior*'
export async function before(m) {
if (global.db.data.users[m.sender].banned) return
if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text) return !0
let aki = global.db.data.users[m.sender].akinator
if (!aki.sesi || m.quoted.id != aki.soal.key.id) return
if (!somematch(['0','1','2','3','4','5'], m.text)) return this.sendMessage(m.chat, { text: `*[❗] Responda com os números 𝟷, 𝟸, 𝟹, 𝟺 ou 𝟻*\n\n${teks}` }, { quoted: aki.soal })
let { server, frontaddr, session, signature, question, progression, step } = aki
if (step == '0' && m.text == '5') return m.reply('*[❗]  NÃO HÁ MAIS PERGUNTAS ANTES DESTA, ESTA É A PRIMEIRA PERGUNTA *')
let res, anu, soal
try {
if (m.text == '5') res = await fetch(`https://api.lolhuman.xyz/api/akinator/back?apikey=${lolkeysapi}&server=${server}&session=${session}&signature=${signature}&step=${step}`)
else res = await fetch(`https://api.lolhuman.xyz/api/akinator/answer?apikey=${lolkeysapi}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&step=${step}&answer=${m.text}`)
anu = await res.json()
if (anu.status != '200') {
aki.sesi = false
aki.soal = null
return m.reply('*[❗]  A SESSÃO DO AKINATOR EXPIROU, O JOGO ACABOU *')}
anu = anu.result
if (anu.name) {
await this.sendMessage(m.chat, { image: { url: anu.image }, caption: `🎮 *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑* 🎮\n\n* AKINATOR ACREDITA QUE SEU PERSONAGEM É  ${anu.name}*\n_${anu.description}_`, mentions: [m.sender] }, { quoted: m })
aki.sesi = false
aki.soal = null
} else {
let resultes = await translate(`${anu.question}`, { to: 'es', autoCorrect: true })   
soal = await this.sendMessage(m.chat, { text: `🎮 *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑* 🎮\n*Progresso: ${anu.step} (${anu.progression.toFixed(2)} %)*\n\n*Jogador: @${m.sender.split('@')[0]}*\n*Pergunta: ${resultes.text}*\n\n${teks}`, mentions: [m.sender] }, { quoted: m })
aki.soal = soal
aki.step = anu.step
aki.progression = anu.progression
}} catch (e) {
aki.sesi = false
aki.soal = null
m.reply('*[❗] Erro, tente mais tarde!*')}
return !0 }
function somematch( data, id ){
let res = data.find(el => el === id )
return res ? true : false; }
