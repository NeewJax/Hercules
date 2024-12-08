import fetch from 'node-fetch'
let handler = async(m, { conn, args, text }) => {
if (!text) throw '*[❗𝐈𝐍𝐅𝐎❗] Insira um link / URL que deseja encurtar*'
let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()  
if (!shortUrl1) throw `*[❗] Erro, verifique se o texto digitado é um texto e tente novamente*`
let done = `*Link encurtado com sucesso!!*\n\n*Link anterior:*\n${text}\n*Link encurtado:*\n${shortUrl1}`.trim()   
m.reply(done)}
handler.help = ['tinyurl','acortar'].map(v => v + ' <link>')
handler.tags = ['tools']
handler.command = /^(tinyurl|short|encurtar|corto)$/i
handler.fail = null
export default handler
