import fetch from 'node-fetch';
import { sticker } from '../lib/sticker.js';
import uploadFile from '../lib/uploadFile.js';
import uploadImage from '../lib/uploadImage.js';
import { Sticker } from 'wa-sticker-formatter';

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let stiker = false
  let user = db.data.users[m.sender]
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    await conn.reply(m.chat, getRandomPhrase(), m);
    if (/webp/g.test(mime)) {
      let img = await q.download?.();
      stiker = await createSticker(img, false, packname || '▹', author || global.author);
    } else if (/image/g.test(mime)) {
      let img = await q.download?.();
      stiker = await createSticker(img, false, packname || '▹', author || global.author);
    } else if (/video/g.test(mime)) {
      let img = await q.download?.();
      stiker = await mp4ToWebp(img, { pack: packname || '▹', author: author || global.author });
    } else if (args[0] && isUrl(args[0])) {
      stiker = await sticker(false, args[0], packname || '', author || global.author);
    } else {
      throw `*[❗𝐈𝐍𝐅𝐎❗] Responda a um vídeo, imagem ou link de terminação .jpg NA QUAL SERA CONVERTIDO EM STICKERS, DEVE RESPONDER OU USAR O COMANDO ${usedPrefix + command}*`;
    }
  } catch (error) {
    console.log(error);
    stiker = `*[❗𝐈𝐍𝐅𝐎❗] Ocorreu um erro, tente novamente. responda a um vídeo, imagem ou insira um link de uma imagem com terminação .jpg que sera convertido para figurinha*`;
  } finally {
    m.reply(stiker);
  }
};

handler.help = ['sfull'];
handler.tags = ['sticker'];
handler.command = /^s(tic?ker)?(gif)?(wm)?$/i;
export default handler;

const isUrl = (text) =>
  text.match(
    new RegExp(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/,
      'gi'
    )
  );

const getRandomPhrase = () => {
  const phrases = [
    'Tá achando que a vida é uma uva? kkkk meme, tô enviando já...',
    'aff, espera ai rapidinho que tô com preguiça',
    'vou já mandar sua figurinha... mas aceito um pix tb viu? kkkk',
    'opaa, pera que já mando sua figurinha',
    'blip blop blup... mando já!'
  ];
  return phrases[Math.floor(Math.random() * phrases.length)];
};

async function createSticker(img, url, packName, authorName, quality) {
  let stickerMetadata = { type: 'full', pack: packName, author: authorName, quality };
  return new Sticker(img ? img : url, stickerMetadata).toBuffer();
}

async function mp4ToWebp(file, stickerMetadata) {
  if (stickerMetadata) {
    if (!stickerMetadata.pack) stickerMetadata.pack = '‎'
    if (!stickerMetadata.author) stickerMetadata.author = '‎'
    if (!stickerMetadata.crop) stickerMetadata.crop = false
  } else if (!stickerMetadata) { 
    stickerMetadata = { pack: '‎', author: '‎', crop: false }
  }
  let getBase64 = file.toString('base64')
  const Format = { 
    file: `data:video/mp4;base64,${getBase64}`, 
    processOptions: { 
      crop: stickerMetadata?.crop, 
      startTime: '00:00:00.0', 
      endTime: '00:00:7.0', 
      loop: 0 
    }, 
    stickerMetadata: { ...stickerMetadata }, 
    sessionInfo: { 
      WA_VERSION: '2.2106.5', 
      PAGE_UA: 'WhatsApp/2.2037.6 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36', 
      WA_AUTOMATE_VERSION: '3.6.10 UPDATE AVAILABLE: 3.6.11', 
      BROWSER_VERSION: 'HeadlessChrome/88.0.4324.190', 
      OS: 'Windows Server 2016', 
      START_TS: 1614310326309, 
      NUM: '6247', 
      LAUNCH_TIME_MS: 7934, 
      PHONE_VERSION: '2.20.205.16' 
    }, 
    config: { 
      sessionId: 'session', 
      headless: true, 
      qrTimeout: 20, 
      authTimeout: 0, 
      cacheEnabled: false, 
      useChrome: true, 
      killProcessOnBrowserClose: true, 
      throwErrorOnTosBlock: false, 
      chromiumArgs: ['--no-sandbox', '--disable-setuid-sandbox', '--aggressive-cache-discard', '--disable-cache', '--disable-application-cache', '--disable-offline-load-stale-cache', '--disk-cache-size=0'],
      executablePath: 'C:\\\\Program Files (x86)\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe', 
      skipBrokenMethodsCheck: true, 
      stickerServerEndpoint: true 
    }
  }
  let res = await fetch('https://sticker-api.openwa.dev/convertMp4BufferToWebpDataUrl', { method: 'post', headers: { Accept: 'application/json, text/plain, /', 'Content-Type': 'application/json;charset=utf-8' }, body: JSON.stringify(Format)})
  return Buffer.from((await res.text()).split(';base64,')[1], 'base64')
}