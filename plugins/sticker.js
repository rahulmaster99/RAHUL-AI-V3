//---------------------------------------------
//           EMPIRE-MD  
//---------------------------------------------
//  @project_name : EMPIRE-MD  
//  @author      : efeurhobobullish
//  ⚠️ DO NOT MODIFY THIS FILE ⚠️  
//---------------------------------------------
const { Sticker, StickerTypes } = require('wa-sticker-formatter');
const { cmd } = require('../command');
const axios = require('axios');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, sleep, fetchJson } = require('../Lib/functions');
const { downloadMediaMessage } = require('@whiskeysockets/baileys');
const fs = require('fs');
const path = require('path');

const imgmsg = 'Reply to a photo for sticker!'; // Default message when no image or sticker is found.
const descg = 'It converts your replied photo to a sticker.'; // Description of the command.

//--------------------------------------------
//     ATTP COMMANDS
//--------------------------------------------
cmd({
    pattern: "attp",
    alias: ["a"],
    desc: "Generate an image from text.",
    category: "sticker",
    use: ".attp <Text>",
    filename: __filename
}, async (conn, mek, m, { from, reply, isCmd, command, args, q, isGroup, pushname }) => {
    try {
        const text = args.join(" ");
        if (!text) {
            return reply("Please provide some text to generate the image.");
        }

        // Define the API endpoint and request parameters
        const apiUrl = `https://api.nexoracle.com/image-creating/attp?apikey=${global.apikey}&text=${encodeURIComponent(text)}`;
        
        // Call the NexOracle API to generate the image
        const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });

        // Check if the response is an image or a video/gif
        const contentType = response.headers['content-type'];
        console.log("API Content-Type: ", contentType); // Log the content type for debugging
        
        // If it's an image, handle it as an image
        if (contentType.includes('image')) {
            const imageBuffer = response.data;

            // Send the generated image as a message
            return conn.sendMessage(from, { image: imageBuffer, caption: `Here is your generated image: ${text}` }, { quoted: mek });
        }
        // If it's a video/gif, handle it as a video or gif sticker
        else if (contentType.includes('gif') || contentType.includes('video')) {
            const videoBuffer = response.data;

            // Send the generated video/gif as a sticker
            return conn.sendMessage(from, { video: videoBuffer, caption: `Here is your generated sticker: ${text}`, gifPlayback: true }, { quoted: mek });
        }
    } catch (e) {
        console.error("Error occurred:", e); // Log the real error
        reply('An error occurred. Check the logs for details.');
    }
});
//--------------------------------------------
//    STICKER COMMANDS
//--------------------------------------------
cmd({
    pattern: "sticker",
    alias: ["s"],
    desc: "Change image to sticker.",
    category: "sticker",
    use: ".sticker <Reply to image>",
    filename: __filename
}, async (conn, mek, m, { from, reply, isCmd, command, args, q, isGroup, pushname }) => {
    try {
        const isQuotedImage = m.quoted && (m.quoted.type === 'imageMessage' || (m.quoted.type === 'viewOnceMessage' && m.quoted.msg.type === 'imageMessage'));
        const isQuotedSticker = m.quoted && m.quoted.type === 'stickerMessage';

        if ((m.type === 'imageMessage') || isQuotedImage) {
            const nameJpg = getRandom('.jpg');
            const imageBuffer = isQuotedImage ? await m.quoted.download() : await m.download();
            await fs.promises.writeFile(nameJpg, imageBuffer);

            let sticker = new Sticker(nameJpg, {
                pack: global.botname, // Use global.botname for the sticker pack
                author: global.devsname || 'Hacker Only_🥇Empire', // Use global.devsname for the author
                type: q.includes('--crop') || q.includes('-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
                categories: ['🤩', '🎉'], // Sticker categories
                id: '12345', // Sticker id
                quality: 75, // Quality of the sticker
                background: 'transparent', // Transparent background for full stickers
            });

            const buffer = await sticker.toBuffer();
            return conn.sendMessage(from, { sticker: buffer }, { quoted: mek });
        } else if (isQuotedSticker) {
            const nameWebp = getRandom('.webp');
            const stickerBuffer = await m.quoted.download();
            await fs.promises.writeFile(nameWebp, stickerBuffer);

            let sticker = new Sticker(nameWebp, {
                pack: global.botname, // Use global.botname for the sticker pack
                author: global.devsname || 'Hacker Only_🥇Empire', // Use global.devsname for the author
                type: q.includes('--crop') || q.includes('-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
                categories: ['🤩', '🎉'], // Sticker categories
                id: '12345', // Sticker id
                quality: 75, // Quality of the sticker
                background: 'transparent', // Transparent background for full stickers
            });

            const buffer = await sticker.toBuffer();
            return conn.sendMessage(from, { sticker: buffer }, { quoted: mek });
        } else {
            return await reply(imgmsg); // Return the default message if no image or sticker is found.
        }
    } catch (e) {
        reply('Error !!');
        console.error(e);
    }
});
//--------------------------------------------
//  ROUND STICKER COMMANDS
//--------------------------------------------
cmd({
    pattern: "round",
    alias: ["r"],
    desc: "Change image to round sticker.",
    category: "sticker",
    use: ".roundsticker <Reply to image>",
    filename: __filename
}, async (conn, mek, m, { from, reply, isCmd, command, args, q, isGroup, pushname }) => {
    try {
        const isQuotedImage = m.quoted && (m.quoted.type === 'imageMessage' || (m.quoted.type === 'viewOnceMessage' && m.quoted.msg.type === 'imageMessage'));
        const isQuotedSticker = m.quoted && m.quoted.type === 'stickerMessage';

        if ((m.type === 'imageMessage') || isQuotedImage) {
            const nameJpg = getRandom('.jpg');
            const imageBuffer = isQuotedImage ? await m.quoted.download() : await m.download();
            await fs.promises.writeFile(nameJpg, imageBuffer);

            let sticker = new Sticker(nameJpg, {
                pack: global.botname, // Use global.botname for the sticker pack
                author: global.devsname || 'Hacker Only_🥇Empire', // Use global.devsname for the author
                type: StickerTypes.ROUND, // Round sticker type
                categories: ['🤩', '🎉'], // Sticker categories
                id: '12345', // Sticker id
                quality: 75, // Quality of the sticker
                background: 'transparent', // Transparent background for round stickers
            });

            const buffer = await sticker.toBuffer();
            return conn.sendMessage(from, { sticker: buffer }, { quoted: mek });
        } else if (isQuotedSticker) {
            const nameWebp = getRandom('.webp');
            const stickerBuffer = await m.quoted.download();
            await fs.promises.writeFile(nameWebp, stickerBuffer);

            let sticker = new Sticker(nameWebp, {
                pack: global.botname, // Use global.botname for the sticker pack
                author: global.devsname || 'Hacker Only_🥇Empire', // Use global.devsname for the author
                type: StickerTypes.ROUND, // Round sticker type
                categories: ['🤩', '🎉'], // Sticker categories
                id: '12345', // Sticker id
                quality: 75, // Quality of the sticker
                background: 'transparent', // Transparent background for round stickers
            });

            const buffer = await sticker.toBuffer();
            return conn.sendMessage(from, { sticker: buffer }, { quoted: mek });
        } else {
            return await reply(imgmsg); // Return the default message if no image or sticker is found.
        }
    } catch (e) {
        reply('Error !!');
        console.error(e);
    }
});
//--------------------------------------------
// CROP STICKER COMMANDS
//--------------------------------------------
cmd({
    pattern: "crop",
    alias: ["c"],
    desc: "Change image to cropped sticker.",
    category: "sticker",
    use: ".cropsticker <Reply to image>",
    filename: __filename
}, async (conn, mek, m, { from, reply, isCmd, command, args, q, isGroup, pushname }) => {
    try {
        const isQuotedImage = m.quoted && (m.quoted.type === 'imageMessage' || (m.quoted.type === 'viewOnceMessage' && m.quoted.msg.type === 'imageMessage'));
        const isQuotedSticker = m.quoted && m.quoted.type === 'stickerMessage';

        if ((m.type === 'imageMessage') || isQuotedImage) {
            const nameJpg = getRandom('.jpg');
            const imageBuffer = isQuotedImage ? await m.quoted.download() : await m.download();
            await fs.promises.writeFile(nameJpg, imageBuffer);

            let sticker = new Sticker(nameJpg, {
                pack: global.botname, // Use global.botname for the sticker pack
                author: global.devsname || 'Hacker Only_🥇Empire', // Use global.devsname for the author
                type: StickerTypes.CROPPED, // CROP sticker type
                categories: ['🤩', '🎉'], // Sticker categories
                id: '12345', // Sticker id
                quality: 75, // Quality of the sticker
                background: 'transparent', // Transparent background for cropped stickers
            });

            const buffer = await sticker.toBuffer();
            return conn.sendMessage(from, { sticker: buffer }, { quoted: mek });
        } else if (isQuotedSticker) {
            const nameWebp = getRandom('.webp');
            const stickerBuffer = await m.quoted.download();
            await fs.promises.writeFile(nameWebp, stickerBuffer);

            let sticker = new Sticker(nameWebp, {
                pack: global.botname, // Use global.botname for the sticker pack
                author: global.devsname || 'Hacker Only_🥇Empire', // Use global.devsname for the author
                type: StickerTypes.CROPPED, // CROP sticker type
                categories: ['🤩', '🎉'], // Sticker categories
                id: '12345', // Sticker id
                quality: 75, // Quality of the sticker
                background: 'transparent', // Transparent background for cropped stickers
            });

            const buffer = await sticker.toBuffer();
            return conn.sendMessage(from, { sticker: buffer }, { quoted: mek });
        } else {
            return await reply(imgmsg); // Return the default message if no image or sticker is found.
        }
    } catch (e) {
        reply('Error !!');
        console.error(e);
    }
});
