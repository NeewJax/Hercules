import puppeteer from 'puppeteer';
import axios from 'axios';

let handler = async (m, { conn, args, command, usedPrefix }) => {
    if (!args[0]) throw `Coloque um usuário do Instagram. Exemplo: *${usedPrefix + command} cristiano*`;
    m.reply(`*✅ Stalkeando... por favor, aguarde um momento...*`);

    try {
        const browser = await puppeteer.launch({
            args: ['--no-sandbox'],
            proxy: {
                server: '185.199.228.220:7300',
                username: 'dcokuyxn',
                password: 'c53oce937vlx'
            }
        });
        const page = await browser.newPage();
        await page.setDefaultNavigationTimeout(60000); // Ajuste do tempo limite de navegação
        await page.goto(`http://thejaxapi.rf.gd/api/instagram/insta-stalker.php?user=${args[0]}`, { waitUntil: 'networkidle2' });

        // Espera até que o elemento com o link de download esteja disponível na página
        await page.waitForSelector('pre', { timeout: 60000 });

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

        const caption = `Usuário: ${globalData.user}\nID: ${globalData.id_instagram}\nTipo de conta: ${globalData.account_type}\nNome completo: ${globalData.full_name}\nNovo usuário: ${globalData.new_user}\nConta privada: ${globalData.is_private}\nConta secundária: ${globalData.secondary_account}\nBiografia: ${globalData.biography}\nURL externa: ${globalData.external_url}\nCategoria: ${globalData.category}\nSeguidores: ${globalData.follower_count}\nSeguindo: ${globalData.following_count}\nTotal de vídeos IGTV: ${globalData.total_igtv_videos}`;

        await conn.sendFile(m.chat, downloadLink, 'instagram_profile_picture.jpg', caption, m);

    } catch (error) {
        console.error('Erro ao acessar o perfil do Instagram:', error);
        throw `Ops, houve um erro ao acessar o perfil do Instagram. Tente novamente mais tarde.`;
    }
};

handler.help = ['igstalk <username>']
handler.tags = ['internet']
handler.command = /^(igstalk)$/i
export default handler
