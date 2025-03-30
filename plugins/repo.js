const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "📡",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*
          
📍𝖱𝖾𝗉𝗈 𝖫𝗂𝗇𝗄 ❤️‍🔥👇

👨‍💻◦ https://github.com/rahulmaster143/RAHUL-AI-V3 

📍𝖯𝗅𝖾𝖺𝗌𝖾 𝖲𝗎𝖻𝗌𝖼𝗋𝗂𝖻𝖾 𝖬𝗒 𝖸𝗈𝗎𝗍𝗎𝖻𝖾 𝖢𝗁𝖺𝗇𝗇𝖾𝗅 👇

👨‍💻◦ https://youtube.com/@rahulhiran4733?si=EdrJlycGO-JGzds5 

📍𝖯𝗅𝖾𝖺𝗌𝖾 Add 𝖬𝗒 𝖶𝗁𝖺𝗍𝗌𝖺𝗉𝗉 Group 👇

👨‍💻◦ https://chat.whatsapp.com/CQCsQvuJwdE4liQr6Ec0UR

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ RAHUL-MASTER*
`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/i79zfg.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
