
























































































const config = require('../config')
const {cmd , commands} = require('../command')
cmd({

    pattern: "menu",

    react: "🌠",

    alias: ["allmenu","bot","commands"],

    desc: "Get bot\'s command list.",

    category: "main",

    use: '.menu3',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
let madeMenu = `*╭━━❍〘〘 ${config.BOT_NAME} 〙〙*
*┃🪾 ᴍᴏᴅᴇ* : *${config.MODE}*
*┃🪄 ᴘʀᴇғɪx* : *${config.PREFIX}*
*┃🌀 ʙᴀɪʟᴇʏs: RAHUL-MASTER*
*┃🎐 ʀᴀᴍ* : *34.56 ɢʙ/60.79*
*┃👑 ᴄʀᴇᴀᴛᴏʀ* : *RAHUL AI V3*
*┃⏰ ᴀʟᴡᴀʏs ᴏɴʟɪɴᴇ* : *${config.ALWAYS_ONLINE}*
*┃🫟 ᴠᴇʀsɪᴏɴs* : *ᴠ.4.0.0*
*╰━━━━━━━━━━━━━━━━━━❍*
*♡︎•━━━━━━━━☻︎━━━━━━━━•♡︎*
*╭─❍ 📥DOWNLOAD-CMD📥 ❍* 
*├⬡ .ғʙ*
*├⬡ .ɪɴꜱᴛᴀ*
*├⬡ .ᴠɪᴅᴇᴏ*
*├⬡ .ɢᴅʀɪᴠᴇ*
*├⬡ .ᴛᴡɪᴛᴛᴇʀ*
*├⬡ .ᴛᴛ*
*├⬡ .ᴍᴇᴅɪᴀғɪʀᴇ*
*├⬡ .ᴘʟᴀʏ*
*├⬡ .ᴀᴘᴋ*
*├⬡ .sᴏɴɢ*
*├⬡ .ᴠɪᴅᴇᴏ*
*├⬡ .ᴠɪᴅᴇᴏ2*
*├⬡ .sᴘᴏᴛɪꜰʏ*
*├⬡ .ɪᴍɢ*
*├⬡ .ʟʏʀɪᴄs*
*├⬡ .ᴀᴘᴋ*
*├⬡ .ᴅᴀʀᴀᴍᴀ*
*├⬡ .ᴘʟᴀʏ2*
*├⬡ .ʙᴀɪsᴄᴏᴘᴇ*
*├⬡ .ɢɪɴɪsɪsɪʟᴀ*
*┕──────────────────❍*
*╭──❍ 🏮 RAHUL AI V3 🏮 ❍* 
*├⬡ .ғᴀᴍɪʟʏ*
*├⬡ .ᴄʜᴀɴɴᴇʟ*
*├⬡ .sᴜᴘᴘᴏʀᴛ*
*├⬡ .ᴇxᴏʀ*
*├⬡ .ᴘʀᴏᴍᴏᴛᴇsᴛᴀꜰꜰ*
*┕──────────────────❍*
*╭──❍ 🕺 FUN-CMD 🕺 ❍* 
*├⬡ .ʜᴇᴀʀᴛ*
*├⬡ .ɴɪᴋᴀʟ*
*├⬡ .sʜʏ*
*├⬡ .ᴍᴏᴏɴ*
*├⬡ .ᴄᴏɴғᴜsᴇᴅ*
*├⬡ .ʜᴀᴘᴘʏ*
*├⬡ .ᴀɴɢʀʏ*
*├⬡ .sᴀᴅ*
*├⬡ .ʜᴏᴛ*
*├⬡ .ᴇᴍɪx🙂,😇*
*├⬡ .ᴇxᴏʀ*
*├⬡ .ᴀᴛᴛᴘ*
*├⬡ .ꜱʜᴀᴘᴀʀ*
*├⬡ .ʙᴏɴᴋ*
*├⬡ .ꜱᴍᴜɢ*
*├⬡ .ʙᴜʟʟʏ*
*├⬡ .ᴀᴡᴏᴏ*
*├⬡ .ᴋɪꜱꜱ*
*├⬡ .ᴄᴜᴅᴅʟᴇ*
*├⬡ .ʟɪᴄᴋ*
*├⬡ .ɢʟᴏᴍᴘ*
*├⬡ .ꜱᴍɪʟᴇ*
*├⬡ .ʜɪɢʜꜰɪᴠᴇ*
*├⬡ .ꜱʟᴀᴘ*
*├⬡ .ᴋɪʟʟ*
*├⬡  .ᴡɪɴᴋ*
*├⬡ .ʙɪᴛᴇ*
*├⬡ .ᴄʀɪɴɢᴇ*
*├⬡ .ᴅᴀɴᴄᴇ*
*├⬡ .ʙʟᴜꜱʜ*
*├⬡ .ʜᴀɴᴅʜᴏʟᴅ*
*├⬡ .ɴᴏᴍ*
*├⬡ .ʜᴀᴄᴋ*
*┕──────────────────❍*
*╭──❍ 🔎 SEARCH-CMD 🔍 ❍* 
*├⬡ .ʏᴛꜱ*
*├⬡ .ʏᴛᴀ*
*├⬡ .ʟᴏʟɪ*
*├⬡ .ᴍᴏᴠɪᴇɪɴғᴏ*
*├⬡ .ᴍᴏᴠɪᴇ*
*├⬡ .Gᴏᴏɢʟᴇ*
*├⬡ .ᴡᴇᴀᴛʜᴇʀ*
*├⬡ .sᴛɪᴄᴋsᴇᴀʀᴄʜ*
*┕──────────────────❍*
*╭─❍ 🧸EMOTIONAL CMD🧸 ❍* 
*├⬡  .sᴀᴅ*
*├⬡  .ᴀɴɢʀʏ*
*├⬡  .ʜᴀᴘᴘʏ*
*├⬡  .ʜᴇᴀʀᴛ*
*├⬡  .ᴄᴏɴғᴜsᴇᴅ*
*├⬡  .sʜʏ*
*├⬡  .ᴍᴏᴏɴ*
*├⬡  .ʜᴏᴛ*
*┕──────────────────❍*
*╭──❍ 🎮 GAME-CMD 🎮 ❍* 
*├⬡ .ɴᴜᴍʙᴇʀɢᴀᴍᴇ*
*├⬡ .ʀᴏʟʟ🎲*
*├⬡ .ᴄᴏɪɴꜰʟɪᴘ🪙*
*├⬡ .pick*
*┕──────────────────❍*
*╭──❍ 🧠 AI-CMD 🧠 ❍* 
*├⬡ .ɢᴘᴛ*
*├⬡ .ᴀɪ*
*├⬡ .ᴀɴᴀʟʏsᴇ*
*├⬡ .ʟʟᴀᴍᴀ3*
*├⬡ .ɢᴏᴏɢʟᴇ*
*┕──────────────────❍*
*╭──❍ 👨‍💻 OWNER-CMD 👨‍💻 ❍* 
*├⬡ .ᴜᴘᴅᴀᴛᴇᴄᴍᴅ*
*├⬡ .ᴜᴘᴅᴀᴛᴇ*
*├⬡ .ᴍᴏᴅᴇ*
*├⬡ .ᴀʟʟᴠᴀʀ*
*├⬡ .sᴇᴛᴛɪɴɢs*
*├⬡ .ᴏᴡɴᴇʀ*
*├⬡ .sᴛᴀᴛᴜs-ʀᴇᴘʟʏ*
*├⬡ .ᴀᴜᴛᴏ-ʀᴇᴘʟʏ*
*├⬡ .ᴀɴᴛɪ-ʟɪɴᴋ-ᴋɪᴄᴋ*
*├⬡ .ᴀɴᴛɪ-ʙᴀᴅ*
*├⬡ .ᴀʟᴡᴀʏs-ᴏɴʟɪɴᴇ*
*├⬡ .ᴀᴜᴛᴏ-sᴛɪᴄᴋᴇʀ*
*├⬡ .ᴀᴜᴛᴏ-ᴛʏᴘɪɴɢ*
*├⬡ .ᴀᴜᴛᴏ-ʀᴇᴄᴏʀᴅɪɴɢ*
*├⬡ .sᴛᴀᴛᴜs-ʀᴇᴀᴄᴛ*
*├⬡ .ᴀɴᴛɪ-ᴄᴀʟʟ*
*├⬡ .ʀᴇᴀᴅ-ᴍᴇssᴀɢᴇ*
*├⬡ .ᴀɴᴛɪ-ʙᴀᴅ*
*├⬡ .ᴀᴜᴛᴏ-ᴛʏᴘɪɴɢ*
*├⬡ .ᴀɴᴛɪ-ʟɪɴᴋ*
*├⬡ .ᴀɴᴛɪᴅᴇʟᴇᴛᴇ*
*├⬡ .ʀᴇᴘᴏ*
*├⬡ .ᴋɪɴɢ*
*├⬡ .ɢᴇᴛᴘʀɪᴠᴀᴄʏ*
*├⬡ .ꜱʏꜱᴛᴇᴍ*
*├⬡ .ꜱᴛᴀᴛᴜꜱ*
*├⬡ .Aʙᴏᴜᴛ*
*├⬡ .ʙʟᴏᴄᴋ*
*├⬡ .ᴜɴʙʟᴏᴄᴋ*
*├⬡ .sʜᴜᴛᴅᴏᴡɴ*
*├⬡ .ᴄʟᴇᴀʀᴄʜᴀᴛs*
*├⬡ .sᴇᴛᴘᴘ*
*├⬡ .ʙʀᴏᴀᴅᴄᴀsᴛ*
*├⬡ .ᴊɪᴅ*
*├⬡ .ɢᴊɪᴅ*
*├⬡ .ᴘᴀɪʀ*
*├⬡ .sᴀᴠᴇ*
*├⬡ .ʀᴀɴᴋ*
*├⬡ .ᴄᴀʟᴄ*
*├⬡ .ʀᴇꜱᴛᴀʀᴛ*
*┕──────────────────❍*
‎*╭──❍ 🪀 PRIVACY-CMD🪀❍* 
‎*├⬡ .sᴇᴛᴘᴘᴀʟʟ*
‎*├⬡ .ɢᴇᴛʙɪᴏ*
‎*├⬡ .ʙʟᴏᴄᴋʟɪsᴛ*
‎*├⬡ .ᴜᴘᴅᴀᴛᴇʙɪᴏ*
‎*├⬡ .sᴇᴛᴍʏɴᴀᴍᴇ*
‎*├⬡ .sᴇᴛᴏɴʟɪɴᴇ*
‎*├⬡ .ɢʀᴏᴜᴘsᴘʀɪᴠᴀᴄʏ ɴᴏɴᴇ*
‎*├⬡ .ɢʀᴏᴜᴘsᴘʀɪᴠᴀᴄʏ ᴀʟʟ*
‎*├⬡ .ɢʀᴏᴜᴘsᴘʀɪᴠᴀᴄʏ ᴄᴏɴᴛᴀᴄᴛs*
‎*├⬡ .ɢᴇᴛᴘʀɪᴠᴀᴄʏ*
‎*├⬡ .ᴅɪsᴀᴘᴘᴇᴀʀ ᴏɴ*
‎*├⬡ .ᴅɪsᴀᴘᴘᴇᴀʀ ᴏғғ*
‎*├⬡ .ᴅɪsᴀᴘᴘᴇᴀʀ 7ᴅ 24ʜ 90ᴅ*
‎*├⬡ .sᴇɴᴅᴅᴍ*
‎*┕──────────────────❍*
*╭──❍ 👥 GROUP-CMD 👥 ❍* 
*├⬡ .ʀᴇᴍᴏᴠᴇ*
*├⬡ .ᴅᴇʟᴇᴛᴇ*
*├⬡ .ᴀᴅᴅ*
*├⬡ .ᴋɪᴄᴋ*
*├⬡ .ᴋɪᴄᴋᴀʟʟ*
*├⬡ .sᴇᴛɢᴏᴏᴅʙʏᴇ*
*├⬡ .sᴇᴛᴡᴇʟᴄᴏᴍᴇ*
*├⬡ .ᴘʀᴏᴍᴏᴛᴇ*
*├⬡ .ᴅᴇᴍᴏᴛᴇ*
*├⬡ .ᴛᴀɢᴀʟʟ*
*├⬡ .ɢᴇᴛᴘɪᴄ*
*├⬡ .ɪɴᴠɪᴛᴇ*
*├⬡ .ʀᴇᴠᴏᴋᴇ*
*├⬡ .ᴊᴏɪɴʀᴇǫᴜᴇsᴛs*
*├⬡ .ᴀʟʟʀᴇǫ*
*├⬡ .ᴍᴜᴛᴇ*
*├⬡ .ᴅᴇʟ*
*├⬡ .ᴜɴᴍᴜᴛᴇ*
*├⬡ .ʟᴏᴄᴋɢᴄ*
*├⬡ .ᴜɴʟᴏᴄᴋɢᴄ*
*├⬡ .ʟᴇᴀᴠᴇ*
*├⬡ .ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ*
*├⬡ .ᴜᴘᴅᴀᴛᴇɢᴅᴇsᴄ*
*├⬡ .ᴊᴏɪɴ*
*├⬡ .ʜɪᴅᴇᴛᴀɢ*
*├⬡ .ɢɪɴғᴏ*
*┕──────────────────❍*
*╭──❍ 📃 INFO-CMD 📃 ❍* 
*├⬡ .ᴀʙᴏᴜᴛ*
*├⬡ .ᴀʟɪᴠᴇ*
*├⬡ .ʙᴏᴛɪɴꜰᴏ*
*├⬡ .ꜱᴛᴀᴛᴜꜱ*
*├⬡ .ɢɪɴғᴏ*
*├⬡ .ᴘɪɴɢ*
*├⬡ .ᴘɪɴɢ2*
*├⬡ .ꜱʏꜱᴛᴇᴍ*
*┕──────────────────❍*
*╭──❍ 🤖 BOT-CMD 🤖 ❍* 
*├⬡ .ᴠᴇʀsɪᴏɴ*
*├⬡ .ʀᴇᴘᴏ*
*├⬡ .ᴍᴇɴᴜ*
*├⬡ .ᴍᴇɴᴜ2*
*├⬡ .ᴍᴇɴᴜ3*
*├⬡ .ʟᴏɢᴏᴍᴇɴᴜ*
*┕──────────────────❍*
*╭─❍ 🎡CONVERTER-CMD🎡❍*  
*├⬡ .sᴛɪᴄᴋᴇʀ*
*├⬡ .ᴛʀᴛ*
*├⬡ .ᴛᴏɪᴍᴀɢᴇ*
*├⬡ .ᴛᴛs*
*├⬡ .ꜰᴀɴᴄʏ*
*├⬡ .ᴜʀʟ*
*├⬡ .Aɢᴇ*
*├⬡ .ᴛɢs*
*├⬡ .ss*
*├⬡ .ʟᴏɢᴏ*
*├⬡ .ɪᴍɢ*
*├⬡ .ᴘʜᴏᴛᴏ*
*├⬡ .ᴄᴏɴᴠᴇʀᴛ*
*├⬡ .ᴛɪɴʏ*
*┕──────────────────❍*
*╭──❍ ⛱️ RANDOM-CMD ⛱️ ❍*
*├⬡ .ᴅᴏɢ*
*├⬡ .ᴄᴀᴛ*
*├⬡ .ᴀɴɪᴍᴇ*
*├⬡ .ᴄᴏᴜᴘʟᴇᴘᴘ*
*├⬡ .ꜰɪɴᴅɴᴀᴍᴇ*
*├⬡ .ʀᴀɴᴅᴏᴍᴀɴɪᴍᴇ*
*├⬡ .ᴀɴɪᴍᴇɢɪʀʟ*
*├⬡ .ᴀɴɪᴍᴇɢɪʀʟ1*
*├⬡ .ᴀɴɪᴍᴇɢɪʀʟ2*
*├⬡ .ᴀɴɪᴍᴇɢɪʀʟ3*
*├⬡ .ᴀɴɪᴍᴇɢɪʀʟ4*
*├⬡ .ᴀɴɪᴍᴇɢɪʀʟ5*
*├⬡ .ᴘɪᴄᴋᴜᴘʟɪɴᴇ*
*┕───────────────────❍*
*╭──❍ 🌐 OTHER-CMD 🌐 ❍* 
*├⬡ .ᴛʀᴛ*
*├⬡ .ᴊᴏᴋᴇ*
*├⬡ .ꜰᴀᴄᴛ*
*├⬡ .ɢɪᴛʜᴜʙ*
*├⬡ .ɢᴘᴀꜱꜱ*
*├⬡ .ʜᴀᴄᴋ*
*├⬡ .ǫᴜᴏᴛᴇ*
*├⬡ .ǫʀ*
*├⬡ .ꜱʀᴇᴘᴏ*
*├⬡ .sʏsᴛᴇᴍ*
*├⬡ .ʀᴀɴᴋ*
*├⬡ .ᴛɪᴍᴇᴢᴏɴᴇ*
*├⬡ .ᴅᴇꜰɪɴᴇ*
*├⬡ .ᴅᴀɪʟʏꜰᴀᴄᴛ*
*├⬡ .ᴍɪɴᴜᴛᴏʀ*
*┕──────────────────❍*
> *POWERED BY RAHUL-MASTER*`

await conn.sendMessage(from,{image:{url: config.ALIVE_IMG},caption:madeMenu,
                             contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363318387454868@newsletter',
      newsletterName: 'RAHUL-AI-V3 𝚩❍𝐓',
      serverMessageId: 999
    }
  }
}, { quoted: mek });
            // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/r9x8ga.mp4' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
