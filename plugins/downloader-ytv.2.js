import fetch from 'node-fetch';

let handler = async (m, { conn, args }) => {
    if (!args[0]) throw '*[❗𝐈𝐍𝐅𝐎❗] Insira o comando e o link de um vídeo no youtube!*';
    
    await m.reply(`*_⏳Seu vídeo está sendo baixado...⏳_*\n\n*◉ se o seu vídeo não for enviado, tente usar o comando #playdoc ou #play.2 ou #ytmp4doc ◉*`);
    
    try {
        let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${args[0]}`);
        let lolh = await lolhuman.json();
        let n = lolh.result.title || 'error';
        let n2 = lolh.result.link;
        let n3 = lolh.result.size;
        let cap2 = `*◉—⌈📥 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐃𝐋 📥⌋—◉*\n❏ *𝚃𝙸𝚃𝚄𝙻𝙾:* ${n}\n❏ *𝙿𝙴𝚂𝙾:* ${n3}`.trim();
        
        // Envie o arquivo de vídeo para o usuário
        await conn.sendMessage(m.chat, { document: { url: n2 }, caption: cap2, mimetype: 'video/mp4', fileName: n + '.mp4' }, { quoted: m });
    } catch (err) {
        console.error(err);
        await conn.reply(m.chat, '*[❗] Não foi possível baixar o seu vídeo*', m);
    }
};

handler.command = /^ytmp4doc|ytvdoc|ytmp4.2|ytv.2$/i;
export default handler;
