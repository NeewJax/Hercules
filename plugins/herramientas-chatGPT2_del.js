let handler = async (m, { usedPrefix }) => {
try {
delete global.chatgpt.data.users[m.sender]  
m.reply(`*[❗] Excluído com sucesso o histórico de mensagens entre você e o chatgpt (IA)*\n\n*—◉ Lembre-se que você pode usar este comando quando tiver um erro no comando ${usedPrefix}chatgpt2 O ${usedPrefix}ia2*`)    
} catch (error1) {   
console.log(error1)
throw `*[❗] Erro, tente novamente*`   
}} 
handler.command = ['delchatgpt']
export default handler
