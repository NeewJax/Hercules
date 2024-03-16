import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { args, usedPrefix, command }) => {
if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] INSIRA UM LINK DO GITHUB, EXEMPLO: ${usedPrefix + command} https://github.com/NeewJax/Hercules-Bot*`
if (!regex.test(args[0])) throw '*[❗𝐈𝐍𝐅𝐎❗] LINK INCORRETO!*'
let [_, user, repo] = args[0].match(regex) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
m.reply(`*[❗𝐈𝐍𝐅𝐎❗] Espere um momento que irei enviar seu arquivo! SE NÃO FOR ENVIADO PODE SER PORQUE O REPOSITÓRIO ESTÁ MUITO PESADO!`)
conn.sendFile(m.chat, url, filename, null, m)
}
handler.help = ['gitclone <url>']
handler.tags = ['downloader']
handler.command = /gitclone/i
export default handler
