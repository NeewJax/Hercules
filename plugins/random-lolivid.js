let handler  = async (m, { conn, usedPrefix, command }) => {
let res = "https://recoders-area.caliph.repl.co/api/lolivid"
conn.sendButton(m.chat, `ʟᴏʟɪ ɪѕ ᴄᴜᴛᴇ 🥺`, wm, res, [['🔄 Seguinte 🔄', `/${command}`]], m)}
handler.help = ['lolivid']
handler.tags = ['random']
handler.command = /^(lolivid|lolivideos|lolívid)$/i
export default handler
