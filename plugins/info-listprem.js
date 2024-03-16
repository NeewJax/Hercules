let handler = async (m, { conn, args, isPrems }) => {
let usuario = global.db.data.users[m.sender].premiumTime
let user = Object.entries(global.db.data.users).filter(user => user[1].premiumTime).map(([key, value]) => {
return { ...value, jid: key }})
let premTime = global.db.data.users[m.sender].premiumTime
let prem = global.db.data.users[m.sender].premium
let userr = await '@' + m.sender.split`@`[0]
let waktu = clockString(`${premTime - new Date() * 1} `)
let sortedP = user.map(toNumber('premiumTime')).sort(sort('premiumTime'))
let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 10)) : Math.min(10, sortedP.length)
let infoprem = `
*「 INFO DO USUÁRIO 」*

—◉ Usuário: ${userr}
${prem ? `*◉ Tempo restante:*\n${clockString(usuario - new Date() * 1)}` : (isPrems ? `*◉ Tempo restante:*\n- Você é um usuário premium por tempo ilimitado` : '- Este es un usuario no premium ❌')}

*「 𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 」*${sortedP.slice(0, len).map(({ jid, name, premiumTime, prem, registered }, i) => `

—◉ Usuario: ${'@' + jid.split`@`[0]}
${premiumTime > 0 ? `*◉ Tempo restante:*\n${clockString (premiumTime - new Date() * 1)}` : '- Este é um usuário não premium ❌'}`).join('')}`.trim();
  
if (sortedP.filter(user => user.premiumTime).length === 0) {
infoprem = `*「 INFO DO USUÁRIO 」*\n\n—◉ Usuario: ${userr}\n${prem ? `*◉ Tempo restante:*\n${clockString(usuario - new Date() * 1)}` : '- Este é um usuário não premium ❌'}\n\n*「 𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 」*\n\n- Não há usuários premium ❌`.trim();
}
  
m.reply(infoprem, null, { mentions: conn.parseMention(infoprem) })
}
handler.help = ['premlist [angka]']
handler.tags = ['info']
handler.command = /^(listprem|premlist|listavip|viplista)$/i
export default handler

function clockString(ms) {
const seconds = Math.floor(ms / 1000);
const minutes = Math.floor(seconds / 60);
const hours = Math.floor(minutes / 60);
const days = Math.floor(hours / 24);
const weeks = Math.floor(days / 7);
const months = Math.floor(days / 30);
const years = Math.floor(days / 365);
return `- Ano(s): ${years}\n- Meses: ${months}\n- Semana(s): ${weeks}\n- Dias: ${days}\n- Hora(s): ${hours % 24}\n- Minuto(s): ${minutes % 60}\n- Segundo(s): ${seconds % 60}`;}

function sort(property, ascending = true) {
if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
else return (...args) => args[ascending & 1] - args[!ascending & 1]}

function toNumber(property, _default = 0) {
if (property) return (a, i, b) => {
return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }}
else return a => a === undefined ? _default : a}


/*let handler = async (m, { conn, args }) => {
let usuario = global.db.data.users[m.sender].premiumTime
let user = Object.entries(global.db.data.users).filter(user => user[1].premiumTime).map(([key, value]) => {
return { ...value, jid: key }})
let premTime = global.db.data.users[m.sender].premiumTime
let prem = global.db.dat🧿 𝚃𝚑𝚎 𝙼𝚢𝚜𝚝𝚒𝚌 - 𝙱𝚘𝚝 🔮a.users[m.sender].premium
let userr = await '@' + m.sender.split`@`[0]
let waktu = clockString(`${premTime - new Date() * 1} `)
let sortedP = user.map(toNumber('premiumTime')).sort(sort('premiumTime'))
let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 10)) : Math.min(10, sortedP.length)
let infoprem = `
*「 𝐈𝐍𝐅𝐎 𝐃𝐄𝐋 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 」*

—◉ Usuario: ${userr}
${prem ? `*◉ Tiempo restante:*\n${clockString(usuario - new Date() * 1)}` : '- Usted no es un usuario premium ❌'}

*「 𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 」*${sortedP.slice(0, len).map(({ jid, name, premiumTime, prem, registered }, i) => `

—◉ Usuario: ${'@' + jid.split`@`[0]}
${premiumTime > 0 ? `*◉ Tiempo restante:*\n${clockString (premiumTime - new Date() * 1)}` : '- Este es un usuario no premium ❌'}`).join('')}`.trim();
  
if (sortedP.filter(user => user.premiumTime).length === 0) {
infoprem = `*「 𝐈𝐍𝐅𝐎 𝐃𝐄𝐋 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 」*\n\n—◉ Usuario: ${userr}\n${prem ? `*◉ Tiempo restante:*\n${clockString(usuario - new Date() * 1)}` : '- Usted no es un usuario premium ❌'}\n\n*「 𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 」*\n\n- No hay usuarios premium ❌`.trim();
}
  
m.reply(infoprem, null, { mentions: conn.parseMention(infoprem) })
}
handler.help = ['premlist [angka]']
handler.tags = ['info']
handler.command = /^(listprem|premlist|listavip|viplista)$/i
export default handler

function clockString(ms) {
const seconds = Math.floor(ms / 1000);
const minutes = Math.floor(seconds / 60);
const hours = Math.floor(minutes / 60);
const days = Math.floor(hours / 24);
const weeks = Math.floor(days / 7);
const months = Math.floor(days / 30);
const years = Math.floor(days / 365);
return `- Año(s): ${years}\n- Mes(es): ${months}\n- Semana(s): ${weeks}\n- Día(s): ${days}\n- Hora(s): ${hours % 24}\n- Minuto(s): ${minutes % 60}\n- Segundo(s): ${seconds % 60}`;}

function sort(property, ascending = true) {
if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
else return (...args) => args[ascending & 1] - args[!ascending & 1]}

function toNumber(property, _default = 0) {
if (property) return (a, i, b) => {
return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }}
else return a => a === undefined ? _default : a}*/
