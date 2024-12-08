let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)}, Deveria casar 💍 com ${toM(b)}, faz um belo casal 💓*`, null, {
mentions: [a, b]
})}
handler.help = ['formarcasal']
handler.tags = ['main', 'fun']
handler.command = ['formarcasal','formarcasais']
handler.group = true
export default handler
