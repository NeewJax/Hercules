// Creditos del codigo a @Gatito-kw //

/* GitHub: https://github.com/Gatito-kw */

/* Bot: https://github.com/Gatito-kw/nekobot-md */

import { WAMessageStubType } from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, { conn, participants }) {
if (!m.messageStubType || !m.isGroup) return !0
   let groupName = (await conn.groupMetadata(m.chat)).subject
   let groupAdmins = participants.filter(p => p.admin)
   let pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => global.imagen1)
   let img = await (await fetch(pp)).buffer()
   let chat = global.db.data.chats[m.chat]
   const mentionsString = [m.sender, m.messageStubParameters[0], ...groupAdmins.map(v => v.id)]
   const mentionsContentM = [m.sender, m.messageStubParameters[0]]
   let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
   
   if (chat.detect2 && m.messageStubType == 29) {
      let txt1 = `*Recentemente um membro foi promovido a administrador.*\n\n`
         txt1 += `*◦  Grupo:* ${groupName}\n`
         txt1 += `*◦  Novo admin:* @${m.messageStubParameters[0].split`@`[0]}\n`
         txt1 += `*◦  Executado por:* @${m.sender.split`@`[0]}`
await conn.sendMessage(m.chat, { image: img, caption: txt1, mentions: mentionsString }, { quoted: fkontak2 })     
}
    
   if (chat.detect2 && m.messageStubType == 30) {
      let txt2 = `*Recentemente um administrador foi rebaixado a membro.*\n\n`
         txt2 += `*◦  Grupo:* ${groupName}\n`
         txt2 += `*◦  Foi removido para:* @${m.messageStubParameters[0].split`@`[0]}\n`
         txt2 += `*◦  Executado por:* @${m.sender.split`@`[0]}`
await conn.sendMessage(m.chat, { image: img, caption: txt2, mentions: mentionsString }, { quoted: fkontak2 })
}

   if (chat.detect2 && m.messageStubType == 27) {
      let txt3 = `*Recentemente um novo membro foi incorporado ao grupo.*\n\n`
         txt3 += `*◦  Grupo:* ${groupName}\n`
     if (!m.sender.endsWith('@g.us')) {
         txt3 += `*◦  Foi adicionado a:* @${m.messageStubParameters[0].split`@`[0]}\n`
         txt3 += `*◦  Executado por:* @${m.sender.split`@`[0]}`
   } else {
         txt3 += `*◦  Foi adicionado:* @${m.messageStubParameters[0].split`@`[0]}\n`
   }
await conn.sendMessage(m.chat, { image: img, caption: txt3, mentions: mentionsContentM }, { quoted: fkontak2 })
}
    
   if (chat.detect2 && m.messageStubType == 28) {
      let txt4 = `*Recentemente, um membro foi removido do grupo.*\n\n`
         txt4 += `*◦  Grupo:* ${groupName}\n` 
     if (!m.sender.endsWith('@g.us')) {        
         txt4 += `*◦  Removido para:* @${m.messageStubParameters[0].split`@`[0]}\n`
         txt4 += `*◦  Executado por:* @${m.sender.split`@`[0]}`
   } else {
         txt4 += `*◦  Removido para:* @${m.messageStubParameters[0].split`@`[0]}\n`   
   }       
await conn.sendMessage(m.chat, { image: { url: pp }, caption: txt4, mentions: mentionsContentM }, { quoted: fkontak2 })
}
       
   if (chat.detect2 && m.messageStubType == 32) {
      let ax 
    if (m.messageStubParameters[0] === m.sender) {
    ax = 'salido'    
    } else {
    ax = 'eliminado'    
    }
      let txt5 = `*Foi recentemente ${ax} um membro do grupo.*\n\n`
         txt5 += `*◦  Grupo:* ${groupName}\n`
     if (ax === 'eliminado') {       
         txt5 += `*◦  removido para:* @${m.messageStubParameters[0].split`@`[0]}\n`
         txt5 += `*◦  Executado por:* @${m.sender.split`@`[0]}`
   } else {
         txt5 += `*◦  Para forta:* @${m.messageStubParameters[0].split`@`[0]}\n`   
   }            
await conn.sendMessage(m.chat, { image: { url: pp }, caption: txt5, mentions: mentionsContentM }, { quoted: fkontak2 })
}    
    
   if (chat.detect2 && m.messageStubType == 26) {
      let accion  
    if (m.messageStubParameters[0].split`@`[0] === 'on') {
      accion = 'cerrado'    
      } else {
      accion = 'abierto'   
      }
      let txt6 = `*As configurações do grupo foram alteradas recentemente.*\n\n`
        txt6 += `*◦  Grupo:* ${groupName}\n`
        txt6 += `*◦  O grupo tem:* ${'```' + accion + '```'}\n`
        txt6 += `*◦  Executado por:* @${m.sender.split`@`[0]}`
await conn.sendMessage(m.chat, { image: { url: pp }, caption: txt6, mentions: mentionsContentM }, { quoted: fkontak2 })
}
    
   if (chat.detect2 && m.messageStubType == 21) {
      let txt7 = `*O nome do grupo foi alterado recentemente.*\n\n`
         txt7 += `*◦  Novo nome:* ${'```' + groupName + '```'}\n`
         txt7 += `*◦  Executado por:* @${m.sender.split`@`[0]}`
await conn.sendMessage(m.chat, { image: { url: pp }, caption: txt7, mentions: mentionsContentM }, { quoted: fkontak2 })
}

} /* Cierre del comando */
