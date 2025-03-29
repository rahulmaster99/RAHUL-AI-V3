const config = require('../config');
const { cmd, commands } = require('../command');
const { sleep } = require('../Lib/functions');

// Shutdown command
cmd({
    pattern: "shutdown",
    desc: "Shutdown the bot",
    category: "tools",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const { exec } = require("child_process");
        reply("Shutting down...");
        await sleep(1500);
        exec("pm2 stop all"); // Command to stop the bot (shut down)
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// Restart command
cmd({
    pattern: "restart",
    desc: "Restart the bot",
    category: "tools",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const { exec } = require("child_process");
        reply("Restarting...");
        await sleep(1500);
        exec("pm2 restart all"); // Command to restart the bot
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
