import { toAudio } from '../lib/converter.js';
import fs from 'fs';
import { exec } from 'child_process';

const handler = async (m, { conn, usedPrefix, command }) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q || q.msg).mimetype || q.mediaType || '';
  if (!/video|audio/.test(mime)) throw '*Você precisa responder um vídeo ou uma mensagem de voz para converter em .mp3*';
  const media = await q.download();
  if (!media) throw '*Falha ao baixar...*';
  const audio = await toAudio(media, 'mp4');
  if (!audio.data) throw '*Falha ao converter para audio*';
  conn.sendPresenceUpdate('recording', m.chat);

  // Salvar o arquivo opus temporariamente
  const opusFilePath = `./tmp/${Date.now()}.opus`;
  fs.writeFileSync(opusFilePath, audio.data);

  // Nome do arquivo mp3 e caminho de salvamento
  const mp3FileName = `converted_${Date.now()}.mp3`;
  const mp3FilePath = `./tmp/${mp3FileName}`;

  // Comando para converter o arquivo opus para mp3
  const ffmpegCommand = `ffmpeg -i ${opusFilePath} -acodec libmp3lame ${mp3FilePath}`;

  // Executar o comando ffmpeg
  exec(ffmpegCommand, async (error, stdout, stderr) => {
    if (error) {
      console.error(`ffmpeg error: ${error.message}`);
      fs.unlinkSync(opusFilePath); // Remover o arquivo opus temporário em caso de erro
      throw '*Falha ao converter para audio!*';
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);

    // Enviar o arquivo mp3 convertido
    conn.sendMessage(m.chat, { audio: { url: mp3FilePath }, ptt: true, mimetype: 'audio/mpeg', fileName: mp3FileName }, { quoted: m });

    // Remover o arquivo opus temporário
    fs.unlinkSync(opusFilePath);
  });
};

handler.alias = ['tomp3', 'toaudio'];
handler.command = /^to(mp3|audio)$/i;
export default handler;
