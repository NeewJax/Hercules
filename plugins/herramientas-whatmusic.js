import fs from 'fs'
import acrcloud from 'acrcloud'
let acr = new acrcloud({
host: 'identify-eu-west-1.acrcloud.com',
access_key: 'c33c767d683f78bd17d4bd4991955d81',
access_secret: 'bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu'
})

let handler = async (m) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (/audio|video/.test(mime)) { if ((q.msg || q).seconds > 20) return m.reply('[❗𝐈𝐍𝐅𝐎❗]\n\nO arquivo é muito grande, sugerimos que você corte o arquivo para ter entre 10-20 segundos. Os dados são o suficiente para identificar') 
let media = await q.download()
let ext = mime.split('/')[1]
fs.writeFileSync(`./tmp/${m.sender}.${ext}`, media)
let res = await acr.identify(fs.readFileSync(`./tmp/${m.sender}.${ext}`))
let { code, msg } = res.status
if (code !== 0) throw msg
let { title, artists, album, genres, release_date } = res.metadata.music[0]
let txt = `
Resultados da busca

• 📌 Título: ${title}
• 👨‍🎤 Artista: ${artists !== undefined ? artists.map(v => v.name).join(', ') : 'Não encontrado'}
• 💾 Album: ${album.name || 'Não encontrado'}
• 🌐 Gênero: ${genres !== undefined ? genres.map(v => v.name).join(', ') : 'Não encontrado'}
• 📆 Data de lançamento: ${release_date || 'Não encontrado'}
`.trim()
fs.unlinkSync(`./tmp/${m.sender}.${ext}`)
m.reply(txt)
} else throw '*[❗𝐈𝐍𝐅𝐎❗] Responda algum áudio*'
}
handler.command = /^quemusica|shazam|quemusicaes|whatmusic$/i
export default handler
