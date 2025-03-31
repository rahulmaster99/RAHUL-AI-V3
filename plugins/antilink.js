const { cmd } = require('../command')
const fs = require('fs');
const path = require('path');
const config = require('../config')

const linkPatterns = [
    /https?:\/\/(?:chat\.whatsapp\.com|wa\.me)\/\S+/gi,   // WhatsApp group or chat links
    /wa\.me\/\S+/gi,                                      // wa.me links without https
    /https?:\/\/(?:t\.me|telegram\.me)\/\S+/gi,           // Telegram links
    /https?:\/\/(?:www\.)?\.com\/\S+/gi,         // channel links
    /https?:\/\/(?:www\.)?twitter\.com\/\S+/gi,           // Twitter links
    /https?:\/\/(?:www\.)?linkedin\.com\/\S+/gi,          // LinkedIn links
    /https?:\/\/(?:whatsapp\.com|channel\.me)\/\S+/gi,          // Snapchat links
    /https?:\/\/(?:www\.)?reddit\.com\/\S+/gi,            // Reddit links
    /https?:\/\/(?:www\.)?discord\.com\/\S+/gi,           // Discord links
    /https?:\/\/(?:www\.)?twitch\.tv\/\S+/gi,             // Twitch links
    /https?:\/\/(?:www\.)?vimeo\.com\/\S+/gi,             // Vimeo links
    /https?:\/\/(?:www\.)?dailymotion\.com\/\S+/gi,       // Dailymotion links
    /https?:\/\/(?:www\.)?medium\.com\/\S+/gi             // Medium links
];

cmd({
  'on': "body"
}, async (conn, m, store, {
  from,
  body,
  sender,
  isGroup,
  isAdmins,
  isBotAdmins,
  reply
}) => {
  try {
    if (!isGroup || isAdmins || !isBotAdmins) {
      return;
    }

    const containsLink = linkPatterns.some(pattern => pattern.test(body));

    if (containsLink && config.ANTI_LINK_KICK === 'true') {
      await conn.sendMessage(from, { 'delete': m.key }, { 'quoted': m });
      await conn.sendMessage(from, {
        'text': `*📛 𝐋ιɴкѕ 𝐀ʀє 𝐍σт 𝐀ℓℓσωє∂ 𝐈ɴ*\n*𝐓нιѕ 𝐆ʀσυρ.@${sender.split('@')[0]}* \n*𝐇αѕ 𝐁єєи 𝐊ιᴄкє∂ 𝐒ᴜᴄᴄєss.🐍*`,
        'mentions': [sender]
      }, { 'quoted': m });

      await conn.groupParticipantsUpdate(from, [sender], "remove");
    }
  } catch (error) {
    console.error(error);
    reply("An error occurred while processing the message.");
  }
});
