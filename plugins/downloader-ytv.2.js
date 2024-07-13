import puppeteer from 'puppeteer';

let handler = async (m, { conn, args }) => {
    if (!args[0]) throw '*[❗𝐈𝐍𝐅𝐎❗] Insira o comando e o link de um vídeo no youtube!*';
    
    await m.reply(`*_⏳Seu vídeo está sendo baixado...⏳_*\n\n*◉ se o seu vídeo não for enviado, tente usar o comando #playdoc ou #play.2 ou #ytmp4doc ◉*`);
    
    try {
        const videoUrl = args[0];

        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        // Acessa a URL da API
        await page.goto(`https://api.lolhuman.xyz/api/ytvideo?apikey=${lolkeysapi}&url=${videoUrl}`, {
            waitUntil: 'networkidle2'
        });

        // Extraia o conteúdo JSON da página
        const content = await page.evaluate(() => document.body.innerText);
        const data = JSON.parse(content);

        await browser.close();

        if (data.status === 200) {
            let title = data.result.title;
            let link = data.result.link.link;
            let size = data.result.link.size;
            let caption = `*◉—⌈📥 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐃𝐋 📥⌋—◉*\n❏ *𝚃𝙸𝚃𝚄𝙻𝙾:* ${title}\n❏ *𝙿𝙴𝚂𝙾:* ${size}`.trim();
            
            // Envie o arquivo de vídeo para o usuário
            await conn.sendMessage(m.chat, { document: { url: link }, caption: caption, mimetype: 'video/mp4', fileName: title + '.mp4' }, { quoted: m });
        } else {
            throw new Error('Failed to fetch video details');
        }
    } catch (err) {
        console.error(err);
        await conn.reply(m.chat, '*[❗] Não foi possível baixar o seu vídeo*', m);
    }
};

handler.command = /^ytmp4doc|ytvdoc|ytmp4.2|ytv.2$/i;
export default handler;

