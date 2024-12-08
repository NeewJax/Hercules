let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sWelcome = text
m.reply('*[❗] Mensagem de bem vindo configurada corretamente*')
} else throw `*[❗] Insira a mensagem de bem vindo e use*\n*- @user (menção)*\n*- @group (nome do grupo)*\n*- @desc (descrição do grupo)*`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['setwelcome'] 
handler.admin = true
export default handler
