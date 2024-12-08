import fetch from 'node-fetch'
let handler = async (m, { conn, args, text }) => {
if (!text) throw '*[❗𝐈𝐍𝐅𝐎❗] INSIRA O NOME DE ALGUM USUÁRIO DO TIKTOK*'
let res = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${lolkeysapi}`
conn.sendFile(m.chat, res, 'error.jpg', `*✅ AQUI ESTÁ A FOTO DE PERFIL DE ${text}*`, m, false)}
handler.help = ['tiktokfoto'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(tiktokfoto|pptiktok)$/i
export default handler
