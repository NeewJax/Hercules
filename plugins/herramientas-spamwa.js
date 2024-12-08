let handler = async (m, { conn, text }) => {

let [nomor, pesan, jumlah] = text.split('|')
if (!nomor) throw '*[ ⚠️ ] Por favor insira o número para o qual a mensagem de spam será enviada!*\n*Uso correto:*\n*—◉ #spamwa numero|texto|cantidad*\n*Exemplo:*\n*—◉ #spamwa 5219999999999|responde :v|25*'
if (!pesan) throw '*[ ⚠️ ] Por favor insira o mensagem para spam!*\n*Uso correto:*\n*—◉ #spamwa numero|texto|cantidad*\n*Exemplo:*\n*—◉ #spamwa 5219999999999|responde :v|25*'
if (jumlah && isNaN(jumlah)) throw '*[ ⚠️ ] A quantidade deve ser um número !*\n*Uso correto:*\n*—◉ #spamwa numero|texto|cantidad*\n*Exemplo:*\n*—◉ #spamwa 5219999999999|responde :v|25*'

let fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net'
let fixedJumlah = jumlah ? jumlah * 1 : 10
if (fixedJumlah > 50) throw '*[ ⚠️ ] Muitas mensagens! A quantidade deve ser menor a 50 caracteres*️'
await m.reply(`*[❗] O spam de mensagens para o número ${nomor} Foi feito com sucesso*\n*Quantidade enviada:*\n*—◉ ${fixedJumlah} vezes!*`)
for (let i = fixedJumlah; i > 1; i--) {
if (i !== 0) conn.reply(fixedNumber, pesan.trim(), m)
}}
handler.help = ['spamwa <number>|<mesage>|<no of messages>']
handler.tags = ['General']
handler.command = /^spam(wa)?$/i
handler.group = false
handler.premium = true
//handler.private = true
//handler.limit = true
export default handler
