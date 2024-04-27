import {toAudio} from '../lib/converter.js';

const handler = async (m, {conn, usedPrefix, command}) => {
    const q = m.quoted ? m.quoted : m;
    const mime = (q || q.msg).mimetype || q.mediaType || '';
    if (!/video|audio/.test(mime)) throw '*You need to reply to a video or audio message to convert it to audio.*';
    const media = await q.download();
    if (!media) throw '*Failed to download the media.*';
    const audio = await toAudio(media, 'mp4');
    if (!audio.data) throw '*Failed to convert the media to audio.*';
    conn.sendMessage(m.chat, {audio: audio.data, mimetype: 'audio/mpeg'}, {quoted: m});
  };
  handler.alias = ['tomp3', 'toaudio'];
  handler.command = /^to(mp3|audio)$/i;
  export default handler;