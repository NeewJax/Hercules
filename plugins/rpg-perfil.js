import {
	createHash
} from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async(m, {
		conn,
		usedPrefix,
		participants,
		isPrems
	}) => {
		let pp = 'https://i.imgur.com/WHjtUae.jpg'
		let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
		if (!(who in global.db.data.users)) throw `O usuário que você está mencionando não está registrado em meu banco de dados`
		try {
			pp = await conn.profilePictureUrl(who)
		} catch (e) {

		} finally {
			let {
				name,
				limit,
				lastclaim,
				registered,
				regTime,
				age,
				premiumTime
			} = global.db.data.users[who]
			let username = conn.getName(who)
			let prem = global.prems.includes(who.split `@` [0])
			let sn = createHash('md5').update(who).digest('hex')
			let str = `*Nome:* ${username} ${registered ? '(' + name + ') ': ''}
*Número:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
*Link:* wa.me/${who.split`@`[0]}${registered ? '\n*Idade:* ' + age + ' anos' : ''}
*Limite:* ${limit} Usos
*Registrado:* ${registered ? 'Sim': 'Não'}
*Premium:* ${premiumTime > 0 ? 'Sim' : (isPrems ? 'Sim' : 'Não') || ''}
*Número de série:* 
${sn}`
conn.sendMessage(m.chat, {image: pp, str}, {quoted: m})
//conn.sendButton(m.chat, str, author, pp, [['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']], m)
}
}
handler.help = ['profile [@user]']
handler.tags = ['xp']
handler.command = /^perfil|profile?$/i
export default handler
