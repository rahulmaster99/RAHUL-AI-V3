//---------------------------------------------------------------------------
//           RAHUL-AI-V3  
//---------------------------------------------------------------------------
//  @project_name : RAHUL-AI-V3  
//  @author       : efeurhobobullish
//  ⚠️ DO NOT MODIFY THIS FILE ⚠️  
//---------------------------------------------------------------------------
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

//═════[Don't Change Variables]════════\\

global.alive_img = "📞 𝙰𝚞𝚝𝚘 𝙲𝚊𝚕𝚕 𝚁𝚎𝚓𝚎𝚌𝚝 𝙼𝚘𝚍𝚎 𝙰𝚌𝚝𝚒𝚟𝚎.📵 𝙽𝚘 𝙲𝚊𝚕𝚕𝚜 𝙰𝚕𝚕𝚘𝚠𝚎𝚍!";
global.caption = "RAHUL-AI-V3 𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝚋𝚢 Rahul Master";
global.channelUrl = "";
global.botname = "RAHUL-AI-V3";
global.devs = "919356730236" // Developer Contact
global.devsname = "Rahul Master";
global.apikey = "_0x5aff35,_0x1876stqr";

module.exports = {
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
    ANTICALL: process.env.ANTICALL || "false",
    ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 Auto Call Reject Mode Active. 📵 No Calls Allowed!_*",
    ANTILINK: process.env.ANTILINK || "false",
    ANTIDELETE: process.env.ANTIDELETE || "true",
    ANTIDELETE_PM: process.env.ANTIDELETE_PM || "false",
    AUTO_LIKE_EMOJI: process.env.AUTO_LIKE_EMOJI || "💚",
    AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "false",
    AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
    AUTO_TYPING: process.env.AUTO_TYPING || "false",
    AUTO_VIEW_STATUS: process.env.AUTO_VIEW_STATUS || "false",
    MODE: process.env.MODE || "public",
    OWNER_NAME: process.env.OWNER_NAME || "Rahul Master",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "919356730236",
    PREFIX: process.env.PREFIX || ".",
    SESSION_ID: process.env.SESSION_ID || "zRJ2zQya#Ez8XGgRV_CD7Y6xCZnoc0pcEtlR6e_BIHbcydWQ0CfQ"
};
