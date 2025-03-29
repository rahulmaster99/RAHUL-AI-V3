const { cmd } = require('../command');
const config = require('../config');
const axios = require('axios');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, sleep, fetchJson, empiretourl } = require('../Lib/functions');
const ffmpeg = require('fluent-ffmpeg');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const fs = require('fs');
const path = require('path');
const { sms, downloadMediaMessage } = require('../Lib/msg');
const prefix = config.PREFIX;

cmd({
    pattern: "tourl",
    alias: ["url"],
    desc: "Upload Files to get Urls.",
    category: "converter",
    react: "⏳",
    filename: __filename
}, async (conn, mek, m, { from, quoted, reply, pushname }) => {
    try {
      if (!quoted) {
        return reply(`Reply to an image, video, audio, or document to upload.\nUse *${prefix}url*`);
      }
      const mediaBuffer = await quoted.download();
      if (!mediaBuffer) {
        return reply('Failed to download media. Please try again.');
      }
      const { fileTypeFromBuffer } = await import('file-type'); // Import file-type npm package
      const fileType = await fileTypeFromBuffer(mediaBuffer);
      if (!fileType) {
        return reply('Unable to determine the file type of the media.');
      }

      // Generate a random filename using makeId function
      const filename = `${getRandom(5)}.${fileType.ext}`;

      // Save the media to a temporary file
      const tempFilePath = path.join(__dirname, filename);
      fs.writeFileSync(tempFilePath, mediaBuffer);
      const uploadResult = await empiretourl(tempFilePath);
      if (!uploadResult.success) {
        return reply(`Upload failed: ${uploadResult.error || uploadResult.message}`);
      }
      const downloadUrl = uploadResult.files[0].download_url;
      const deleteUrl = uploadResult.files[0].delete_url;
      const streamUrl = uploadResult.files[0].stream_url;
      const stats = fs.statSync(tempFilePath);
      const fileSizeMB = stats.size / (1024 * 1024);
      const message = `*Hey ${pushname}, Here Are Your Media URLs:*\n\nStream Url:${streamUrl}\nDownload Url:${downloadUrl}\nDelete Url:${deleteUrl}\n*File Size:* ${fileSizeMB.toFixed(
        2
      )} MB\n*File Type:* ${fileType.ext.toUpperCase()}\n*File Expiration:* No Expiry Unless Deleted`;
      if (fileType.mime.startsWith('image/') || fileType.mime.startsWith('video/')) {
        await conn.sendMessage(
          from,
          {
            [fileType.mime.startsWith('image/') ? 'image' : 'video']: { url: tempFilePath },
            caption: message,
          },
          { quoted: mek }
        );
      } else if (fileType.mime.startsWith('audio/')) {
        await conn.sendMessage(from, { text: message }, { quoted: mek });
      }
      await m.react('✅');
      fs.unlinkSync(tempFilePath);
    } catch (error) {
      console.error(error);
      reply(`An error occurred while uploading the file: ${error.message}`);
    }
});

cmd({
    pattern: "tomp3",
    desc: "Convert video to MP3.",
    category: "converter",
    react: "🎵",
    filename: __filename
}, async (conn, mek, m, { from, quoted, reply }) => {
    try {
        if (!quoted) return reply("❌ Reply to a video to convert it to MP3!");
        if (quoted.type !== "videoMessage") return reply("❌ Reply to a video message!");

      return  reply("⏳ Converting to MP3...");
        let inputFile = `/tmp/${Date.now()}.mp4`;
        let outputFile = inputFile.replace(".mp4", ".mp3");

        fs.writeFileSync(inputFile, await downloadMediaMessage(quoted, inputFile));

        exec(`ffmpeg -i ${inputFile} -q:a 0 -map a ${outputFile}`, async (err) => {
            if (err) {
                console.error(err);
                return reply("❌ Error converting video to MP3!");
            }

            let audioBuffer = fs.readFileSync(outputFile);
            await conn.sendMessage(from, { audio: audioBuffer, mimetype: "audio/mpeg" }, { quoted: m });

            fs.unlinkSync(inputFile);
            fs.unlinkSync(outputFile);
        });

    } catch (e) {
        console.error(e);
        reply("❌ Error processing the request!");
    }
});

cmd({
    pattern: "toimage",
    desc: "Convert sticker to image.",
    category: "converter",
    filename: __filename
}, async (conn, mek, m, { quoted, reply }) => {
    try {
        if (!quoted) return reply("❌ Please reply to a sticker!");
        if (quoted.type !== 'stickerMessage') return reply("❌ Only stickers can be converted to images!");

        const buff = await quoted.getbuff;
        await conn.sendMessage(m.chat, { image: buff });

    } catch (e) {
        console.error(e);
        reply("❌ An error occurred!");
    }
});


cmd({
    pattern: "tiny",
    desc: "Makes URL tiny.",
    category: "converter",
    use: "<url>",
    filename: __filename,
},
async (conn, mek, m, { from, quoted, isOwner, isAdmins, reply, args }) => {
    if (!args[0]) return reply("Provide me a link");

    try {
        const link = args[0];
        const response = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`);
        const shortenedUrl = response.data;

        return reply(`*🛡️Your Shortened URL*\n\n${shortenedUrl}`);
    } catch (e) {
        console.error(e);
        return reply("An error occurred while shortening the URL. Please try again.");
    }
});
