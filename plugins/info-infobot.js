import { generateWAMessageFromContent } from '@whiskeysockets/baileys'
import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@whiskeysockets/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict, antiCall, antiprivado, modejadibot } = global.db.data.settings[conn.user.jid] || {}
const { autoread, gconly, pconly, self } = global.opts || {}
let old = performance.now()
let neww = performance.now()
let speed = neww - old
let info = `
╠═〘 INFO DO BOT 〙 ═
╠
╠➥ [🤴🏻] CRIADOR: NeewJax
╠➥ [🎳] PREFIXO: *${usedPrefix}*
╠➥ [🔐] CHATS PRIVADOS: *${chats.length - groups.length}*
╠➥ [🦜] CHATS DE GRUPOS: *${groups.length}* 
╠➥ [💡] CHATS TOTAIS: *${chats.length}* 
╠➥ [🚀] ATIVIDADE: *${uptime}*
╠➥ [🎩] USUÁRIOS: *${totalreg} números*
╠➥ [☑️] AUTOREAD: ${autoread ? '*ativado*' : '*desativado*'}
╠➥ [❗] RESTRICT: ${restrict ? '*ativado*' : '*desativado*'} 
╠➥ [💬] PCONLY: ${pconly ? '*ativado*' : '*desativado*'}
╠➥ [🏢] GCONLY: ${gconly ? '*ativado*' : '*desativado*'}
╠➥ [🌎] MODO: ${self ? '*privado*' : '*publico*'}
╠➥ [💬] ANTIPRIVADO: ${antiprivado ? '*ativado*' : '*desativado*'}
╠➥ [🤖] MODEJADIBOT: ${modejadibot ? '*ativado*' : '*desativado*'}
╠➥ [📵] ANTICHAMADA: ${antiCall ? '*ativado*' : '*desativado*'}
╠➥ [👨‍🦯] VELOCIDADE: 
╠  *${speed} ms* 
╠
╠═〘 𝙏𝙝𝙚 𝙃𝙚𝙧𝙘𝙪𝙡𝙚𝙨 - 𝘽𝙤𝙩 〙 ═
`.trim() 
let aa = { quoted: m, userJid: conn.user.jid }
let res = generateWAMessageFromContent (m.chat, {liveLocationMessage: {degreesLatitude: 0, degreesLongitude: 0, caption: info, secuenceNumber: "0", contextInfo: {mentionedJid: conn.parseMention()}}}, aa)
conn.relayMessage(m.chat, res.message, {})
}
handler.help = ['infobot', 'speed']
handler.tags = ['info', 'tools']
handler.command = /^(ping|speed|infobot)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
