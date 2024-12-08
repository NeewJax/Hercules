import {wallpaper} from '@bochilteam/scraper';

const handler = async (m, {conn, text, usedPrefix, command}) => {
  const datas = global

  if (!text) throw `Uso correto do comando: ${usedPrefix + command} Minecraft*`;
  const res = await wallpaper(text);
  const img = res[Math.floor(Math.random() * res.length)];
  conn.sendFile(m.chat, img, 'error.jpg', `aqui está: ${text}*`, m);
};
handler.help = ['', '2'].map((v) => 'wallpaper' + v + ' <query>');
handler.tags = ['downloader'];
handler.command = /^(wallpaper2?)$/i;
export default handler;