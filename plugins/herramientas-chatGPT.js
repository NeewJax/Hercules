import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `*[❗] Insira uma solicitação ou pedido para usar a função de bate-papo gpt*\n\n*—◉ Exemplos de função e ordem*\n*◉ ${usedPrefix + command} Reflexão sobre a série Narcos na netflix*\n*◉ ${usedPrefix + command} Código JS para um jogo de cartas*`

try {
let IA2 = await fetch(`https://api.amosayomide05.cf/gpt/?question=${text}&string_id=${m.sender}`)  
let IAR2 = await IA2.json()
m.reply(`${IAR2.response}`.trim())    
} catch {
try {   
let rrEes = await fetch(`https://api.ibeng.tech/api/info/openai?text=${text}&apikey=tamvan`)
let jjJson = await rrEes.json()
m.reply(jjJson.data.data.trim())    
} catch {      
   
try {    
let tioress = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=18937ee91b4da8d449aab618&text=${text}&user=${m.sender}`)
let hasill = await tioress.json()
m.reply(`${hasill.result}`.trim())   
} catch {        
throw `*[❗] Erro, tente novamente*`
}}}}
handler.command = ['openai', 'chatgpt', 'ia', 'robot']
export default handler
