let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner, isPrems }) => {
try {  
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []
if (!code) throw '*[ ⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 ⚠️ ] Link inválido ou faltando*\n*👉🏻 Insira algum link de grupo*\n\n*Exemplo:*\n*#join https://chat.whatsapp.com/I5TvNqJ39N395a0tGyGN49*\n\n*[❗𝐈𝐍𝐅𝐎❗] não responda a nenhuma mensagem, pode causar interferência, escreva apenas como uma nova mensagem*'
if ( isPrems || isMods || isOwner || m.fromMe) {
let res = await conn.groupAcceptInvite(code)
await m.reply(`*O bot foi adicionado com sucesso no grupo, diverta-se! ✔️*`)
} else {
const data = global.owner.filter(([id]) => id)
for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) await m.reply('*[❗ 𝐈𝐍𝐅𝐎 ❗] Nova solicitação de bot para entrar em algum grupo [❗𝐈𝐍𝐅𝐎❗]*\n\n*—◉ Número do solicitante:* ' + 'wa.me/' + m.sender.split('@')[0] + '\n*—◉ Link do grupo enviado:* ' + link, jid)
await m.reply('*[❗𝐈𝐍𝐅𝐎❗] O link do seu grupo foi enviado ao meu proprietário*\n\n*👉🏻 O seu grupo está em avaliação....*')
}
} catch {
throw '*[❗𝐈𝐍𝐅𝐎❗] Sinto muito, houve um erro com esse comando, estamos tentando solucionar o problema!*'  
}}
handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['premium']
handler.command = /^join|nuevogrupo$/i
handler.private = true 
export default handler
