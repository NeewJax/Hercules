let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] Por favor, insira um nome de algum usuário do Instagram*\n\n*Exemplo:*\n*${usedPrefix + command} cristiano*`
    await m.reply(global.wait)
  
    try {
      const res = await fetch(`https://dumpoir.com/api/profile/${args[0]}/stories`);
      const data = await res.text();
  
      // Extrair URLs das histórias
      const exp = data.match(/data-src="([^"]+)"/g) || [];
      const urls = exp.map((match) => match.match(/data-src="([^"]+)"/)[1]);
      const uniqueUrls = [...new Set(urls)];
  
      for (const url of uniqueUrls) {
        const resHead = await axios.head(url);
        const contentType = resHead.headers['content-type'];
  
        if (/image/.test(contentType)) {
          await conn.sendFile(m.chat, url, 'error.jpg', null, m).catch(() => {
            return m.reply('*[❗] USUÁRIO INVÁLIDO OU SEM STORIES*');
          });
        }
  
        if (/video/.test(contentType)) {
          await conn.sendFile(m.chat, url, 'error.mp4', null, m).catch(() => {
            return m.reply('*[❗] USUÁRIO INVÁLIDO OU SEM STORIES*');
          });
        }
      }
    } catch (error) {
      console.error(error);
      return m.reply('*[❗] Ocorreu um erro ao processar a solicitação. Por favor, tente novamente mais tarde.*');
    }
  }
  
  handler.help = ['igstory <username>'];
  handler.tags = ['downloader'];
  handler.command = ['igstory', 'ighistoria', 'story', 'stories'];
  
  export default handler;
  