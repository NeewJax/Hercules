import axios from "axios"
import fetch from "node-fetch"
import cheerio from "cheerio"
async function wikipedia(querry) {
try {
const link = await axios.get(`https://pt.wikipedia.org/wiki/${querry}`)
const $ = cheerio.load(link.data)
let judul = $('#firstHeading').text().trim()
let thumb = $('#mw-content-text').find('div.mw-parser-output > div:nth-child(1) > table > tbody > tr:nth-child(2) > td > a > img').attr('src') || `//i.ibb.co/nzqPBpC/http-error-404-not-found.png`
let isi = []
$('#mw-content-text > div.mw-parser-output').each(function (rayy, Ra) {
let penjelasan = $(Ra).find('p').text().trim() 
isi.push(penjelasan)})
for (let i of isi) {
const data = {
status: link.status,
result: {
judul: judul,
thumb: 'https:' + thumb,
isi: i}}
return data}
} catch (err) {
var notFond = {
status: link.status,
Pesan: eror}
return notFond}}
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗️𝐈𝐍𝐅𝐎❗️] Você está usando o comando incorreto!*\n*Uso correto:*\n*${usedPrefix + command} Palavra chave a buscar*\n\n*Exemplo:*\n*${usedPrefix + command} Estrelas*`
wikipedia(`${text}`).then(res => {
m.reply(`*Aqui a informação encontrada:*\n\n` + res.result.isi)
}).catch(() => { m.reply('*[❗️𝐈𝐍𝐅𝐎❗️] Não encontrei nenhuma informação, teste se você escreveu uma única palavra e se a escreveu corretamente :S *') })}
handler.help = ['wikipedia'].map(v => v + ' <apa>')
handler.tags = [ 'internet']
handler.command = /^(wiki|wikipedia)$/i
export default handler
