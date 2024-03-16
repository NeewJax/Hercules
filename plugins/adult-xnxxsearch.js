import axios from 'axios'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
let handler = async (m, { text, conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[❗𝐈𝐍𝐅𝐎❗] Os comandos +18 estão desabilitados para este grupo, Se você é um admin e deseja ativar... digite #enable modohorny*'
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] Exemplo de uso do comando ${usedPrefix + command} Con mi prima*`
try {
let res = await xnxxsearch(text)
let json = res.result
let listSerch = []
let teskd = `Vídeos relacionados com: ${args.join(" ")}`
const sections = [{
title: `ⓡⓔⓢⓤⓛⓣⓐⓓⓞⓢ`,
rows: listSerch }]
const listMessage = {
text: teskd,
footer: 'Escolha uma opção e pressione Enviar',
title: " 『 𝗩𝗜𝗗𝗘𝗢𝗦 𝗥𝗘𝗟𝗔𝗖𝗜𝗢𝗡𝗔𝗗𝗢𝗦 』",
buttonText: "[♦ 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎𝐒 ♦]",
sections}
for (let i of json) {
listSerch.push({title: i.title, description: '⇧ Selecione uma opção para o seu vídeo ⇧', rowId: `${usedPrefix}xnxxdl ${i.link}`})} 
conn.sendMessage(m.sender, listMessage, { quoted: m })
if (m.isGroup) return m.reply('*[❗] Olá querido usuário, O seu pedido foi enviado para o seu chat privado. Trata-se de uma solução temporária para erros em mensagens com botões do tipo lista, que não são visíveis nas versões mais recentes do WhatsApp*')      
} catch (e) {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] Erro, por favor tente novamente*')
}}
handler.command = /^porhubsearch|xvideossearch|xnxxsearch$/i
export default handler

async function xnxxsearch(query) {
return new Promise((resolve, reject) => {
const baseurl = 'https://www.xnxx.com'
fetch(`${baseurl}/search/${query}/${Math.floor(Math.random() * 3) + 1}`, {method: 'get'}).then(res => res.text()).then(res => {
let $ = cheerio.load(res, { xmlMode: false });
let title = [];
let url = [];
let desc = [];
let results = [];
$('div.mozaique').each(function(a, b) {
$(b).find('div.thumb').each(function(c, d) {
url.push(baseurl+$(d).find('a').attr('href').replace("/THUMBNUM/", "/"))
})})
$('div.mozaique').each(function(a, b) {
$(b).find('div.thumb-under').each(function(c, d) {
desc.push($(d).find('p.metadata').text())
$(d).find('a').each(function(e,f) {
title.push($(f).attr('title'))
})})})
for (let i = 0; i < title.length; i++) {
results.push({ title: title[i], info: desc[i], link: url[i] })}
resolve({ code: 200, status: true, result: results
})}).catch(err => reject({code: 503, status: false, result: err }))})}
