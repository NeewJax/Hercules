let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let optionsFull = `*Opção:* ✨ | WELCOME
*Comando:* ${usedPrefix + command} welcome
*Descrição:* Ativar ou desativar as boas-vindas do grupo.

--------------------------------

*Opção:* 🌎 | MODO PUBLICO
*Comando:* ${usedPrefix + command} public
*Descrição:* O Bot se torna para uso público e/ou privado.
*Nota:* Este comando só pode ser usado pelo proprietário de bot.

--------------------------------

*Opção:* 🥵 | MODO HORNY
*Comando:* ${usedPrefix + command} modohorny
*Descrição:* Ativa ou desativa os comandos +18 do grupo.

--------------------------------

*Opção:* 🔗 | ANTILINK
*Comando:* ${usedPrefix + command} antilink
*Descrição:* Ative ou desative os anti-links do WhatsApp.
*Nota:* Você precisa ter a restrição ativa.

--------------------------------

*Opção:* 🔗 | ANTILINK 2
*Comando:* ${usedPrefix + command} antilink2
*Descrição:* Habilite ou desabilite anti-links iniciando em HTTPS.
*Nota:* Você precisa ter a restrição ativa.

--------------------------------

*Opção:* 🔎 | DETECT
*Comando:* ${usedPrefix + command} detect
*Descrição:* Ative ou desative notificações de alterações no grupo.

--------------------------------

*Opção:* 🔎 | DETECT 2
*Comando:* ${usedPrefix + command} detect2
*Descrição:* Detecte mudanças no grupo e mantenha uma melhor gestão.

--------------------------------

*Opção:* ❗ | RESTRICT
*Comando:* ${usedPrefix + command} restrict
*Descrição:* Ative ou desative as restrições de Bot, como remover ou adicionar pessoas a um grupo.
*Nota:* Este comando só pode ser usado pelo proprietário do bot.

--------------------------------

*Opção:* ☑️ | AUTOREAD
*Comando:* ${usedPrefix + command} autoread
*Descrição:* Marque mensagens e status automaticamente como lidos.
*Nota:* Este comando só pode ser usado pelo proprietário do bot.

--------------------------------

*Opção:* 🔊 | AUDIOS
*Comando:* ${usedPrefix + command} audios
*Descrição:* Ativa ou desativa os comandos de áudio sem prefixos, no grupo.

--------------------------------

*Opção:* 👾 | AUTOSTICKER
*Comando:* ${usedPrefix + command} autosticker 
*Descrição:* Todas as imagens ou vídeos enviados no grupo tornam-se stickers.

--------------------------------

*Opção:* 💬 | PCONLY
*Comando:* ${usedPrefix + command} pconly
*Descrição:* O Bot só responderá a comandos se for um chat privado.
*Nota:* Este comando só pode ser usado pelo proprietário do bot.

--------------------------------

*Opção:* 🏢 | GCONLY
*Comando:* ${usedPrefix + command} gconly
*Descrição:* O Bot só responderá a comandos se for um grupo.
*Nota:* Este comando só pode ser usado pelo proprietário do bot.

--------------------------------

*Opção:* ❌ | ANTIVIEWONCE 
*Comando:* ${usedPrefix + command} antiviewonce
*Descrição:* As imagens enviadas para ver apenas uma vez, são reenviadas normalmente pelo Bot.

--------------------------------

*Opção:* 📵 | ANTILLAMADAS
*Comando:* ${usedPrefix + command} anticall
*Descrição:* O Bot bloqueará as pessoas que ligarem para o Bot.
*Nota:* Este comando só pode ser usado pelo proprietário do bot.

--------------------------------

*Opção:* 💬 | ANTIPRIVADO
*Comando:* ${usedPrefix + command} antiprivado
*Descrição:* O Bot bloqueará as pessoas que escrevem para o privado do Bot.
*Nota:* Este comando só pode ser usado pelo proprietário do bot.

--------------------------------

*Opção:* 🤬 | ANTITOXIC
*Comando:* ${usedPrefix + command} antitoxic
*Descrição:* Detecta palavrões e avisa o participante do grupo, antes de ser eliminado.
*Nota:* Você precisa ter a restrição ativa.

--------------------------------

*Opção:* 🕸️ | ANTITRABAS
*Comando:* ${usedPrefix + command} antitraba
*Descrição:* O Bot detecta textos longos que podem ser vírus e causam lag no chat e deleta o usuário.
*Nota:* Você precisa ter a restrição ativa.

--------------------------------

*Opção:* 👎 | ANTIARABES
*Comando:* ${usedPrefix + command} antiarabes
*Descrição:* Se um número arábico entrar no grupo, o Bot o removerá automaticamente.
*Nota:* Você precisa ter as boas-vindas e a restrição ativas.

--------------------------------

*Opção:* 👎 | ANTIARABES 2
*Comando:* ${usedPrefix + command} antiarabes2
*Descrição:* Se um número arábico for gravado no grupo, o Bot o exclui automaticamente.
*Nota:* Você precisa ter a restrição ativa.

--------------------------------

*Opção:* 🤖 | MODEJADIBOT
*Comando:* ${usedPrefix + command} modejadibot
*Descrição:* Ativar ou desativar o uso de comandos para subbots (${usedPrefix}serbot / ${usedPrefix}jadibot). 
*Nota:* Este comando só pode ser usado pelo proprietário do bot.

--------------------------------

*Opção:* 👑 | MODOADMIN
*Comando:* ${usedPrefix + command} modoadmin
*Descrição:* O Bot responderá apenas aos administradores do grupo.

--------------------------------

*Opção:* 😃 | SIMSIMI
*Comando:* ${usedPrefix + command} simsimi
*Descrição:* O Bot começará a responder às mensagens usando o SimSimi AI.

--------------------------------

*Opção:* ⏳ | ANTISPAM
*Comando:* ${usedPrefix + command} antispam
*Descrição:* O Bot detecta quando um usuário envia spam ao comando e o bane por 5 segundos e o avisa.
*Nota:* Este comando só pode ser usado pelo proprietário do bot.`.trim()

