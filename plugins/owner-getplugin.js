import cp, { exec as _exec } from 'child_process'
import { promisify } from 'util'
import fs from 'fs'
let exec = promisify(_exec).bind(cp)
let handler = async (m, { conn, isROwner, usedPrefix, command, text }) => {
let ar = Object.keys(plugins)
let ar1 = ar.map(v => v.replace('.js', ''))
if (!text) throw `*[❗] Insira o nome de algum plguin (arquivo) existente*\n\n*—◉ Exemplo*\n*◉ ${usedPrefix + command}* info-infobot\n\n*—◉ Lista de plugins arquivos existentes:*\n*◉* ${ar1.map(v => ' ' + v).join`\n*◉*`}`
if (!ar1.includes(text)) return m.reply(`*[❗] Não se encontrou nenhum arquivo com o nome "${text}", Insira alguns existentes*\n\n*==================================*\n\n*—◉ Lista de árquivos existentes:*\n*◉* ${ar1.map(v => ' ' + v).join`\n*◉*`}`)
let o
try {
o = await exec('cat plugins/' + text + '.js')
} catch (e) {
o = e
} finally {
let { stdout, stderr } = o
if (stdout.trim()) { 
let aa = await conn.sendMessage(m.chat, { text: stdout }, { quoted: m })
await conn.sendMessage(m.chat, { document: fs.readFileSync(`./plugins/${text}.js`), mimetype: 'application/javascript', fileName: `${text}.js`}, { quoted: aa })} 
if (stderr.trim()) { 
let aa2 = await conn.sendMessage(m.chat, { text: stderr }, { quoted: m })
await conn.sendMessage(m.chat, { document: fs.readFileSync(`./plugins/${text}.js`), mimetype: 'application/javascript', fileName: `${text}.js`}, { quoted: aa2 })}}
}
handler.help = ['getplugin'].map(v => v + ' *<nombre>*')
handler.tags = ['owner']
handler.command = /^(getplugin|gp)$/i
handler.rowner = true
export default handler
