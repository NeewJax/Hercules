import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
if (!text) return conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] Por favor, insira o comando mais o nome de usuário do tiktok*', m)
try {
let res = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=${lolkeysapi}`)
let res2 = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${lolkeysapi}`
let json = await res.json()
if (res.status !== 200) throw await res.text()
if (!json.status) throw json
let thumb = await (await fetch(json.result.user_picture)).buffer()
let Mystic = `
*Usuário:* ${json.result.username}
*Nome:* ${json.result.nickname}
*Seguidores:* ${json.result.followers}
*Seguindo:* ${json.result.followings}
*Likes:* ${json.result.likes}
*Videos:* ${json.result.video}
*Biográfia:* ${json.result.bio}
`.trim()
conn.sendFile(m.chat, res2, 'error.jpg', Mystic, m, false)
} catch (e) {
throw '*[❗𝐈𝐍𝐅𝐎❗] Erro... Não conseguir encontrar o nome de usuário informado :( *'
}}
handler.help = ['tiktokstalk'].map(v => v + ' <username>')
handler.tags = ['stalk']
handler.command = /^(tiktokstalk|ttstalk)$/i
export default handler