let isEnable = /true|enable|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'welcome':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!(isAdmin || isOwner || isROwner)) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
case 'detect':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
case 'detect2':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect2 = isEnable
break    
case 'simsimi':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.simi = isEnable
break   
case 'antiporno':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiporno = isEnable
break        
case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
case 'antidelete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
case 'public':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
case 'antilink':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
case 'antilink2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
case 'antiviewonce':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiviewonce = isEnable 
break
case 'modohorny':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable          
break
case 'modoadmin':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modoadmin = isEnable          
break    
case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable          
break
case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
case 'restrict':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
case 'autoread':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.autoread2 = isEnable    
global.opts['autoread'] = isEnable  
break
case 'pconly':
case 'privateonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
case 'gconly':
case 'grouponly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
case 'swonly':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
case 'anticall':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiCall = isEnable
break
case 'antiprivado':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiPrivate = isEnable
break
case 'modejadibot':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.modejadibot = isEnable
break     
case 'antispam':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antispam = isEnable    
break
case 'antitoxic':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiToxic = isEnable
break
case 'antitraba':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTraba = isEnable
break
case 'antiarabes':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiArab = isEnable  
break
case 'antiarabes2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiArab2 = isEnable  
break    
default:
if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, { text: optionsFull }, { quoted: m })
throw false
}
conn.sendMessage(m.chat, { text: `🗂️ Opção: ${type}\n🎚️ Estado: ${isEnable ? 'Ativado' : 'Desativado'}\n📣 Para: ${isAll ? 'ESTE BOT' : isUser ? '' : 'ESTE CHAT'}` }, { quoted: m })        
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?[01])$/i
export default handler
