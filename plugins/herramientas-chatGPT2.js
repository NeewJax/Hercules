import fetch from 'node-fetch';
import { Configuration, OpenAIApi } from 'openai';
import translate from '@vitalets/google-translate-api';

const configuration = new Configuration({ organization: global.openai_org_id, apiKey: global.openai_key });
const openaiii = new OpenAIApi(configuration);

const handler = async (m, { conn, text, usedPrefix, command }) => {
    if (usedPrefix == 'a' || usedPrefix == 'A') return;
    if (!text) throw `*Diga algo para conversar com o chat gpt\n\n❏ Exemplo: \n❏ ${usedPrefix + command} Faça um texto romântico\n❏ ${usedPrefix + command}`
    try {
        conn.sendPresenceUpdate('composing', m.chat);
        let gpt = await fetch(`https://delirius-api-oficial.vercel.app/api/ia2?text=${text}`);
        let res = await gpt.json();
        let translated = await translate(res.gpt, { to: 'pt' });
        await m.reply(translated.text);
    } catch {
        try {
            let gpt = await fetch(`https://delirius-api-oficial.vercel.app/api/chatgpt?q=${text}`);
            let res = await gpt.json();
            let translated = await translate(res.data, { to: 'pt' });
            await m.reply(translated.text);
        } catch (e) {
            console.error(e);
        }
    }
}

handler.command = /^(openai|chatgpt|ia|ai|openai2|chatgpt2|ia2)$/i;
export default handler;
