let handler = async (m, { conn, text, participants }) => {
let member = participants.map(u => u.id)
if(!text) {
var sum = member.length
} else {
var sum = text} 
var total = 0
var sider = []
for(let i = 0; i < sum; i++) {
let users = m.isGroup ? participants.find(u => u.id == member[i]) : {}
if((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) { 
if (typeof global.db.data.users[member[i]] !== 'undefined'){
if(global.db.data.users[member[i]].whitelist == false){
total++
sider.push(member[i])}
}else {
total++
sider.push(member[i])}}}
if(total == 0) return conn.reply(m.chat, `*[❗] Este grupo não tem inátivos! :)*`, m) 
m.reply(`*[ ⚠ Resumo de inátivos ⚠ ]*\n\n*GRUPO:* ${await conn.getName(m.chat)}\n*Membros do grupo:* ${sum}\n\n*[ 👻 LISTA DE FANTASMAS 👻 ]*\n${sider.map(v => '  👉🏻 @' + v.replace(/@.+/, '')).join('\n')}\n\n*NOTA: ISSO PODE NÃO TER 100% DE SUCESSO, O BOT INICIA A CONTAGEM DE MENSAGENS APÓS A ATIVAÇÃO DESTE NÚMERO*`, null, { mentions: sider })}
handler.command = /^(verfantasmas|fantasmas|sider)$/i
handler.admin = true
handler.botAdmin = true
export default handler
