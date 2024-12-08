import puppeteer from 'puppeteer';

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] Por favor, insira um nome de algum usuário do Instagram*\n\n*Exemplo:*\n*${usedPrefix + command} cristiano*`
    await m.reply(global.wait)
  
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        const res = await fetch(`https://dumpoir.com/api/profile/${args[0]}/stories?token=`);
        const data = await res.json();

        for (const story of data.stories) {
            const url = story.display_url;

            await page.goto(url, { waitUntil: 'networkidle0' });

            const fileName = url.split('/').pop();
            const filePath = `./tmp/${fileName}`;

            await page.screenshot({ path: filePath });

            await conn.sendFile(m.chat, filePath, null, null, m);
        }

        await browser.close();
    } catch (error) {
        console.error(error);
        return m.reply('*[❗] Ocorreu um erro ao processar a solicitação. Por favor, tente novamente mais tarde.*');
    }
}

handler.help = ['igstory <username>'];
handler.tags = ['downloader'];
handler.command = ['igstory', 'ighistoria', 'story', 'stories'];

export default handler;
