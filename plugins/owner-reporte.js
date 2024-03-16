let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] Insira algum reporte*\n\n*Exemplo:*\n*${usedPrefix + command} o comando ${usedPrefix}play não manda nada*`
if (text.length < 10) throw `*[❗𝐈𝐍𝐅𝐎❗] O reporte deve ter no mínimo 10 caracteres*`
if (text.length > 1000) throw `*[❗𝐈𝐍𝐅𝐎❗] O reporte deve ter no máximo 1000 caracteres!*`
let teks = `*❒═════[REPORTE]═════❒*\n*┬*\n*├❧ NÚMERO:* wa.me/${m.sender.split`@`[0]}\n*┴*\n*┬*\n*├❧ MENSAGEM:* ${text}\n*┴*`
conn.reply('559891191467@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender] }})
m.reply(`*[ ✔️ ] Reporte enviado com sucesso ao criador do bot, seu suporte sera o mais rápido possível*`)
}
handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes)$/i
export default handler
