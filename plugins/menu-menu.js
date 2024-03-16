import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let pp = imagen4
//let vn = './media/menu.mp3'
let img = await(await fetch('https://i.imgur.com/JP52fdP.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'pt'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let str = `╭═══〘 ✯✯✯✯✯✯✯✯✯ 〙══╮
║    ◉— *The Hercules - Bot* —◉
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ Oii, ${taguser}
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ Owner: NeewJax
║➤ Data: ${date}
║➤ Tempo ativo: ${uptime}
║➤ Usuários:* ${rtotalreg}
╰═══╡✯✯✯✯✯✯✯✯✯╞═══╯

┏━━━━━━━━━━━━━━━━┓
┃ *<INFORMAÇÕES DO USUÁRIO/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ *🎖️ Nível:* ${level}
┣ *🧰 Experiência:* ${exp}
┣ *⚓ Rank:* ${role}
┣ *💎 Diamantes:* ${limit}
┣ *👾 Coins:* ${money}
┣ *🪙 Tokens:* ${joincount}
┣ *🎟️ Premium:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *<INFO DO BOT/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 💟 ${usedPrefix}termos
┣ ඬ⃟ 💟 ${usedPrefix}grupos
┣ ඬ⃟ 💟 ${usedPrefix}estado
┣ ඬ⃟ 💟 ${usedPrefix}infobot
┣ ඬ⃟ 💟 ${usedPrefix}animes
┣ ඬ⃟ 💟 ${usedPrefix}speedtest
┣ ඬ⃟ 💟 ${usedPrefix}doar
┣ ඬ⃟ 💟 ${usedPrefix}grouplist
┣ ඬ⃟ 💟 ${usedPrefix}owner
┣ ඬ⃟ 💟 ${usedPrefix}script
┣ ඬ⃟ 💟 ${usedPrefix}listprem
┣ ඬ⃟ 💟 Bot (USE SEM PREFIXO!)
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< Convide o Bot para seu grupo />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👽 ${usedPrefix}join <link / url>
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *<JOGOS/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🎖️ ${usedPrefix}mates <noob / easy / medium / hard / extreme /impossible /impossible2>
┣ ඬ⃟ 🎖️ ${usedPrefix}ppt <pedra / papel /tesoura>
┣ ඬ⃟ 🎖️ ${usedPrefix}prostituto <nome / @tag>
┣ ඬ⃟ 🎖️ ${usedPrefix}prostituta <nome / @tag>
┣ ඬ⃟ 🎖️ ${usedPrefix}gay2 <nome / @tag>
┣ ඬ⃟ 🎖️ ${usedPrefix}lesbiana <nome / @tag>
┣ ඬ⃟ 🎖️ ${usedPrefix}puto <nome / @tag>
┣ ඬ⃟ 🎖️ ${usedPrefix}puta <nome / @tag>
┣ ඬ⃟ 🎖️ ${usedPrefix}love <nome / @tag>
┣ ඬ⃟ 🎖️ ${usedPrefix}exposed <nome / @tag>
┣ ඬ⃟ 🎖️ ${usedPrefix}pergunta <texto>
┣ ඬ⃟ 🎖️ ${usedPrefix}slot <apuesta>
┣ ඬ⃟ 🎖️ ${usedPrefix}jogodavelha <nome sala>
┣ ඬ⃟ 🎖️ ${usedPrefix}sair
┣ ඬ⃟ 🎖️ ${usedPrefix}enigma
┣ ඬ⃟ 🎖️ ${usedPrefix}bonito <imagem>
┣ ඬ⃟ 🎖️ ${usedPrefix}viado <imagem>
┣ ඬ⃟ 🎖️ ${usedPrefix}rip <imagem>
┣ ඬ⃟ 🎖️ ${usedPrefix}trash <imagem>
┣ ඬ⃟ 🎖️ ${usedPrefix}formarcasal
┣ ඬ⃟ 🎖️ ${usedPrefix}verdade
┣ ඬ⃟ 🎖️ ${usedPrefix}desafio
┣ ඬ⃟ 🎖️ ${usedPrefix}musica
┣ ඬ⃟ 🎖️ ${usedPrefix}caçapalavras
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ <ATIVAR OU DESATIVAR/>
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ ☑️ ${usedPrefix}enable/disable welcome
┣ ඬ⃟ ☑️ ${usedPrefix}enable/disable modohorny
┣ ඬ⃟ ☑️ ${usedPrefix}enable/disable antilink
┣ ඬ⃟ ☑️ ${usedPrefix}enable/disable antilink2
┣ ඬ⃟ ☑️ ${usedPrefix}enable/disable detect
┣ ඬ⃟ ☑️ ${usedPrefix}enable/disable audios
┣ ඬ⃟ ☑️ ${usedPrefix}enable/disable autosticker
┣ ඬ⃟ ☑️ ${usedPrefix}enable/disable antiviewonce
┣ ඬ⃟ ☑️ ${usedPrefix}enable/disable antitoxic
┣ ඬ⃟ ☑️ ${usedPrefix}enable/disable antitraba
┣ ඬ⃟ ☑️ ${usedPrefix}enable/disable antiarabes
┣ ඬ⃟ ☑️ ${usedPrefix}enable/disable modoadmin
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┣ <REPORTAR ERROS/>
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🔰 ${usedPrefix}reporte <texto>
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ <BAIXAR/>
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 📥 ${usedPrefix}instagram <link / url>
┣ ඬ⃟ 📥 ${usedPrefix}mediafire <link / url>
┣ ඬ⃟ 📥 ${usedPrefix}animebaixar <nome do anime>
┣ ඬ⃟ 📥 ${usedPrefix}gitclone <link / url>
┣ ඬ⃟ 📥 ${usedPrefix}gdrive <link / url>
┣ ඬ⃟ 📥 ${usedPrefix}tiktok <link / url>
┣ ඬ⃟ 📥 ${usedPrefix}twitter <link / url>
┣ ඬ⃟ 📥 ${usedPrefix}fb <link / url>
┣ ඬ⃟ 📥 ${usedPrefix}ytmp3 <link / url>
┣ ඬ⃟ 📥 ${usedPrefix}ytmp4 <link / url>
┣ ඬ⃟ 📥 ${usedPrefix}ytmp3doc <link / url>
┣ ඬ⃟ 📥 ${usedPrefix}ytmp4doc <link / url>
┣ ඬ⃟ 📥 ${usedPrefix}videodoc <link / url>
┣ ඬ⃟ 📥 ${usedPrefix}dapk2 <link / url>
┣ ඬ⃟ 📥 ${usedPrefix}stickerpack <link / url>
┣ ඬ⃟ 📥 ${usedPrefix}play <texto>
┣ ඬ⃟ 📥 ${usedPrefix}pla3 <texto>
┣ ඬ⃟ 📥 ${usedPrefix}play.1 <texto>
┣ ඬ⃟ 📥 ${usedPrefix}play.2 <texto>
┣ ඬ⃟ 📥 ${usedPrefix}playdoc <texto>
┣ ඬ⃟ 📥 ${usedPrefix}playlist <texto>
┣ ඬ⃟ 📥 ${usedPrefix}playlist2 <texto>
┣ ඬ⃟ 📥 ${usedPrefix}ringtone <texto>
┣ ඬ⃟ 📥 ${usedPrefix}soundcloud <texto>
┣ ඬ⃟ 📥 ${usedPrefix}imagem <texto>
┣ ඬ⃟ 📥 ${usedPrefix}pinterest <texto>
┣ ඬ⃟ 📥 ${usedPrefix}wallpaper <texto>
┣ ඬ⃟ 📥 ${usedPrefix}pptiktok <nome de usuario>
┣ ඬ⃟ 📥 ${usedPrefix}igstalk <nome de usuario>
┣ ඬ⃟ 📥 ${usedPrefix}igstory <nome de usuario>
┣ ඬ⃟ 📥 ${usedPrefix}tiktokstalk <username>
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ <GRUPOS/>
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 💎 ${usedPrefix}add <numero>
┣ ඬ⃟ 💎 ${usedPrefix}kick (responder msg)
┣ ඬ⃟ 💎 ${usedPrefix}ban @tag / responder msg
┣ ඬ⃟ 💎 ${usedPrefix}listanum <texto>
┣ ඬ⃟ 💎 ${usedPrefix}kicknum <texto>
┣ ඬ⃟ 💎 ${usedPrefix}grupo <abrir / cerrar>
┣ ඬ⃟ 💎 ${usedPrefix}grouptime <opção> <tempo>
┣ ඬ⃟ 💎 ${usedPrefix}promote @tag / responder msg
┣ ඬ⃟ 💎 ${usedPrefix}demote @tag / responder msg
┣ ඬ⃟ 💎 admins <texto> (não precisa de prefixo!)
┣ ඬ⃟ 💎 ${usedPrefix}demote @tag / responder msg
┣ ඬ⃟ 💎 ${usedPrefix}infogroup
┣ ඬ⃟ 💎 ${usedPrefix}resetlink
┣ ඬ⃟ 💎 ${usedPrefix}link
┣ ඬ⃟ 💎 ${usedPrefix}setname <texto>
┣ ඬ⃟ 💎 ${usedPrefix}setdesc <texto>
┣ ඬ⃟ 💎 ${usedPrefix}invocar <texto>
┣ ඬ⃟ 💎 ${usedPrefix}setwelcome <texto>
┣ ඬ⃟ 💎 ${usedPrefix}setbye <texto>
┣ ඬ⃟ 💎 ${usedPrefix}hidetag <texto>
┣ ඬ⃟ 💎 ${usedPrefix}hidetag audio/msg/vídeo/imagem
┣ ඬ⃟ 💎 ${usedPrefix}advertir @tag / responder msg
┣ ඬ⃟ 💎 ${usedPrefix}unwarn <@tag>
┣ ඬ⃟ 💎 ${usedPrefix}listwarn
┣ ඬ⃟ 💎 ${usedPrefix}fantasmas
┣ ඬ⃟ 💎 ${usedPrefix}destrava
┣ ඬ⃟ 💎 ${usedPrefix}setpp <imagem>
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ <CONVERTER/>
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🧧 ${usedPrefix}toanime <imagem>
┣ ඬ⃟ 🧧 ${usedPrefix}togifaud <video>
┣ ඬ⃟ 🧧 ${usedPrefix}toimg <sticker>
┣ ඬ⃟ 🧧 ${usedPrefix}tomp3 <video>
┣ ඬ⃟ 🧧 ${usedPrefix}tomp3 <nota de voz>
┣ ඬ⃟ 🧧 ${usedPrefix}toptt <video / audio>
┣ ඬ⃟ 🧧 ${usedPrefix}tovideo <sticker>
┣ ඬ⃟ 🧧 ${usedPrefix}tourl <video / imagem / audio>
┣ ඬ⃟ 🧧 ${usedPrefix}tts es <texto>
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ <EFEITOS E LOGOS/>
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🖍️ ${usedPrefix}logos <efecto> <texto>
┣ ඬ⃟ 🖍️ ${usedPrefix}logochristmas <texto>
┣ ඬ⃟ 🖍️ ${usedPrefix}logocorazon <texto>
┣ ඬ⃟ 🖍️ ${usedPrefix}ytcomment <texto>
┣ ඬ⃟ 🖍️ ${usedPrefix}hornycard <@tag>
┣ ඬ⃟ 🖍️ ${usedPrefix}simpcard <@tag>
┣ ඬ⃟ 🖍️ ${usedPrefix}lolice <@tag>
┣ ඬ⃟ 🖍️ ${usedPrefix}itssostupid
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ <ALEATÓRIO/>
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👾 ${usedPrefix}elogios
┣ ඬ⃟ 👾 ${usedPrefix}kpop <blackpink / exo / bts>
┣ ඬ⃟ 👾 ${usedPrefix}cristianoronaldo
┣ ඬ⃟ 👾 ${usedPrefix}messi
┣ ඬ⃟ 👾 ${usedPrefix}cat
┣ ඬ⃟ 👾 ${usedPrefix}dog
┣ ඬ⃟ 👾 ${usedPrefix}meme
┣ ඬ⃟ 👾 ${usedPrefix}itzy
┣ ඬ⃟ 👾 ${usedPrefix}blackpink
┣ ඬ⃟ 👾 ${usedPrefix}lolivid
┣ ඬ⃟ 👾 ${usedPrefix}loli
┣ ඬ⃟ 👾 ${usedPrefix}natal
┣ ඬ⃟ 👾 ${usedPrefix}ppcouple
┣ ඬ⃟ 👾 ${usedPrefix}wpmontaña
┣ ඬ⃟ 👾 ${usedPrefix}pubg
┣ ඬ⃟ 👾 ${usedPrefix}wpgaming
┣ ඬ⃟ 👾 ${usedPrefix}wpaesthetic
┣ ඬ⃟ 👾 ${usedPrefix}wpaesthetic2
┣ ඬ⃟ 👾 ${usedPrefix}wprandom
┣ ඬ⃟ 👾 ${usedPrefix}wallhp
┣ ඬ⃟ 👾 ${usedPrefix}wpvehiculo
┣ ඬ⃟ 👾 ${usedPrefix}wpmoto
┣ ඬ⃟ 👾 ${usedPrefix}coffee
┣ ඬ⃟ 👾 ${usedPrefix}pentol
┣ ඬ⃟ 👾 ${usedPrefix}caricatura
┣ ඬ⃟ 👾 ${usedPrefix}ciberespacio
┣ ඬ⃟ 👾 ${usedPrefix}technology
┣ ඬ⃟ 👾 ${usedPrefix}doraemon
┣ ඬ⃟ 👾 ${usedPrefix}hacker
┣ ඬ⃟ 👾 ${usedPrefix}planeta
┣ ඬ⃟ 👾 ${usedPrefix}randomprofile
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ <EFEITOS E ÁUDIOS/>
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┃- Responda a um áudio ou mensagem de voz
┣ ඬ⃟ 🎤 ${usedPrefix}bass
┣ ඬ⃟ 🎤 ${usedPrefix}blown
┣ ඬ⃟ 🎤 ${usedPrefix}deep
┣ ඬ⃟ 🎤 ${usedPrefix}earrape
┣ ඬ⃟ 🎤 ${usedPrefix}fast
┣ ඬ⃟ 🎤 ${usedPrefix}fat
┣ ඬ⃟ 🎤 ${usedPrefix}nightcore
┣ ඬ⃟ 🎤 ${usedPrefix}reverse
┣ ඬ⃟ 🎤 ${usedPrefix}robot
┣ ඬ⃟ 🎤 ${usedPrefix}slow
┣ ඬ⃟ 🎤 ${usedPrefix}smooth
┣ ඬ⃟ 🎤 ${usedPrefix}tupai
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ <BUSCADORES/>
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🔍 ${usedPrefix}cuevana <texto>
┣ ඬ⃟ 🔍 ${usedPrefix}pelisplus <texto>
┣ ඬ⃟ 🔍 ${usedPrefix}modapk <texto>
┣ ඬ⃟ 🔍 ${usedPrefix}stickersearch <texto>
┣ ඬ⃟ 🔍 ${usedPrefix}stickersearch2 <texto>
┣ ඬ⃟ 🔍 ${usedPrefix}imgsearch <texto>
┣ ඬ⃟ 🔍 ${usedPrefix}animeinfo <texto>
┣ ඬ⃟ 🔍 ${usedPrefix}google <texto>
┣ ඬ⃟ 🔍 ${usedPrefix}letra <texto>
┣ ඬ⃟ 🔍 ${usedPrefix}wikipedia <texto>
┣ ඬ⃟ 🔍 ${usedPrefix}ytsearch <texto>
┣ ඬ⃟ 🔍 ${usedPrefix}playstore <texto>
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ <FERRAMENTAS/>
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🛠️ ${usedPrefix}chatgpt <texto>
┣ ඬ⃟ 🛠️ ${usedPrefix}chatgpt2 <texto>
┣ ඬ⃟ 🛠️ ${usedPrefix}delchatgpt
┣ ඬ⃟ 🛠️ ${usedPrefix}dall-e <texto>
┣ ඬ⃟ 🛠️ ${usedPrefix}spamwa <numero|texto|cantidad>
┣ ඬ⃟ 🛠️ ${usedPrefix}tamanho <quantidade> <imagem / vídeo>
┣ ඬ⃟ 🛠️ ${usedPrefix}read imagem / vídeo
┣ ඬ⃟ 🛠️ ${usedPrefix}clima país / cidade
┣ ඬ⃟ 🛠️ ${usedPrefix}enquete <texto1|texto2...>
┣ ඬ⃟ 🛠️ ${usedPrefix}afk <motivo>
┣ ඬ⃟ 🛠️ ${usedPrefix}hd <responde a imagem>
┣ ඬ⃟ 🛠️ ${usedPrefix}encurtar <link/url>
┣ ඬ⃟ 🛠️ ${usedPrefix}calc <operação matemática>
┣ ඬ⃟ 🛠️ ${usedPrefix}del @tag / responder msg
┣ ඬ⃟ 🛠️ ${usedPrefix}whatmusic <audio>
┣ ඬ⃟ 🛠️ ${usedPrefix}readqr <imagem (QR)>
┣ ඬ⃟ 🛠️ ${usedPrefix}qrcode <texto>
┣ ඬ⃟ 🛠️ ${usedPrefix}readmore <texto1| texto2>
┣ ඬ⃟ 🛠️ ${usedPrefix}styletext <texto>
┣ ඬ⃟ 🛠️ ${usedPrefix}traducir <texto>
┣ ඬ⃟ 🛠️ ${usedPrefix}nowa <numero>
┣ ඬ⃟ 🛠️ ${usedPrefix}covid <pais>
┣ ඬ⃟ 🛠️ ${usedPrefix}horario
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ <Figurinhas/>
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👽 ${usedPrefix}sticker <responder a imagem o video>
┣ ඬ⃟ 👽 ${usedPrefix}sticker <link / url>
┣ ඬ⃟ 👽 ${usedPrefix}sticker2 <responder a imagem o video>
┣ ඬ⃟ 👽 ${usedPrefix}sticker2 <link / url>
┣ ඬ⃟ 👽 ${usedPrefix}s <responder a imagem o video>
┣ ඬ⃟ 👽 ${usedPrefix}s <link / url>
┣ ඬ⃟ 👽 ${usedPrefix}s2 <responder a imagem o video>
┣ ඬ⃟ 👽 ${usedPrefix}s2 <link / url>
┣ ඬ⃟ 👽 ${usedPrefix}emojimix <emoji 1>&<emoji 2>
┣ ඬ⃟ 👽 ${usedPrefix}scircle <imagem>
┣ ඬ⃟ 👽 ${usedPrefix}sremovebg <imagem>
┣ ඬ⃟ 👽 ${usedPrefix}semoji <tipo> <emoji>
┣ ඬ⃟ 👽 ${usedPrefix}attp <texto>
┣ ඬ⃟ 👽 ${usedPrefix}attp2 <texto>
┣ ඬ⃟ 👽 ${usedPrefix}attp3 <texto>
┣ ඬ⃟ 👽 ${usedPrefix}ttp <texto>
┣ ඬ⃟ 👽 ${usedPrefix}ttp2 <texto>
┣ ඬ⃟ 👽 ${usedPrefix}ttp3 <texto>
┣ ඬ⃟ 👽 ${usedPrefix}ttp4 <texto>
┣ ඬ⃟ 👽 ${usedPrefix}ttp5 <texto>
┣ ඬ⃟ 👽 ${usedPrefix}acariciar @tag
┣ ඬ⃟ 👽 ${usedPrefix}kiss <@tag>
┣ ඬ⃟ 👽 ${usedPrefix}dado
┣ ඬ⃟ 👽 ${usedPrefix}roubar <packname> <author>
┣ ඬ⃟ 👽 ${usedPrefix}stickermarker <efecto> <imagem>
┣ ඬ⃟ 👽 ${usedPrefix}stickerfilter <efecto> <imagem>
┗━━━━━━━━━━━━━━━━┛`.trim()
if (m.isGroup) {
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })  
} else {    
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] Ops... tive um erro em carregar o menu, por favor diga ao meu proprietário!*', m)
}}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

/*let buttons = [
{ buttonId: '#donar', buttonText: { displayText: '📮 𝙳𝙾𝙽𝙰𝚁 📮' }, type: 1 },
//{ buttonId: '#terminosycondiciones', buttonText: { displayText: '📋 𝚃𝙴𝚁𝙼𝙸𝙽𝙾𝚂 𝚈 𝙲𝙾𝙽𝙳𝙸𝙲𝙸𝙾𝙽𝙴𝚂 📋' }, type: 1 }]
{ buttonId: '#infobot', buttonText: { displayText: '🐾 𝙸𝙽𝙵𝙾𝙱𝙾𝚃 🐾' }, type: 1 }]
let buttonMessage = {
image: pp,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '👑 𝐓𝐇𝐄 𝐌𝐘𝐒𝐓𝐈𝐂 - 𝐁𝐎𝐓 👑',
body: null,
thumbnail: img,
sourceUrl: `https://www.paypal.me/TheShadowBrokers133`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })*/
