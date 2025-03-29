//---------------------------------------------
//           EMPIRE-MD  
//---------------------------------------------
//  @project_name : EMPIRE-MD  
//  @author       : efeurhobobullish
//  ⚠️ DO NOT MODIFY THIS FILE ⚠️  
//---------------------------------------------
const config = require('../config');
const { cmd, commands } = require('../command');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, saveConfig} = require('../Lib/functions');
const fs = require('fs');
const { monospace } = require('../Lib/monospace');
const axios = require('axios');
const { exec } = require('child_process'); 


cmd({
    pattern: "mode",
    desc: "Set Bot Mode",
    category: "misc",
    filename: __filename
}, async (conn, mek, m, { from, q, body, reply, isOwner }) => {
      if (!isOwner) return reply("*Owner Only Command*");

const image = "https://files.catbox.moe/gvg6ww.jpg";

    const infoMess = {
            image: { url: image },
            caption: `> *${global.botname} 𝐌𝐎𝐃𝐄 𝐒𝐄𝐓𝐓𝐈𝐍𝐆𝐒*  
Reply With:
*1.* To Enable Public Mode
*2.* To Enable Private Mode
*3.* To Enable Inbox Mode
*4.* To Enable Group Mode
╭────────────────◆  
│ ${global.caption}
╰─────────────────◆`,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 5,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363337275149306@newsletter',
                    newsletterName: global.botname,
                    serverMessageId: 143
                }
            }
        };

        const messageSent = await conn.sendMessage(from, infoMess, { quoted: mek });
        const messageId = messageSent.key.id;
        conn.ev.on("messages.upsert", async (event) => {
            const messageData = event.messages[0];
            if (!messageData.message) return;
            const messageContent = messageData.message.conversation || messageData.message.extendedTextMessage?.text;
            const isReplyToDownloadPrompt = messageData.message.extendedTextMessage?.contextInfo?.stanzaId === messageId;

            if (isReplyToDownloadPrompt) {
                await m.react("⬇🔄");
                switch (messageContent) {
                    case "1": 
                        config.MODE = "public";
                        saveConfig();
                        return reply("Bot Mode Has Been Set to Public (All Chats).");
                        break;

                    case "2": 
                        config.MODE = "private";
                        saveConfig();
                        return reply("Bot Mode Has Been Set to Private.");
                        break;

                    case "3": 
                        config.MODE = "inbox";
                        saveConfig();
                        return reply("Bot Has Been Set to Work in Inbox(pm) Only.");
                        break;

                    case "4": 
                        config.MODE = "groups";
                        saveConfig();
                        return reply("Bot Has Been Set to work in Groups Only.");
                        break;

                    default:
                  await conn.sendMessage(from, { text: "Invalid option selected. Please reply with a valid number (1 or 2)." });
                }
            }
        }); 
      await m.react("✅");
});
//--------------------------------------------
//            INFO COMMANDS
//--------------------------------------------
cmd({
    pattern: "info",
    desc: "Displays important bot and owner information",
    category: "misc",
    filename: __filename,
  },
  async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isOwner, reply }) => {
    try {
      if (!isOwner) return reply("❏ This command can only be used by the bot owner.");

      const owner = "𝙴𝚖𝚙𝚒𝚛𝚎 𝚃𝚎𝚌𝚑";
      const repoLink = "https://github.com/efeurhobobullish/EMPIRE-MD";

      const uptime = runtime(process.uptime());

      const footer = "𝙴𝙼𝙿𝙸𝚁𝙴-𝙼𝙳";

      const finalMessage = `
╭────「  𝙱𝙾𝚃 𝙸𝙽𝙵𝙾 」────◆  
│ ∘ 𝙾𝚠𝚗𝚎𝚛: ${owner}  
│ ∘ 𝚁𝚎𝚙𝚘𝚜𝚒𝚝𝚘𝚛𝚢: ${repoLink}  
│ ∘ 𝙱𝚘𝚝 𝚄𝚙𝚝𝚒𝚖𝚎: ${uptime}  
╰────────────────────`;

      const imageUrl = "https://files.catbox.moe/z7c67w.jpg";

      await conn.sendMessage(
        from,
        { image: { url: imageUrl }, caption: finalMessage },
        { quoted: mek }
      );

    } catch (e) {
      return reply(`│ ∘ An error occurred while processing your request.\n\n│ ∘ _Error:_ ${e.message}`);
    }
  });
