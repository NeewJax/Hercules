import fetch from 'node-fetch';

let handler = async (m, { conn, args }) => {
    if (!args[0]) throw '*[❗𝐈𝐍𝐅𝐎❗] Insira o comando e o link / Link de um vídeo do youtube*';

    await m.reply(`*_⏳Seu áudio está sendo processado⏳_*\n\n*◉ Se o seu audio não for enviado tente #playdoc ou #play.2 ou #ytmp4doc ◉*`);

    try {
        let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${args[0]}`);
        let lolh = await lolhuman.json();
        let n = lolh.result.title || 'error';
        let n2 = lolh.result.link;
        let n3 = lolh.result.size;
        let cap2 = `*◉—⌈📥 YOUTUBE DL 📥⌋—◉*\n❏ *Título:* ${n}\n❏ *Tamanho:* ${n3}`.trim();

        // Envie o arquivo de áudio para o usuário
        await conn.sendMessage(m.chat, { document: { url: n2 }, caption: cap2, mimetype: 'audio/mpeg', fileName: `${n}.mp3` }, { quoted: m });
    } catch (err) {
        console.error(err);
        await conn.reply(m.chat, '*[❗] Erro... não foi possível baixar o seu áudio*', m);
    }
};

handler.command = /^ytmp3doc|ytadoc|ytmp3.2|yta.2$/i;
export default handler;
