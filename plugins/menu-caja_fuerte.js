let handler = async (m, { conn, usedPrefix }) => {
let pp = imagen4
try {
} catch (e) {
} finally {
let name = await conn.getName(m.sender)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
*ミ💖 Oii, ${taguser} 💖彡*

ㅤㅤ *🗳️<Cofre/>🔐*

- Aqui você pode salvar as mensagens que deseja ver mais tarde

*<Adicionar à lista/>*

° ඬ⃟🗳️ _${usedPrefix}agregarmsg *<texto/comando/palavra chave>* (responde a um texto)_
° ඬ⃟🗳️ _${usedPrefix}agregarvn *<texto/comando/palavra chave>* (responde a uma mensagem de voz)_
° ඬ⃟🗳️ _${usedPrefix}agregarvideo *<texto/comando/palavra chave>* (responde a um video)_
° ඬ⃟🗳️ _${usedPrefix}agregaraudio *<texto/comando/palavra chave>* (responde a um audio)_
° ඬ⃟🗳️ _${usedPrefix}agregarimg *<texto/comando/palavra chave>* (responde a uma imagem)_
° ඬ⃟🗳️ _${usedPrefix}agregarsticker *<texto/comando/palavra chave>* (responde a um sticker)_

*<Lista de comandos/>*

° ඬ⃟🗳️ _${usedPrefix}listamsg_
° ඬ⃟🗳️ _${usedPrefix}listavn_
° ඬ⃟🗳️ _${usedPrefix}listavideo_
° ඬ⃟🗳️ _${usedPrefix}listaaudio_
° ඬ⃟🗳️ _${usedPrefix}listaimg_
° ඬ⃟🗳️ _${usedPrefix}listasticker_

*<Ver textos ou arquivos/>*

° ඬ⃟🗳️ _${usedPrefix}vermsg *<texto/comando/palavra chave>*_
° ඬ⃟🗳️ _${usedPrefix}vervn *<texto/comando/palavra chave>*_
° ඬ⃟🗳️ _${usedPrefix}vervideo *<texto/comando/palavra chave>*_
° ඬ⃟🗳️ _${usedPrefix}veraudio *<texto/comando/palavra chave>*_
° ඬ⃟🗳️ _${usedPrefix}verimg *<texto/comando/palavra chave>*_
° ඬ⃟🗳️ _${usedPrefix}versticker *<texto/comando/palavra chave>*_

*<Eliminar/>*

° ඬ⃟🗳️ _${usedPrefix}eliminarmsg *<texto/comando/palavra chave>*_
° ඬ⃟🗳️ _${usedPrefix}eliminarvn *<texto/comando/palavra chave>*_
° ඬ⃟🗳️ _${usedPrefix}eliminarvideo *<texto/comando/palavra chave>*_
° ඬ⃟🗳️ _${usedPrefix}eliminaraudio *<texto/comando/palavra chave>*_
° ඬ⃟🗳️ _${usedPrefix}eliminarimg *<texto/comando/palavra chave>*_
° ඬ⃟🗳️ _${usedPrefix}eliminarsticker *<texto/comando/palavra chave>*_`.trim()
if (m.isGroup) {
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: m })    
} else {    
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
//conn.sendButton(m.chat, str, wm, pp, [['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']], m, { mentions: [m.sender] })
}}
handler.help = ['cofre']
handler.tags = ['owner']
handler.command = /^(cofre)$/i
handler.rowner = true
handler.fail = null
export default handler
