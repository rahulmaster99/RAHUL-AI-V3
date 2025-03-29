//---------------------------------------------
//           EMPIRE-MD  
//---------------------------------------------
//  @project_name : EMPIRE-MD  
//  @author       : efeurhobo  
//  ⚠️ DO NOT MODIFY THIS FILE ⚠️  
//---------------------------------------------
const config = require('../config');
const { cmd, commands } = require('../command');
const { monospace } = require('../Lib/monospace');
const os = require('os'); // Import the os module
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, saveconfig } = require('../Lib/functions');

// Use global variables for dynamic content
const botname = global.botname || "EMPIRE-MD";
const prefix = config.PREFIX || ".";
const version = "1.0.0";
const mode = config.MODE || "private";
//--------------------------------------------
//            MENU COMMANDS
//--------------------------------------------
cmd({
    pattern: "menu",
    desc: "Get command list",
    category: "main",
    filename: __filename
}, async (conn, mek, m, { from, quoted, sender, pushname, reply }) => {
    try {
        // Time and Date
        const now = new Date();
        const timeZone = 'Africa/Lagos';
        const options = { timeZone, hour12: true };
        const time = now.toLocaleTimeString('en-US', options);
        const date = now.toLocaleDateString('en-US', options);
        const dayOfWeek = now.toLocaleDateString('en-US', { timeZone, weekday: 'long' });

        // System Info
        const uptime = runtime(process.uptime()); // Use runtime function to get uptime
        const totalCommands = commands.length;

        // Categorize commands dynamically
        const categorized = commands.reduce((menu, cmd) => {
            if (cmd.pattern && !cmd.dontAddCommandList) {
                if (!menu[cmd.category]) menu[cmd.category] = [];
                menu[cmd.category].push(cmd.pattern);
            }
            return menu;
        }, {});

        // Header
        const header = `\`\`\`
╭───「  ${monospace(botname)} 」─────◆  
│ ∘ 𝙾𝚠𝚗𝚎𝚛: ${monospace(pushname)}  
│ ∘ 𝙿𝚛𝚎𝚏𝚒𝚡: [ ${monospace(prefix)} ]  
│ ∘ 𝙲𝚘𝚖𝚖𝚊𝚗𝚍𝚜: ${monospace(totalCommands.toString())}  
│ ∘ 𝙼𝚘𝚍𝚎: ${monospace(mode)}  
│ ∘ 𝚄𝚙𝚝𝚒𝚖𝚎: ${monospace(uptime)}  
│ ∘ 𝙿𝚕𝚊𝚝𝚏𝚘𝚛𝚖: ${monospace(os.platform())}  
│ ∘ 𝙳𝚊𝚢: ${monospace(dayOfWeek)}  
│ ∘ 𝙳𝚊𝚝𝚎: ${monospace(date)}  
│ ∘ 𝚃𝚒𝚖𝚎: ${monospace(time)}  
│ ∘ 𝚅𝚎𝚛𝚜𝚒𝚘𝚗: ${monospace(version)}  
╰────────────────────\`\`\`\n`;

// Format categories
const formatCategory = (category, cmds) => {
    const title = `╭────「  ${monospace(category.toUpperCase())} 」────◆\n`;
    const body = cmds.map(cmd => `│ ∘  ${monospace(prefix + cmd)}`).join('\n');
    const footer = `╰──────────\n`;
    return `${title}${body}\n${footer}`;
};

        // Generate menu
        let menu = header;
        for (const [category, cmds] of Object.entries(categorized)) {
            menu += formatCategory(category, cmds) + '\n';
        }

        // Send menu
        await conn.sendMessage(from, {
            image: { url: 'https://files.catbox.moe/gvg6ww.jpg' }, 
            caption: menu.trim(),
        }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
