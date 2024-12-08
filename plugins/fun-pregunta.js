let handler = async (m, { command, text }) => m.reply(`
*⁉️ PERGUNTAS ⁉️*
  
*PERGUNTA:* ${text}
*RESPOSTA:* ${['Sim','talvez sim...','Possivelmente','Provavelmente não','não','Impossível!'].getRandom()}
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['pergunta <texto>?']
handler.tags = ['kerang']
handler.command = /^pergunta|perguntas|apakah$/i
export default handler
