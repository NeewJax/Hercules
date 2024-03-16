import { search, download } from 'aptoide-scraper'
let handler  = async (m, { conn, usedPrefix: prefix, command, text }) => {
try {
switch(command) {
case 'modapk': case 'apkmod': case 'aptoide':
if (!text) throw `*[❗] Insira o nome do APK que queira buscar*`    
let searchA = await search(text)
if (searchA.length < 1) return await  conn.sendMessage(m.chat, { text: '*[❗] Não foi possível encontrar a aplicação APK :( *' }, { quoted: m } )
var srh = [];  
for (var i = 0; i < searchA.length; i++) {
srh.push({ title: searchA[i].name, description: '', rowId: prefix + 'dapk2 ' + searchA[i].id });}
const sections = [{title: 'Selecione o mod para baixar', rows: srh}]
const listMessage = {text: `┌───[MOD APK BY HERCULES BOT]\n│\n│- 📟 RESULTADO DE: ${text}\n│\n└─────────────────◉`, footer: wm, title: null, buttonText: "SELECIONE AQUI", sections}
await conn.sendMessage(m.chat, listMessage, { quoted: m })
break
case 'dapk2': case 'aptoidedl':
if (!text) throw `*[❗] Insira um link de algum aplicativo APK, Exemplo: ${prefix + command}* https://rexdl.com/android/minecraft-pocket-edition-apk-download1.html/`     
await conn.reply(m.chat, global.wait, m)
let data5 = await download(text)
if ( data5.size.replace(' MB' , '') > 200) return await conn.sendMessage(m.chat, { text: '*[ ⛔ ] O arquivo é muito pesado*' }, { quoted: m } )
if ( data5.size.includes('GB')) return await conn.sendMessage(m.chat, { text: '*[ ⛔ ] O arquivo é muito pesado*' }, { quoted: m } )
await conn.sendMessage(m.chat, { document: { url: data5.dllink }, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null }, { quoted: m })   
break    
}} catch {
throw `*[❗] NENHUM MOD APK FOI ENCONTRADO COM ESSE NOME *`
}}    
handler.command = /^(apkmod|modapk|dapk2|aptoide|aptoidedl)$/i
export default handler




/*let handler  = async (m, { conn, usedPrefix: prefix, command, text }) => {
try {
switch(command) {
case 'modapk': case 'apkmod':
if (!text) throw `*[❗] 𝙸𝙽𝙶𝚁𝙴𝙴𝚂𝙴 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙻𝙰 𝙰𝙿𝙺 𝚀𝚄𝙴 𝚀𝚄𝙸𝙴𝚁𝙰 𝙱𝚄𝚂𝙲𝙰𝚁*`        
const data2 = await fetchJson('https://api.akuari.my.id/search/searchmod2?query=' + text)
global.fetchJson = fetchJson
const data = data2.respon
if (data.length < 1) return await  conn.sendMessage(m.chat, { text: '*[❗] 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙰𝚁 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂 𝙳𝙴 𝙻𝙰 𝙰𝙿𝙺*' }, { quoted: m } )
var srh = [];  
for (var i = 0; i < data.length; i++) {
srh.push({ title: data[i].title, description: '', rowId: prefix + 'dapk2 ' + data[i].link });}
const sections = [{title: '𝚂𝙴𝙻𝙴𝙲𝙲𝙸𝙾𝙽𝙰 𝙴𝙻 𝙼𝙾𝙳 𝙰 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁', rows: srh}]
const listMessage = {text: `┌───[ᴍᴏᴅᴀᴘᴋ ʙʏ ᴍʏsᴛɪᴄʙᴏᴛ]\n│\n│- 📟 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂 𝙳𝙴: ${text}\n│\n└─────────────────◉`, footer: wm, title: null, buttonText: "𝐒𝐄𝐋𝐄𝐂𝐂𝐈𝐎𝐍𝐀 𝐀𝐐𝐔𝐈", sections}
await conn.sendMessage(m.chat, listMessage, { quoted: m })
break
case 'dapk2': 
if (!text) throw `*[❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙻𝙸𝙽𝙺 𝙳𝙴 𝙰𝙻𝙶𝚄𝙽𝙰 𝙰𝙿𝙺, 𝙴𝙹𝙴𝙼𝙿𝙻𝙾: ${prefix + command}* https://rexdl.com/android/minecraft-pocket-edition-apk-download1.html/`     
await conn.reply(m.chat, global.wait, m)
let data5 = await fetchJson('https://api.akuari.my.id/downloader/dlmod2?link=' + text)
if ( data5.respon.size.replace(' MB' , '') > 200) return await conn.sendMessage(m.chat, { text: '*[ ⛔ ] ᴇʟ ᴀʀᴄʜɪᴠᴏ ᴇs ᴅᴇᴍᴀsɪᴀᴅᴏ ᴘᴇsᴀᴅᴏ*' }, { quoted: m } )
if ( data5.respon.size.includes('GB')) return await conn.sendMessage(m.chat, { text: '*[ ⛔ ] ᴇʟ ᴀʀᴄʜɪᴠᴏ ᴇs ᴅᴇᴍᴀsɪᴀᴅᴏ ᴘᴇsᴀᴅᴏ*' }, { quoted: m } )
const apk5 = await conn.sendMessage(m.chat, { document: { url: data5.respon.download[0].url }, mimetype: 'application/vnd.android.package-archive', fileName: data5.respon.title + '.apk', caption: null }, { quoted: m })   
break        
}
} catch {
throw `*[❗] 𝙽𝙾 𝚂𝙴 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙾 𝙽𝙸𝙽𝙶𝚄𝙽 𝙼𝙾𝙳 𝙰𝙿𝙺 𝙲𝙾𝙽 𝙴𝚂𝙴 𝙽𝙾𝙼𝙱𝚁𝙴 𝙾 𝙻𝙰 𝙰𝙿𝙸 (𝙿𝙰𝙶𝙸𝙽𝙰) 𝙴𝚂𝚃𝙰 𝙲𝙰𝙸𝙳𝙰*`
}}    
handler.command = /^(apkmod|modapk|dapk2)$/i
export default handler
async function fetchJson(url, options) {
try {
options ? options : {}
const res = await axios({ method: 'GET', url: url, headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'}, ...options })
return res.data
} catch (err) {
return err
}}*/
