import fetch from 'node-fetch'
import { lyrics, lyricsv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
if (!teks) throw `*[❗𝐈𝐍𝐅𝐎❗] O uso correto do comando é: ${usedPrefix + command} beret ojala*`
try {
const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
let res = await fetch(global.API('https://some-random-api.ml', '/lyrics', {
title: result.author + result.title}))
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.thumbnail.genius) throw json
let letratexto =`Título: *${result.title}*\nAutor: *${result.author}*\n\nLetra: ${result.lyrics}`.trim()
let linkresult = monospace + result.link + monospace
conn.sendButton(m.chat, letratexto, `\nURL: ${linkresult}\n${wm}`, json.thumbnail.genius, [['🎵 Baixar Audio 🎵', `#play.1 ${text}`], ['🎥 Baixar Video 🎥', `#play.2 ${text}`]], m)
} catch {
await m.reply('*[❗𝐈𝐍𝐅𝐎❗] Erro... Você pode tentar de novo?*')}}
handler.help = ['lirik','letra'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric|letra)$/i
export default handler
let mono = '`' + '`' + '`'
global.monospace = mono
