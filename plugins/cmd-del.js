let handler = async (m, { conn, usedPrefix, text, command }) => {
let hash = text
if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
if (!hash) throw `*[❗𝐈𝐍𝐅𝐎❗] VOCÊ SÓ PODE ATRIBUIR TEXTOS OU COMANDOS ATRIBUÍDOS A STICKERS OU IMAGENS, PARA OBTER O CÓDIGO ATRIBUÍDO USE O COMANDO ${usedPrefix}listcmd*`
let sticker = global.db.data.sticker
if (sticker[hash] && sticker[hash].locked) throw '*[❗𝐈𝐍𝐅𝐎❗] Somente o meu dono pode realizar essa ação!*'
delete sticker[hash]
m.reply(`*✅ O TEXTO/COMANDO ATRIBUÍDO AO ADESIVO/IMAGEM FOI EXCLUÍDO DO BANCO DE DADOS CORRETAMENTE*`)}
handler.command = ['delcmd']
handler.rowner = true
export default handler
