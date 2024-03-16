import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

global.owner = [
  ['559891191467', '👑 Mystic - Creador 👑', true],
] 

global.suittag = ['559891191467'] 
global.prems = ['559891191467'] 
global.reportes_solicitudes = ['559891191467']

global.packname = '(☞ﾟ∀ﾟ)☞'
global.author = '★𝙏𝙝𝙚 𝙃𝙚𝙧𝙘𝙪𝙡𝙚𝙨 - 𝘽𝙤𝙩★'
global.wm = '★𝙏𝙝𝙚 𝙃𝙚𝙧𝙘𝙪𝙡𝙚𝙨 - 𝘽𝙤𝙩★'
global.igfg = '★𝙏𝙝𝙚 𝙃𝙚𝙧𝙘𝙪𝙡𝙚𝙨 - 𝘽𝙤𝙩★'
global.wait = '*[❗] 𝘾𝙖𝙧𝙧𝙚𝙜𝙖𝙣𝙙𝙤, 𝙖𝙜𝙪𝙖𝙧𝙙𝙚 𝙪𝙢 𝙢𝙤𝙢𝙚𝙣𝙩𝙤...*'

global.imagen1 = fs.readFileSync('./Menu2.jpg')
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg') 
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png')
global.imagen4 = fs.readFileSync('./Menu.png')
global.imagen5 = fs.readFileSync('./src/+18.jpg')

global.mods = [] 

//********Tiempo***************
global.d = new Date(new Date + 3600000)
global.locale = 'es'
global.dia = d.toLocaleDateString(locale, { weekday: 'long' })
global.fecha = d.toLocaleDateString('es', { day: 'numeric', month: 'numeric', year: 'numeric' })
global.mes = d.toLocaleDateString('es', { month: 'long' })
global.año = d.toLocaleDateString('es', { year: 'numeric' })
global.tiempo = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
//*****************************
global.wm2 = `▸ ${dia} ${fecha}\n▸ 𝙏𝙝𝙚 𝙃𝙚𝙧𝙘𝙪𝙡𝙚𝙨 - 𝘽𝙤𝙩`
global.gt = '★𝙏𝙝𝙚 𝙃𝙚𝙧𝙘𝙪𝙡𝙚𝙨 - 𝘽𝙤𝙩★'
global.mysticbot = '★𝙏𝙝𝙚 𝙃𝙚𝙧𝙘𝙪𝙡𝙚𝙨 - 𝘽𝙤𝙩★'
global.md = 'https://github.com/NeewJax/Hercules-Bot'
global.mysticbot = 'https://github.com/NeewJax/Hercules-Bot'
global.waitt = '*[❗] 𝘾𝙖𝙧𝙧𝙚𝙜𝙖𝙣𝙙𝙤, 𝙖𝙜𝙪𝙖𝙧𝙙𝙚 𝙪𝙢 𝙢𝙤𝙢𝙚𝙣𝙩𝙤...*'
global.waittt = '*[❗] 𝘾𝙖𝙧𝙧𝙚𝙜𝙖𝙣𝙙𝙤, 𝙖𝙜𝙪𝙖𝙧𝙙𝙚 𝙪𝙢 𝙢𝙤𝙢𝙚𝙣𝙩𝙤...*'
global.waitttt = '*[❗] 𝘾𝙖𝙧𝙧𝙚𝙜𝙖𝙣𝙙𝙤, 𝙖𝙜𝙪𝙖𝙧𝙙𝙚 𝙪𝙢 𝙢𝙤𝙢𝙚𝙣𝙩𝙤...*'
global.nomorown = '5219993404349'
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf']
global.cmenut = '❖––––––『'
global.cmenub = '┊✦ '
global.cmenuf = '╰━═┅═━––––––๑\n'
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     '
global.dmenut = '*❖─┅──┅〈*'
global.dmenub = '*┊»*'
global.dmenub2 = '*┊*'
global.dmenuf = '*╰┅────────┅✦*'
global.htjava = '⫹⫺'
global.htki = '*⭑•̩̩͙⊱•••• ☪*'
global.htka = '*☪ ••••̩̩͙⊰•⭑*'
global.comienzo = '• • ◕◕════'
global.fin = '════◕◕ • •'
global.botdate = `⫹⫺ Date :  ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}` //Asia/Jakarta
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`//America/Los_Angeles
global.fgif = {key: { participant : '0@s.whatsapp.net'}, message: { "videoMessage": { "title": wm, "h": `Hmm`, 'seconds': '999999999',  'gifPlayback': 'true',  'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}}
global.multiplier = 99
//*************************

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
unwatchFile(file)
console.log(chalk.redBright("Update 'config.js'"))
import(`${file}?update=${Date.now()}`)})
