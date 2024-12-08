import {addExif} from '../lib/sticker.js';

const handler = async (m, {conn, text}) => {
  if (!m.quoted) throw 'você precisa responder uma figurinha para roubar...';
  let stiker = false;
  try {
    let [packname, ...author] = text.split('|');
    author = (author || []).join('|');
    const mime = m.quoted.mimetype || '';
    if (!/webp/.test(mime)) throw 'Erro no formato da imagem';
    const img = await m.quoted.download();
    if (!img) throw 'Erro...';
    stiker = await addExif(img, packname || global.packname, author || global.author);
  } catch (e) {
    console.error(e);
    if (Buffer.isBuffer(e)) stiker = e;
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, {asSticker: true});
    else throw 'erro.... hmmm isso é uma figurinha?';
  }
};

handler.help = ['wm <packname>|<author>'];
handler.tags = ['sticker'];
handler.command = /^take|roubar|roubarfig|wm$/i;
export default handler;
