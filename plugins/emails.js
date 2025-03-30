const config = require('../config');
const { cmd, commands } = require('../command');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, sleep, fetchJson } = require('../lib/functions');


cmd({ 
    pattern: "tempmail", 
    desc: "Generate a temporary email",
    category: "emails",
   filename: __filename
 }, 
   async (conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
 try {
 const apiKey = "MepwBcqIM0jYN0okD"; 
const apiUrl = `https://api.nexoracle.com/misc/temp-mail-gen?apikey=${apiKey}`;
 const response = await fetchJson(apiUrl);

if (response.status !== 200) return reply("❌ Failed to generate temp mail!");

    global.tempmail = {
        email: response.result.email,
        email_id: response.result.email_id,
        expire_at: response.result.expire_at

    };

   return reply(`📩 *Temporary Email Created*\n\n📧 Email: ${global.tempmail.email}\n🆔 Email ID: ${global.tempmail.email_id}\n⏳ Expires At: ${global.tempmail.expire_at}`);
} catch (e) {
        console.error(e);
        reply(`❌ Error: ${e.message}`);
    }
});
cmd({ 
    pattern: "checkmail", 
    desc: "Check inbox of temp email",
    category: "emails",
    filename: __filename
}, async (conn, mek, m, { from, q, reply }) => { 
    try {
        if (!q) return reply("❌ Provide an email ID to check messages!");

        const apiKey = "MepwBcqIM0jYN0okD";
        const apiUrl = `https://api.nexoracle.com/misc/temp-mail-inbox?apikey=${apiKey}&id=${q}`;
        const response = await fetchJson(apiUrl);

        if (response.status !== 200) return reply("❌ Failed to check emails!");

        const emails = response.result?.[0] || [];
        if (!emails.length) return reply("📭 No new emails!");

        const msgHeader = `📬 *Inbox for Email ID:* ${q}\n\n`;
        let msgBody = emails.map((email, i) => 
            `📩 *Email ${i + 1}*\n📝 Subject: ${email.headerSubject}\n📅 Date: ${email.date || "Unknown"}\n📨 Sender: ${email.fromAddr}\n📄 Message: ${email.text?.slice(0, 500) || "No content"}\n🔗 [Download Email](${email.downloadUrl})\n\n`
        ).join('');

        await conn.sendMessage(from, msgHeader + msgBody, { quoted: mek });
    } catch (e) {
        console.error(e);
        reply(`❌ Error: ${e.message}`);
    }
});

cmd({
    pattern: "delmail",
    desc: "Delete stored temporary email",
    category: "emails",
    filename: __filename
}, 
async (conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try {
        if (!global.tempmail) return await conn.sendMessage(m.chat, { text: "❌ No temporary email found!" }, { quoted: mek });

        delete global.tempmail;
        await conn.sendMessage(m.chat, { text: "🗑️ Temporary email deleted!" }, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`❌ Error: ${e.message}`);
    }
});
