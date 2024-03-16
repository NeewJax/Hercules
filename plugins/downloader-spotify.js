import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] Insira o nome de alguma canção para buscar*`
try {
let res = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkeysapi}&query=${text}`)
let json = await res.json()
let { link } = json.result[0]
let res2 = await fetch(`https://api.lolhuman.xyz/api/spotify?apikey=${lolkeysapi}&url=${link}`)
let json2 = await res2.json()
let { thumbnail, title, artists } = json2.result
let spotifyi = `❒═════❬ SPOTIFY ❭═════╾❒\n┬\n├‣✨ *TITULO:* ${title}\n┴\n┬\n├‣🗣️ *ARTISTA:* ${artists}\n┴\n┬\n├‣🌐 *URL*: ${link}\n┴\n┬\n├‣💚 *URL DE DOWNLOAD:* ${json2.result.link}\n┴`
conn.sendFile(m.chat, thumbnail, 'error.jpg', spotifyi, m)
let aa = await conn.sendMessage(m.chat, { audio: { url: json2.result.link }, fileName: `error.mp3`, mimetype: 'audio/mp4' }, { quoted: m })  
if (!aa) return conn.sendFile(m.chat, json2.result.link, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' }) 
} catch {
throw '*[❗𝐈𝐍𝐅𝐎❗] Erro... não foi possível pesquisar a música ou a página de ajuda para pesquisar a música está inoperante, tente novamente mais tarde.*'
}}
handler.command = /^(spotify|music)$/i
export default handler
