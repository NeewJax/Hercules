let handler = async (m, { conn, text, participants, isAdmin, isOwner, usedPrefix, command}) => {
let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
let fproducto = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "17608914335@s.whatsapp.net" } : {}) }, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": imagen1 }, "title": `𝘾𝙤𝙢𝙪𝙣𝙞𝙘𝙖𝙙𝙤 𝙤𝙛𝙞𝙘𝙞𝙖𝙡 𝙖 𝙜𝙧𝙪𝙥𝙤𝙨`, "description": "𝙏𝙝𝙚 𝙃𝙚𝙧𝙘𝙪𝙡𝙚𝙨 - 𝘽𝙤𝙩", "currencyCode": "USD", "priceAmount1000": "1000000000", "retailerId": "Ghost", "productImageCount": 1 }, "businessOwnerJid": `0@s.whatsapp.net` }}}
if (!m.quoted) throw `Responda uma mensagem com o comando *${usedPrefix + command}* para mandar o aviso.`
for (let id of groups) {
await conn.sendMessage(id, { forward: m.quoted.fakeObj, mentions: (await conn.groupMetadata(`${id}`)).participants.map(v => v.id) }, { quoted: fproducto })
}
m.reply(`*[❗𝐈𝐍𝐅𝐎❗] Mensagem enviada a ${groups.length} GRUPOS *\n\n*NOTA: É POSSIVEL QUE TENHA ERROS COM ESSE COMANDO E NÃO SE SABE SE ENVIOU A TODOS OS PRIVADO!, Desculpe :(*`)  
}
handler.help = ['bcgc2']
handler.tags = ['owner']
handler.command = /^(bcgc2)$/i
handler.owner = true
export default handler
