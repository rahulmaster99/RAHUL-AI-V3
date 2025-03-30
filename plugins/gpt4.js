const config = require('../config')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')

cmd({
    pattern: "gpt4",
    desc: "gpt4 info.",
    category: "ai",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let data = await fetchJson(`https://api.vihangayt.com/ai/gpt?q=${q}`)
return reply(`${data.data}`)
 }catch(e){
  console.log(e)
  reply(`${e}`)
}
})
