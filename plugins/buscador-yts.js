import yts from 'yt-search'
import fs from 'fs'

let handler = async (m, {conn, text }) => {
  if (!text) throw '⚠️ *_O que você quer no youtube?_*'
  let results = await yts(text)
  let tes = results.all
  console.log(tes)
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
° *_${v.title}_*
↳ 🫐 *_Link :_* ${v.url}
↳ 🕒 *_Duração :_* ${v.timestamp}
↳ 📥 *_Enviado :_* ${v.ago}
↳ 👁 *_Visualizações :_* ${v.views}`}}).filter(v => v).join('\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n')
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m)
}
handler.help = ['ytsearch *<texto>*'] 
handler.tags = ['search']
handler.command = ['ytsearch', 'yts'] 
export default handler
