let { generateWAMessageFromContent, prepareWAMessageMedia, proto } = (await import('@whiskeysockets/baileys')).default
import fetch from 'node-fetch'
const { getBinaryNodeChild, getBinaryNodeChildren } = (await import('@whiskeysockets/baileys')).default
let handler = async (m, { conn, text, participants, args }) => {  
if (!global.db.data.settings[conn.user.jid].restrict) throw '*[ ⚠️ ] O DONO RESTRINGIU (enable restrict / disable restrict) O USO DESSE COMANDO*'
if (!args[0]) throw '*[❗] digite o número do usuário que você deseja adicionar*'    
try {    
let _participants = participants.map(user => user.id)
let users = (await Promise.all(
text.split(',')
.map(v => v.replace(/[^0-9]/g, ''))
.filter(v => v.length > 4 && v.length < 20 && !_participants.includes(v + '@s.whatsapp.net'))
.map(async v => [v, await conn.onWhatsApp(v + '@s.whatsapp.net')]))).filter(v => v[1][0]?.exists).map(v => v[0] + '@c.us')
const response = await conn.query({ tag: 'iq', attrs: { type: 'set', xmlns: 'w:g2', to: m.chat }, content: users.map(jid => ({ tag: 'add', attrs: {}, content: [{ tag: 'participant', attrs: { jid } }]}))})
const pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
const jpegThumbnail = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
const add = getBinaryNodeChild(response, 'add')
const participant = getBinaryNodeChildren(add, 'participant')
for (const user of participant.filter(item => item.attrs.error == 403)) {
const jid = user.attrs.jid
const content = getBinaryNodeChild(user, 'add_request')
const invite_code = content.attrs.code
const invite_code_exp = content.attrs.expiration
let teks = `*[❗𝐈𝐍𝐅𝐎❗] Não foi possível adicionar a @${jid.split('@')[0]}, Isso pode acontecer porque o número está incorreto, a pessoa saiu recentemente do grupo ou a pessoa configurou a privacidade do grupo, o convite para o grupo foi enviado ao usuário em seu privado.*`
m.reply(teks, null, { mentions: conn.parseMention(teks)})
let captionn = `oii, me apresento, sou The Hercules - Bot :) sou um WhatsApp Bot, uma pessoa do grupo usou o comando para te adicionar no grupo, mas não consegui te adicionar, então te mando o convite para se adicionar, esperamos por você!`    
var messaa = await prepareWAMessageMedia({ image: jpegThumbnail }, { upload: conn.waUploadToServer })
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ groupInviteMessage: { groupJid: m.chat, inviteCode: invite_code, inviteExpiration: invite_code_exp, groupName: await conn.getName(m.chat), caption: captionn, jpegThumbnail: jpegThumbnail }}), { userJid: jid })
await conn.relayMessage(jid, groupInvite.message, { messageId: groupInvite.key.id })}
} catch {
throw '*[❗𝐈𝐍𝐅𝐎❗] Não foi possível adicionar o número que digitei, isso pode acontecer porque o número está incorreto, a pessoa saiu recentemente do grupo ou a pessoa configurou a privacidade do grupo, aconselho você enviar a solicitação manualmente!*'
}}
handler.help = ['add', '+'].map(v => v + ' número')
handler.tags = ['group']
handler.command = /^(add|agregar|añadir|\+)$/i
handler.admin = handler.group = handler.botAdmin = true
export default handler
