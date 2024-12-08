export function before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        m.reply(`
  *[❗𝐈𝐍𝐅𝐎❗] Deixaste de estar ativo (AFK) ${user.afkReason ? ' Depois de estar AFK pelo motivo: ' + user.afkReason : ''}*
  
  *—◉ Tempo de inatividade (AFK): ${(new Date - user.afk).toTimeString()}*
  `.trim())
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        m.reply(`*[❗] Não há enquetes [❗]*

*—◉ O usuário que você marcou está inativo (afk)*      
*—◉ ${reason ? 'Motivo de inatividade (AFK): ' + reason : 'MOTIVO DE AFK: o usuário não colocou um motivo específico'}*
*—◉ Tempo de inatividade decorrido (AFK): ${(new Date - afkTime).toTimeString()}*
  `.trim())
    }
    return true
}
