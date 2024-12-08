import fetch from 'node-fetch';
import fs from 'fs';

// Assuming you have defined 'wait', 'waitt', 'waittt', 'waitttt', 'waittttt', 'lolkeysapi', and 'wm' somewhere in your code.

const credentials = { clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3', clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009' };
//const spotify = new Spotify.default(credentials);

let handler = async (m, { conn, usedPrefix, command, text }) => {
    let fkontak = { "key": { "participants": "0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` } }, "participant": "0@s.whatsapp.net" };
    if (!text) return await conn.reply(m.chat, `${wait} ⊱ *${usedPrefix + command} Bellyache*`, fkontak, m);

    try {
        const { key } = await conn.sendMessage(m.chat, { text: wait }, { quoted: fkontak });
        await conn.sendMessage(m.chat, { text: waitt, edit: key });
        await conn.sendMessage(m.chat, { text: waittt, edit: key });
        await conn.sendMessage(m.chat, { text: waitttt, edit: key });

        let resDL = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkeysapi}&query=${text}`);
        let jsonDL = await resDL.json();
        let linkDL = jsonDL.result[0].link;
        let spty = await spotifydl(linkDL);

        const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
        };

        let randomName = getRandom(".mp3");
        const filePath = `./tmp/${randomName}`;
        fs.writeFileSync(filePath, spty.audio);

        let spotifyi = `✨ *Title:*
_${spty.data.name}_

🗣️ *Artists:*
_${spty.data.artists}_

🌐 *Link:*
_${linkDL}_

🎶 *Downloading...*
${wm}`;

        await conn.sendFile(m.chat, spty.data.cover_url, 'error.jpg', spotifyi, fkontak, m);
        await conn.sendMessage(m.chat, { document: fs.readFileSync(`./tmp/${randomName}`), fileName: `${spty.data.name}.mp3`, mimetype: "audio/mpeg", thumbnail: jsonDL.result[0] }, { quoted: m });
        await conn.sendMessage(m.chat, { text: waittttt, edit: key });
        handler.limit = 1;
    } catch (e) {
        await conn.reply(m.chat, `${wm}`, fkontak, m);
        console.log(`Error: ${e}`);
        handler.limit = false;
    }
}

handler.command = /^(spotify|music)$/i;
export default handler;
