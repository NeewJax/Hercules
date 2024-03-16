import fetch from 'node-fetch'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[❗𝐈𝐍𝐅𝐎❗] Os comandos +18 estão desabilitados para este grupo, Se você é um admin e deseja ativar... digite #enable modohorny*'
if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] Insira um link do xvideos. Exemplo: ${usedPrefix + command} https://www.xvideos.com/video70389849/pequena_zorra_follada_duro*`
try {
await conn.reply(m.chat, '[❗] Seu vídeo esta sendo processado, espere um momento...\n\n﹣ O tempo depende do tamanho do seu vídeo', m)
let res = await fetch(`https://api.zahwazein.xyz/downloader/xvideos?apikey=${keysxxx}&url=`+args[0])
let json = await res.json()
conn.sendMessage(m.chat, { document: { url: json.result.files.high }, mimetype: 'video/mp4', fileName: json.result.title }, { quoted: m })
} catch (e) {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] Erro, por favor tente novamente*\n\n*- O link deve ser similar a:*\n*◉ https://www.xvideos.com/video70389849/pequena_zorra_follada_duro*')
}}
handler.command = /^(xvideosdl)$/i
export default handler
