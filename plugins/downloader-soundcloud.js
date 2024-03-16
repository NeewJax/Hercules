import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗]INSIRA O NOME DE ALGUMA CANÇÃO PARA BUSCAR*`
try {
let res = await fetch(`https://api.akuari.my.id/search/searchsoundcloud?query=${text}`)
let json2 = await res.json()
let urlSC = await json2.hasil[0].url
let res2 = await fetch(`https://api.akuari.my.id/downloader/scdl?link=${urlSC}`)
let json = await res2.json()
let shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${json.link}`)).text()
let soundcloudt = `❒═══❬ SOUNDCLOUD ❭═══╾❒
┬
├‣✨ *TÍTULO:* ${json.title}
┴
┬
├‣💚 *LINK:* ${shortUrl}
┴
┬
├‣ *- Enviando 𝚖ú𝚜𝚒𝚌𝚊...*
┴
┬
├ _﹫THE HERCULES BOT_
┴`
conn.sendFile(m.chat, json.thumb, '', soundcloudt, m)
conn.sendMessage(m.chat, { audio: { url: json.link }, fileName: `error.mp3`, mimetype: 'audio/mp4' }, { quoted: m })  
//conn.sendFile(m.chat, json.link, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })
} catch (e) {
throw '*[❗𝐈𝐍𝐅𝐎❗] Erro... não foi possível pesquisar a música ou a página de ajuda para pesquisar a música está inoperante, tente novamente mais tarde*'
}}
handler.command = /^(soundcloud|cover)$/i
export default handler
