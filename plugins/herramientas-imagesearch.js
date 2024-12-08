import fs from 'fs';
import fetch from 'node-fetch';
import { googleImage } from '@bochilteam/scraper';

let handler = async (m, { text, usedPrefix, command, conn }) => {
  try {
    if (!text) throw `*[❗] Digite a imagem que deseja pesquisar...*`;
    
    const res2 = await googleImage(text);
    let sfoto = res2.getRandom();

    let json = await fetch(`https://api.lolhuman.xyz/api/gimage2?apikey=${global.lolkeysapi}&query=${text}`);
    let jsons = await json.json();
    
    let imageUrls = jsons.result.slice(0, 5); // Extract the first 5 image URLs from the API response
    
    for (let i = 0; i < imageUrls.length; i++) {
      await conn.sendFile(m.chat, imageUrls[i], `image${i}.jpg`, '', m);
    }
  } catch {
    await m.reply('*[❗] Por favor, digite alguma imagem para procurar...*');
  }
};

handler.tags = ['searchimg', 'imgsearch'];
handler.command = ['searchimg', 'imgsearch', 'pesquisarimg', 'pesquisarimagem'];

export default handler;
