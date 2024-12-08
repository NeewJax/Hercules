import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `*[❗] Insira um nome de um país, Exemplo ${usedPrefix + command} Mexico*`
let res = await fetch(global.API('https://covid19.mathdro.id', '/api/countries/'+ (text)))
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.confirmed) throw 'País?'
if (json.confirmed) m.reply(`
🌏 País: ${text}
✅Confirmado: ${json.confirmed.value}
📉Curados: ${json.recovered.value}
☠️Mortes: ${json.deaths.value}
💌Info atualizada: ${json.lastUpdate}
`.trim())
else throw json
}
handler.help = ['covid'].map(v => v + ' <país>')
handler.tags = ['info']
handler.command = /^(corona|covid|covid19)$/i
export default handler
