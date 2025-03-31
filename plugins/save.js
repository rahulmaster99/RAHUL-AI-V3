



const axios = require('axios');
const config = require('../config');
const { cmd, commands } = require('../command');
const { downloadMediaMessage } = require('../lib/msg2');
const fs = require("fs");

cmd({
  pattern: "save",
  desc: "Save a status/photo/video and send it to your private chat (Owner only).",
  category: "utility",
  filename: __filename,
}, async (conn, mek, m, { isOwner, reply, quoted }) => {
  if (!isOwner) return reply("❌ You are not the owner!");

  try {
    if (!quoted) {
      return reply("❌ Please reply to a status, photo or video message to save it.");
    }
    
    let mime = (quoted.msg || quoted).mimetype || "";
    let mediaType = "";
    if (mime.startsWith("image")) {
      mediaType = "image";
    } else if (mime.startsWith("video")) {
      mediaType = "video";
    } else if (mime.startsWith("audio")) {
      mediaType = "audio";
    } else {
      return reply("❌ Unsupported media type. Please reply to a status, photo, or video message.");
    }
    
    const mediaBuffer = await quoted.download();
    if (!mediaBuffer) return reply("❌ Failed to download the media.");
    
    let messageOptions = {};
    if (mediaType === "image") {
      messageOptions = { image: mediaBuffer };
    } else if (mediaType === "video") {
      messageOptions = { video: mediaBuffer, mimetype: 'video/mp4' };
    } else if (mediaType === "audio") {
      messageOptions = { audio: mediaBuffer, mimetype: 'audio/mpeg' };
    }
    
    // Send the media directly to the owner's private chat (m.sender)
    await conn.sendMessage(m.sender, messageOptions);
    
  } catch (error) {
    console.error("Error in save command:", error);
    reply("❌ An error occurred while saving the media.");
  }
});