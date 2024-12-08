const items = [
    'limit', 'exp',
]
let confirmation = {}
async function handler(m, { conn, args, usedPrefix, command }) {
    if (confirmation[m.sender]) return m.reply('Você está fazendo uma transferência...')
    let user = global.db.data.users[m.sender]
    const item = items.filter(v => v in user && typeof user[v] == 'number')
    let lol = `✳️ Uso do comando 
*${usedPrefix + command}*  [tipo] [quantidade] [@user]
📌 Exemplo : ${usedPrefix + command} exp 65 @59172945992


📍 itens de transferência
┌──────────────
▢ *limit* = diamante
▢ *exp* = experiência
└──────────────
`.trim()
    const type = (args[0] || '').toLowerCase()
    if (!item.includes(type)) return m.reply(lol)
    const count = Math.min(Number.MAX_SAFE_INTEGER, Math.max(1, (isNumber(args[1]) ? parseInt(args[1]) : 1))) * 1
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
    if (!who) return m.reply('✳️ Marcar o usuário')
    if (!(who in global.db.data.users)) return m.reply(`✳️ Usuário ${who} não esta no banco de dados`)
    if (user[type] * 1 < count) return m.reply(`✳️  *${type}*  insuficiente para transferir`)
    let confirm = `
Tem certeza que deseja transferir *${count}* ${type} a  *@${(who || '').replace(/@s\.whatsapp\.net/g, '')}* ? 

tens  *60* s

Escreva: (sim) para aceitar
Escreva: (não) para cancelar
`.trim()
    let c = 'FG - dylux-bot'
    await conn.reply(m.chat, confirm, m, { mentions: [who] })
    //conn.sendButton(m.chat, confirm, c, null, [['si'], ['no']], m, { mentions: [who] })
    confirmation[m.sender] = {
        sender: m.sender,
        to: who,
        message: m,
        type,
        count,
        timeout: setTimeout(() => (m.reply('Se acabó el tiempo'), delete confirmation[m.sender]), 60 * 1000)
    }
}

handler.before = async m => {
    if (m.isBaileys) return
    if (!(m.sender in confirmation)) return
    if (!m.text) return
    let { timeout, sender, message, to, type, count } = confirmation[m.sender]
    if (m.id === message.id) return
    let user = global.db.data.users[sender]
    let _user = global.db.data.users[to]
    if (/^Não|Nao|nao|não$/i.test(m.text) ) { 
    //if (/no?/g.test(m.text.toLowerCase())) {
        clearTimeout(timeout)
        delete confirmation[sender]
        return m.reply('Cancelado')
    }
    if (/^Sim|sim$/i.test(m.text) ) { 
   // if (/si?/g.test(m.text.toLowerCase())) {
        let previous = user[type] * 1
        let _previous = _user[type] * 1
        user[type] -= count * 1
        _user[type] += count * 1
        if (previous > user[type] * 1 && _previous < _user[type] * 1) m.reply(`✅ transferência bem-sucedida de \n\n*${count}* *${type}*  a @${(to || '').replace(/@s\.whatsapp\.net/g, '')}`, null, { mentions: [to] })
        else {
            user[type] = previous
            _user[type] = _previous
            m.reply(`Falha ao transferir *${count}* ${type} para *@${(to || '').replace(/@s\.whatsapp\.net/g, '')}*`, null, { mentions: [to] })
        }
        clearTimeout(timeout)
        delete confirmation[sender]
    }
}

handler.help = ['transfer'].map(v => v + ' [tipo] [quantidade] [@tag]')
handler.tags = ['xp']
handler.command = ['payxp', 'transfer', 'darxp'] 

handler.disabled = false

export default handler

function special(type) {
    let b = type.toLowerCase()
    let special = (['common', 'uncommon', 'mythic', 'legendary', 'pet'].includes(b) ? ' Crate' : '')
    return special
}

function isNumber(x) {
    return !isNaN(x)
}
