const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*🧚‍♂️ NARUTO MD Whatsapp Bot*

*| ᴏᴡɴᴇʀ ɴᴀᴍᴇ*: ᴅᴇꜱᴛɪɴʏ ᴛᴇᴄʜ
*| ɴᴜᴍʙᴇʀ*: 2349073081822
*| ʏᴏᴜᴛᴜʙᴇ*: https://www.youtube.com/@malvintech2 
*| ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ*: https://whatsapp.com/channel/0029Vazygae72WTmIGM72Q06

> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴇꜱᴛɪɴʏ ᴛᴇᴄʜ
`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/20y1gs.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
