import  fetch from 'node-fetch'
let handler = async(m, { conn, args, usedPrefix }) => {
if (args.length == 0) return conn.reply(m.chat, `Use ${usedPrefix}kpop\nPor favor escreva: ${usedPrefix}kpop [buscar]\nExemplo: ${usedPrefix}kpop bts\n\nPesquisas disponíveis:\nblackpink, exo, bts`, m)
if (args[0] == 'blackpink' || args[0] == 'exo' || args[0] == 'bts') {
fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/kpop/' + args[0] + '.txt')
.then(res => res.text())
.then(body => {
let randomkpop = body.split('\n')
let randomkpopx = randomkpop[Math.floor(Math.random() * randomkpop.length)]
conn.sendFile(m.chat, randomkpopx, '', 'Dasar Kpopers', m)
})
.catch(() => {
conn.reply(m.chat, 'Ocorreu um erro, tente novamente, se o erro continuar notifique meu criador', m)
})
} else {
conn.reply(m.chat, `Sinto muito, a pesquisa não está disponível. Por favor, escreva ${usedPrefix}kpop para ver a lista de pesquisas disponíveis`, m)
}}
handler.help = ['kpop'].map(v => v + ' <query>')
handler.tags = ['image']
handler.command = /^(kpop)$/i
export default handler
