import fetch from 'node-fetch';
import puppeteer from 'puppeteer';
import axios from 'axios';

let handler = async (m, { conn, args, command, usedPrefix }) => {
    if (!args[0]) throw `Coloque um usuário do instagram. Exemplo: *${usedPrefix + command} cristiano*`;
    m.reply(`*✅ Stalkeando... por favor, aguarde um momento...*`);

    try {
        const browser = await puppeteer.launch({ args: ['--no-sandbox'] }); // using --no-sandbox to launch on aws instance
        const page = await browser.newPage();
        await page.goto(`http://thejaxapi.rf.gd/api/instagram/insta-stalker.php?user=${args[0]}`);

        // Espera até que o elemento com o link de download esteja disponível na página
        await page.waitForSelector('pre', { timeout: 60000 }); // Aumentando o tempo limite para 60 segundos

        // Obtém o link de download diretamente do texto dentro do elemento 'pre'
        const downloadLink = await page.$eval('pre', element => {
            const json = JSON.parse(element.textContent);
            return json.data.profile_picture_url;
        });

        const globalData = await page.$eval('pre', element => {
            const json = JSON.parse(element.textContent);
            return {
                user: json.data.username,
                id_instagram: json.data.id_instagram,
                account_type: json.data.account_type,
                full_name: json.data.full_name,
                new_user: json.data.new_user,
                is_private: json.data.is_private,
                secondary_account: json.data.secondary_account,
                biography: json.data.biography,
                external_url: json.data.external_url,
                category: json.data.category,
                follower_count: json.data.follower_count,
                following_count: json.data.following_count,
                total_igtv_videos: json.data.total_igtv_videos

            };
        });

        await browser.close();

        // Construir o caption (legenda)
        const caption = `Usuário: ${globalData.user}\nID: ${globalData.id_instagram}\nTipo de conta: ${globalData.account_type}\nNome completo: ${globalData.full_name}\nNovo usuário: ${globalData.new_user}\nConta privada: ${globalData.is_private}\nConta secundária: ${globalData.secondary_account}\nBiografia: ${globalData.biography}\nURL externa: ${globalData.external_url}\nCategoria: ${globalData.category}\nSeguidores: ${globalData.follower_count}\nSeguindo: ${globalData.following_count}\nTotal de vídeos IGTV: ${globalData.total_igtv_videos}`;

        // Enviar a imagem com o caption
        await conn.sendFile(m.chat, downloadLink, 'instagram_profile_picture.jpg', caption, m);


    } catch (error) {
        console.error('Erro ao baixar vídeo:', error);
        throw `ixe, conseguir baixar não viu...`;
    }
};
handler.help = ['igstalk <username>']
handler.tags = ['internet']
handler.command = /^(igstalk)$/i
export default handler
