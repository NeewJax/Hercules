/*---------------------------------------------------------------------------------------
  🍀 • By https://github.com/ALBERTO9883
  🍀 • ⚘Alberto Y Ashly⚘
-----------------------------------------------------------------------------------------*/

import { randomBytes } from 'crypto'
let link = /chat.whatsapp.com/
let handler = async (m, { conn, text, groupMetadata }) => {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
if (!text) throw 'Insira um texto para mandar mensagem para todos os grupos'
const linkThisGroup = `${link}`
if (m.text.includes(linkThisGroup)) return conn.reply(m.chat, '❌ Você não pode enviar links de spam para outros grupos', m)
let time = global.db.data.users[m.sender].msgwait + 300000
if (new Date - db.data.users[m.sender].msgwait < 300000) throw `*Você deve esperar ${msToTime(time - new Date())} para voltar a enviar essa mensagem*`
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(m.sender)
let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
let teks = `*🌺 • Grupo:* ${groupMetadata.subject}\n*🍀 • De:* ${name}\n*🍁 • Número:* wa.me/${who.split`@`[0]}\n*📧 • Mensagem:* ${text}`
for (let id of groups) {
await conn.sendMessage(id, { text: teks }, { quoted: fakegif })
global.db.data.users[m.sender].msgwait = new Date * 1
}}
handler.command = /^(msg)$/i
handler.owner = true
handler.group = true
export default handler
function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return minutes + " m " + seconds + " s " }
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
const randomID = length => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)
