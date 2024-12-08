import fetch from 'node-fetch';
import translate from '@vitalets/google-translate-api';
import fs from "fs";

let handler = m => m;

handler.all = async function (m) {
    let chat = global.db.data.chats[m.chat];
    if (/^bot/i.test(m.text) && !chat.isBanned) {
        try {
            // Captura a parte da mensagem após "bot"
            let userMessage = m.text.replace(/^bot/i, '').trim();

            try {
                let gpt = await fetch(`https://delirius-api-oficial.vercel.app/api/ia2?text=${encodeURIComponent(userMessage)}`);
                let res = await gpt.json();
                let translated = await translate(res.gpt, { to: 'pt' });
                await m.reply(translated.text);
            } catch {
                try {
                    let gpt = await fetch(`https://delirius-api-oficial.vercel.app/api/chatgpt?q=${encodeURIComponent(userMessage)}`);
                    let res = await gpt.json();
                    let translated = await translate(res.data, { to: 'pt' });
                    await m.reply(translated.text);
                } catch (e) {
                    console.error(e);
                    await m.reply("Desculpe, ocorreu um erro ao processar sua solicitação.");
                }
            }
        } catch (e) {
            console.error(e);
            await m.reply("Desculpe, ocorreu um erro ao tentar enviar uma resposta.");
        }
    }
    return !0;
};

export default handler;
