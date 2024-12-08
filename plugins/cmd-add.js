let handler = async (m, { conn, text, usedPrefix, command }) => {
global.db.data.sticker = global.db.data.sticker || {}
if (!m.quoted) throw '*[❗𝐈𝐍𝐅𝐎❗] RESPONDA A FIGURINHA OU IMAGEM AO QUAL DESEJA ADICIONAR UM COMANDO OU TEXTO*'
if (!m.quoted.fileSha256) throw '*[❗𝐈𝐍𝐅𝐎❗] VOCÊ SÓ PODE ATRIBUIR COMANDOS OU TEXTOS A STICKERS E IMAGENS*'
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] Erro de uso, texto faltante*\n\n*USO CORRETO DO COMANDO:*\n*—◉ ${usedPrefix + command} <texto> <responder a figurnha ou imagem>*\n\n*EXEMPLO DE USO CORRETO DO COMANDO:*\n*—◉ ${usedPrefix + command} <#menu> <responder a figurinha ou imagem>*`
let sticker = global.db.data.sticker
let hash = m.quoted.fileSha256.toString('base64')
if (sticker[hash] && sticker[hash].locked) throw '*[❗𝐈𝐍𝐅𝐎❗] Somente o meu dono pode fazer essa modificação!*'
sticker[hash] = { text, mentionedJid: m.mentionedJid, creator: m.sender, at: + new Date, locked: false }
m.reply(`*✅ O texto ou imagem atribuído foi adicionado ao banco de dados corretamente*`)
}
handler.command = ['setcmd', 'addcmd', 'cmdadd', 'cmdset']
handler.rowner = true
export default handler
