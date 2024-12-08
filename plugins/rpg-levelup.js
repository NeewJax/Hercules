import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

let handler = async (m, { conn }) => {
	let name = conn.getName(m.sender)
    let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
┌───⊷ *NIVEL*
▢ Nome : *${name}*
▢ Nível : *${user.level}*
▢ XP : *${user.exp - min}/${xp}*
└──────────────

Te falta *${max - user.exp}* de *XP* para subir de nivel
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `🎊 Bem feito ${conn.getName(m.sender)}    Nivel:`
        let str = `
┌─⊷ *LEVEL UP*
▢ Nivel anterior : *${before}*
▢ Nivel atual : *${user.level}*
└──────────────

*Quanto mais você interagir com os bots, maior será o seu nível*
`.trim()
        try {
            const img = await levelup(teks, user.level)
            conn.sendFile(m.chat, img, 'levelup.jpg', str, m)
        } catch (e) {
            m.reply(str)
        }
    }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = ['nivel', 'lvl', 'levelup', 'level'] 

export default handler
