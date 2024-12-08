let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/image/.test(mime)) {
let img = await q.download()
if (!img) throw '*⚠️️ Responda a uma imagem.*'
await conn.updateProfilePicture(m.chat, img).then(_ => m.reply('⚘ *Imagem alterada com sucesso*'))
} else throw '*⚠️️ Responda a uma imagem.*'}
handler.command = /^setpp(group|grup|gc)?$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler