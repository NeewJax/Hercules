import axios from 'axios';
let previousCommitSHA = '';
let previousUpdatedAt = '';
const owner = 'NeewJax';
const repo = 'Hercules-Bot';
let handler = async (m, { conn, text, usedPrefix, command }) => {
  async function checkRepoUpdates() {
    try {
      const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`)
      const { sha, commit: { message }, html_url } = response.data[0]

      if (sha !== previousCommitSHA || message !== previousUpdatedAt) {
        previousCommitSHA = sha
        previousUpdatedAt = message
    conn.sendMessage(m.chat, { text: `*[❗] O repositório foi atualizado*\n*- Repositório:* ${html_url}\n*- Mensagem de commit:* ${message}` }, { quoted: m })
   } 
  } catch (error) {
    m.reply('*[❗] Erro ao verificar o repositório:*', error.message)
   }
  }
 setInterval(checkRepoUpdates, 60000)
}
handler.command = /^(atualizar|atualizacao)/i
handler.rowner = true
export default handler
