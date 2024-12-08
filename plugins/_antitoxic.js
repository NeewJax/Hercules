const toxicRegex = /puto|puta|rata|estupido|imbecil|rctmre|mrd|verga|vrga|maricon/i

export async function before(m, { isAdmin, isBotAdmin, isOwner }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup)
        return !1
    let user = global.db.data.users[m.sender]
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isToxic = toxicRegex.exec(m.text)
    
    if (isToxic && chat.antiToxic && !isOwner && !isAdmin) {
       user.warn += 1
       if (!(user.warn >= 5)) await m.reply(`${user.warn == 1 ? `Hola *@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`}, decir la palabra (${isToxic}) está prohibido en este bot *${user.warn}/5* advertencia`, false, { mentions: [m.sender] })
    }
    
    if (user.warn >= 5) {
       user.warn = 0
       await m.reply(`Ei *@${m.sender.split`@`[0]}*, você superou as 5 advertências... você vai ser bloqueado e expulso do grupo! 👋`, false, { mentions: [m.sender] })
       user.banned = true
       await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
       //await this.updateBlockStatus(m.sender, 'block')
    }
    return !1
}
