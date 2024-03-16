import cheerio from 'cheerio'
import axios from 'axios' 
let handler = async (m, { conn, text, __dirname, usedPrefix, command }) => {
if (!global.db.data.chats[m.chat].modohorny && m.isGroup) throw '*[❗𝐈𝐍𝐅𝐎❗] Os comandos +18 estão desabilitados para este grupo, Se você é um admin e deseja ativar... digite #enable modohorny*'   
if (!text) throw '*[❗] Insira algum nome de hentai a buscar*';
let searchResults = await searchHentai(text);
let teks = searchResults.result.map((v, i) => `
${i+1}. *_${v.title}_*
↳ 📺 *_Vistas:_* ${v.views}
↳ 🎞️ *_Link:_* ${v.url}`).join('\n\n');
let randomThumbnail;
if (searchResults.result.length > 0) {
let randomIndex = Math.floor(Math.random() * searchResults.result.length);
randomThumbnail = searchResults.result[randomIndex].thumbnail;
} else {
randomThumbnail = 'https://pictures.hentai-foundry.com/e/Error-Dot/577798/Error-Dot-577798-Zero_Two.png';
teks = '*[❗] Resultados não encontrados*'; }
conn.sendFile(m.chat, randomThumbnail, 'error.jpg', teks, m);
}
handler.command = /^(hentaisearch|searchhentai)$/i
export default handler
async function searchHentai(search) {
return new Promise((resolve, reject) => { axios.get("https://hentai.tv/?s=" + search).then(async ({data}) => {
let $ = cheerio.load(data);
let result = {};
let res = [];
result.coder = 'rem-comp';
result.result = res;
result.warning = "It is strictly forbidden to reupload this code, copyright © 2022 by rem-comp";
$('div.flex > div.crsl-slde').each(function(a, b) {
let _thumbnail = $(b).find('img').attr('src');
let _title = $(b).find('a').text().trim();
let _views = $(b).find('p').text().trim();
let _url = $(b).find('a').attr('href');
let hasil = { thumbnail: _thumbnail, title: _title, views: _views, url: _url };
res.push(hasil)});
resolve(result)}).catch(err => {
console.log(err)})})}
