import { createHash } from 'crypto'
let handler = async function (m, { args }) {
if (!args[0]) throw '*[❗𝐍𝐅𝐎❗] Insira seu número de série, se você não se lembrar pode usar o comando #myns*'
let user = global.db.data.users[m.sender]
let sn = createHash('md5').update(m.sender).digest('hex')
if (args[0] !== sn) throw '*[❗𝐍𝐅𝐎❗] Número de série incorreto, certifique-se de ter escrito corretamente!*\n\n*Se você não se lembra pode usar o comando: #myns*'
user.registered = false
m.reply(`*[ ✔ ] Feito com sucesso!, você não está mais registrado no bot!*`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <numero de serie>')
handler.tags = ['xp']
handler.command = /^unreg(ister)?$/i
handler.register = true
export default handler
