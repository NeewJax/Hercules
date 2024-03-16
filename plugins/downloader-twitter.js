import fetch from 'node-fetch';
import axios from 'axios';

let handler = async (m, { conn, args, command, usedPrefix }) => {
    if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] Insira um link do Twitter. Exemplo: ${usedPrefix + command}* https://twitter.com/auronplay/status/1586487664274206720?s=20&t=3snvkvwGUIez5iWYQAehpw`;
    
    try {
        m.reply(`*✅ Baixando seu vídeo, por favor aguarde um momento...*`);

        const apiUrl = `https://api.lolhuman.xyz/api/twitter?apikey=${lolkeysapi}&url=${args[0]}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error('Erro ao acessar a API');
        }

        const jsonData = await response.json();

        if (!jsonData.result) {
            throw new Error('Erro: nenhum resultado encontrado na resposta da API');
        }

        const tweetData = jsonData.result;
        const tweetVideoUrl = tweetData.media[0].url;

        // Envie o vídeo
        await conn.sendFile(m.chat, tweetVideoUrl, 'video.mp4', '', m);
    } catch (error) {
        console.log('Erro:', error);
        throw `*[❗𝐈𝐍𝐅𝐎❗] Ocorreu um erro ao baixar o vídeo. Por favor, tente novamente.*`;
    } 
}

handler.command = /^(twitterdl|twitter)$/i;
export default handler;