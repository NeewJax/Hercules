let handler = async (m, { conn, text, args, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
if (name == 'undefined') name = 'Sem nome'
let a = []
let b = text.split('|')
if (!b[1]) throw `*[❗𝐈𝐍𝐅𝐎❗] Formato de uso ${usedPrefix + command} Pergunta? |Opção1|Opção2...*`
if (b[12]) throw `*[❗𝐈𝐍𝐅𝐎❗] Formato de uso ${usedPrefix + command} Pergunta? |Opção1|Opção2...*`
for (let c = 1; c < b.length; c++) { a.push([b[c]])}	
let caption = `*Pesquisa realizada por:*\n${name}\n*Pergunta:*\n${text.split('|')[0]}`
return conn.sendPoll(m.chat, caption, a, m)}
handler.help = ['enquete question|opção|opção']
handler.tags = ['group'] 
handler.command = ['poll', 'enquete'] 
export default handler
