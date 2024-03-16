import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  let pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => global.imagen1)
  if (user.registered === true) throw `[❗𝐈𝐍𝐅𝐎❗] Você já esta registrado\n\nDeseja se inscrever de novo?\n\n 📌Use esse comando para eliminar seu registro:\n*${usedPrefix}unreg* <Número de serie>`
  if (!Reg.test(text)) throw `*[❗𝐈𝐍𝐅𝐎❗] Formato incorreto*\n\n*—◉ uso do comando: ${usedPrefix + command} nome.idade*\n*—◉ Exemplo: ${usedPrefix + command} Shadow.18*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '*[❗𝐈𝐍𝐅𝐎❗] Você deve por um nome!*'
  if (!age) throw '*[❗𝐈𝐍𝐅𝐎❗] A idade não pode está vazia!*'
  if (name.length >= 30) throw '[❗𝐈𝐍𝐅𝐎❗] O nome é muito grande' 
  age = parseInt(age)
  if (age > 100) throw '*[❗] ué, como você ainda está vivo nessa idade? 👴🏻*'
  if (age < 5) throw '*[❗] ué, um bebê que sabe usar o WhatsApp? 😲*'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let caption = `┏┅ ━━━━━━━━━━━━ ┅ ━
┇「 Informação 」
┣┅ ━━━━━━━━━━━━ ┅ ━
┃ *Nome:* ${name}
┃ *Idade:* ${age} años
┃ *Número de série:* 
┃ ${sn}
┣┅ ━━━━━━━━━━━━ ┅ ━
┃ Teu número de série irá ajuda-lo 
┃ Caso queira deletar
┃ Teu registro no bot!
┗┅ ━━━━━━━━━━━━ ┅ ━`
//let author = global.author
await conn.sendFile(m.chat, pp, 'mystic.jpg', caption)
//conn.sendButton(m.chat, caption, `¡𝚃𝚄 Número de série 𝚃𝙴 𝚂𝙴𝚁𝚅𝙸𝚁𝙰 𝙿𝙾𝚁 𝚂𝙸 𝙳𝙴𝚂𝙴𝙰𝚂 𝙱𝙾𝚁𝚁𝙰𝚁 𝚃𝚄 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 𝙴𝙽 𝙴𝙻 𝙱𝙾𝚃!\n${author}`, [['¡¡𝙰𝙷𝙾𝚁𝙰 𝚂𝙾𝚈 𝚄𝙽 𝚅𝙴𝚁𝙸𝙵𝙸𝙲𝙰𝙳𝙾/𝙰!!', '/profile']], m)
global.db.data.users[m.sender].money += 10000
global.db.data.users[m.sender].exp += 10000
}
handler.help = ['verificar']
handler.tags = ['xp']
handler.command = /^(verify|register|verificar|reg|registrar)$/i
export default handler
