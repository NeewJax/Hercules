import translate from '@vitalets/google-translate-api'
import fetch from 'node-fetch'
let handler = async (m, { args, usedPrefix, command }) => {
    let msg = `*[❗𝐈𝐍𝐅𝐎❗] Uso correto do comando ${usedPrefix + command} (idioma) (texto)*\n*Exemplo:*\n*${usedPrefix + command} es Hello*\n\n*Conheça os idiomas suportados em:*\n*- https://cloud.google.com/translate/docs/languages*`
    if (!args || !args[0]) return m.reply(msg)
    let lang = args[0]
    let text = args.slice(1).join(' ')
    const defaultLang = 'pt'
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text
    try {
        let result = await translate(`${text}`, { to: lang, autoCorrect: true })
        await m.reply('*Tradução:* ' + result.text)
    } catch {
        try {
            let lol = await fetch(`https://api.lolhuman.xyz/api/translate/auto/${lang}?apikey=${lolkeysapi}&text=${text}`)
            let loll = await lol.json()
            let result2 = loll.result.translated
            await m.reply('*Tradução:* ' + result2)
        } catch {
            await m.reply('*[❗𝐈𝐍𝐅𝐎❗] Erro, por favor tente novamente*')
        }
    }
}
handler.command = /^(translate|traduzir|tradutor|traducir|trad)$/i
export default handler
