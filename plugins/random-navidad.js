import axios from 'axios'
let handler = async(m, {
	conn,
	args,
	usedPrefix,
	command
}) => {
	let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/navidad.json`)).data
	let mystic = await res[Math.floor(res.length * Math.random())]
	conn.sendMessage(m.chat, {
		image: {
			url: mystic
		},
		caption: `Natal 🧑‍🎄`
	}, {
		quoted: m
	});
	//conn.sendButton(m.chat, `_Navidad 🧑‍🎄_`, author, mystic, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `${usedPrefix + command}`]], m)
}
handler.help = ['natal']
handler.tags = ['internet']
handler.command = /^(natal)$/i
export default handler