//--------------------------------------------
//            ALIVE COMMANDS
//--------------------------------------------
cmd({
    pattern: "alive",
    desc: "Check if the bot is online.",
    category: "misc",
    filename: __filename
}, async (conn, mek, m, { from, pushname, reply }) => {
    try {
        const uptime = runtime(process.uptime());

        const aliveMsg = `
╭────「  𝙴𝙼𝙿𝙸𝚁𝙴-𝙼𝙳 」────◆  
│ ∘ 𝙷𝙴𝙻𝙻𝙾 ${pushname}  
│────────────────────  
│ ∘ 𝚄𝙿𝚃𝙸𝙼𝙴:  
│ ∘ ${uptime}  
╰────────────────────`;

        await conn.sendMessage(
            from,
            { 
                image: { url: 'https://files.catbox.moe/r4decc.jpg' },
                caption: aliveMsg
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`│ ∘  An error occurred: ${e.message || e}`);
    }
});
//--------------------------------------------
//            PING COMMANDS
//--------------------------------------------
cmd({
    pattern: "ping",
    react: "♻️",
    alias: ["speed"],
    desc: "Check bot's ping",
    category: "misc",
    use: '.ping',
    filename: __filename
}, async (conn, mek, m, { from, quoted, pushname, reply }) => {
    try {
        const startTime = Date.now();
        const message = await conn.sendMessage(from, { text: '*_Pinging..._*' });
        const endTime = Date.now();
        const ping = endTime - startTime;

        await conn.sendMessage(from, {
            text: `𝑃𝑂𝑁𝐺!${ping}ᴍꜱ`
        }, { quoted: message });
    } catch (e) {
        console.error(e);
        reply(`${e}`);
    }
});
//--------------------------------------------
//            REPO COMMANDS
//--------------------------------------------
cmd({
    pattern: "repo",
    category: "misc",
    react: "📂",
    desc: "Fetch repository details.",
    filename: __filename,
}, async (conn, mek, m, { from, reply }) => {
    try {
        const githubRepoURL = 'https://github.com/efeurhobobullish/EMPIRE-MD';
        const regexMatch = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);

        if (!regexMatch) {
            return reply("│ ∘ Invalid GitHub URL format.");
        }

        const [, username, repoName] = regexMatch;
        const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`);

        if (response.status !== 200) {
            return reply("│ ∘  Unable to fetch repository information.");
        }

        const repoData = response.data;
        const description = repoData.description || "No description available";

        const formattedInfo = `
╭────「  𝚁𝙴𝙿𝙾 」────◆  
│ ∘ 𝚁𝚎𝚙𝚘𝚜𝚒𝚝𝚘𝚛𝚢 𝙽𝚊𝚖𝚎: ${repoData.name}  
│ ∘ 𝙳𝚎𝚜𝚌𝚛𝚒𝚙𝚝𝚒𝚘𝚗: ${description}  
│ ∘ 𝙾𝚠𝚗𝚎𝚛: ${repoData.owner.login}  
│ ∘ 𝚂𝚝𝚊𝚛𝚜: ${repoData.stargazers_count}  
│ ∘ 𝙵𝚘𝚛𝚔𝚜: ${repoData.forks_count}  
│ ∘ 𝚄𝚁𝙻: ${repoData.html_url}  
│ ∘ 𝚂𝚎𝚜𝚜𝚒𝚘𝚗: https://empire-md-paircode-erqo.onrender.com
╰────────────────────`;

        await conn.sendMessage(from, { text: formattedInfo }, { quoted: mek });

    } catch (error) {
        reply("│ ∘ An error occurred while fetching repository information.");
    }
});
//--------------------------------------------
//            REPORT COMMANDS
//--------------------------------------------
cmd({
    pattern: "requestbug",
    alias: ["report"],
    category: "misc",
    react: "🤕",
    desc: "Allows users to report a bug with a description.",
    filename: __filename,
}, async (conn, mek, m, { from, body, sender, pushname }) => {
    try {
        const bugDescription = body.split(" ").slice(1).join(" ");

        if (!bugDescription) {
            return await conn.sendMessage(from, { text: "❏ Example: .requestbug This command is not working." }, { quoted: mek });
        }

        const devsNumber = global.devs;

        const requestMessage = `
╭────「 𝙱𝚄𝙶 𝚁𝙴𝙿𝙾𝚁𝚃 」────◆  
│ ∘ 𝙵𝚛𝚘𝚖: @${sender.split('@')[0]}  
│ ∘ 𝙽𝚊𝚖𝚎: ${pushname || "Unknown"}  
│───────────────────────  
│ ∘ 𝚁𝚎𝚙𝚘𝚛𝚝:  
│ ∘  ${bugDescription}  
╰────────────────────
        `;

        await conn.sendMessage(`${devsNumber}@s.whatsapp.net`, { text: requestMessage });
        await conn.sendMessage(from, { text: "❏ Your bug report has been sent to the developers." }, { quoted: mek });

    } catch (e) {
        console.log(e);
        await conn.sendMessage(from, { text: "❏ An error occurred while submitting your bug report. Please try again later." }, { quoted: mek });
    }
});
//--------------------------------------------
//            UPTIME COMMANDS
//--------------------------------------------
cmd({
    pattern: "uptime",
    desc: "Check bot's uptime.",
    category: "misc",
    filename: __filename
}, async (conn, mek, m, { from, pushname, reply }) => {
    try {
        const uptime = runtime(process.uptime());
        const uptimeMessage = `𝚄𝚙𝚝𝚒𝚖𝚎 𝚘𝚏 𝙴𝙼𝙿𝙸𝚁𝙴-𝙼𝙳: ${monospace(uptime)}`;

        await conn.sendMessage(from, { text: uptimeMessage }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`An error occurred: ${e.message || e}`);
    }
});
