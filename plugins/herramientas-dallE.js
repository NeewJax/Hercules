let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗] Insira um texto para criar uma imagem e assim usar a função DALL-E*\n\n*—◉ Exemplo de petições*\n*◉ ${usedPrefix + command} gatinhos chorando*\n*◉ ${usedPrefix + command} hatsune miku beijo*`
try {
m.reply('*[❗] Espere um momento enquanto eu envio o que você pediu*')
let tiores = await conn.getFile(`https://api.lolhuman.xyz/api/dall-e?apikey=${lolkeysapi}&text=${text}`)
await conn.sendFile(m.chat, tiores.data, null, null, m)
} catch {
throw `*[❗] Erro, tente novamente*`
}}
handler.command = ['dall-e', 'dalle', 'ia2', 'cimg', 'openai3']
export default handler
