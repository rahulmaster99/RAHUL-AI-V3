//---------------------------------------------
//           EMPIRE-MD  
//---------------------------------------------
//  @project_name : EMPIRE-MD  
//  @author       : efeurhobobullish
//  ⚠️ DO NOT MODIFY THIS FILE ⚠️  
//---------------------------------------------
const axios = require('axios');
const config = require('../config');
const { cmd, commands } = require("../command");
const prefix = config.PREFIX;

//--------------------------------------------
// FOX_GIRL ANIME COMMANDS
//--------------------------------------------
cmd({
  pattern: "foxgirl",
  category: "anime",
  desc: "Sends image of Fox Girl in current chat.",
  filename: __filename
}, async (conn, mek, m, { from, quoted, reply }) => {
  try {
    const response = await axios.get("https://nekos.life/api/v2/img/fox_girl");
    if (response.data && response.data.url) {
      const imageMessage = {
        image: { url: response.data.url }
      };
      await conn.sendMessage(from, imageMessage, { quoted: mek });
    } else {
      reply("Sorry, I couldn't fetch a Fox Girl image. Please try again later.");
    }
  } catch (error) {
    return reply(`*An error occurred while processing your request.*\n\n_Error:_ ${error.message}`);
  }
});
//--------------------------------------------
// LOLI ANIME COMMANDS
//--------------------------------------------
cmd({
  pattern: "loli",
  desc: "Fetch a random anime girl image.",
  category: "anime",
  filename: __filename
}, async (conn, mek, m, { from, quoted, reply }) => {
  try {
    const response = await axios.get("https://waifu.pics/api/sfw/shinobu");
    if (response.data && response.data.url) {
      const imageMessage = {
        image: { url: response.data.url }
      };
      await conn.sendMessage(from, imageMessage, { quoted: mek });
    } else {
      reply("Sorry, I couldn't fetch an image. Please try again later.");
    }
  } catch (error) {
    console.error(error);
    reply("An error occurred while fetching the image.");
  }
});
//--------------------------------------------
// NEKO ANIME COMMANDS
//--------------------------------------------
cmd({
  pattern: "neko",
  desc: "Fetch a random neko anime image.",
  category: "anime",
  filename: __filename
}, async (conn, mek, m, { from, quoted, reply }) => {
  try {
    const response = await axios.get("https://waifu.pics/api/sfw/neko");
    if (response.data && response.data.url) {
      const imageMessage = {
        image: { url: response.data.url }
      };
      await conn.sendMessage(from, imageMessage, { quoted: mek });
    } else {
      reply("Sorry, I couldn't fetch a Neko image. Please try again later.");
    }
  } catch (error) {
    console.error(error);
    reply("An error occurred while fetching the image.");
  }
});
