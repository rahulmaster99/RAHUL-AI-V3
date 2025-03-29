//---------------------------------------------
//           EMPIRE-MD  
//---------------------------------------------
//  @project_name : EMPIRE-MD  
//  @author       : efeurhobo  
//  ⚠️ DO NOT MODIFY THIS FILE ⚠️  
//---------------------------------------------
const config = require('../config');
const { cmd, commands } = require('../command');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, sleep, fetchJson } = require('../Lib/functions');
//--------------------------------------------
// BLACKBOX COMMANDS
//--------------------------------------------
cmd({
    pattern: "blackbox",
    desc: "AI chat using Blackbox AI",
    category: "ai",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) {
            return reply("Please provide a query for Blackbox AI.");
        }

        // Fetch the response from the Blackbox AI API
        let data = await fetchJson(`https://api.giftedtech.web.id/api/ai/blackbox?apikey=_0x5aff35,_0x1876stqr&q=${encodeURIComponent(q)}`);
        
        // Reply with the AI's response
        return reply(`${data.result}`);
    } catch (e) {
        console.log(e); // Log any error for debugging
        reply(`Error: ${e.message}`);
    }
});
//--------------------------------------------
// GEMINI COMMANDS
//--------------------------------------------
cmd({
    pattern: "gemini",
    desc: "AI chat from Gemini AI",
    category: "ai",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) {
            return reply("Hello! How can I assist you with Gemini AI today?");
        }

        let data = await fetchJson(`https://api.giftedtech.web.id/api/ai/geminiai?apikey=_0x5aff35,_0x1876stqr&q=${encodeURIComponent(q)}`);
        return reply(`${data.result}`);
    } catch (e) {
        console.log(e);
        reply(`Error: ${e.message}`);
    }
});
//--------------------------------------------
// GPT COMMANDS
//--------------------------------------------
cmd({
    pattern: "gpt",
    desc: "ai chat from chat gpt",
    category: "ai",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) {
            
            return reply("Hello! How can I assist you today?");
        }

        
        let data = await fetchJson(`https://api.giftedtech.web.id/api/ai/gpt?apikey=_0x5aff35,_0x1876stqr&q=${encodeURIComponent(q)}`);
        return reply(`${data.result}`);
    } catch (e) {
        console.log(e);
        reply(`Error: ${e.message}`);
    }
});
//--------------------------------------------
// GPT-4 COMMANDS
//--------------------------------------------
cmd({
    pattern: "gpt-4",
    desc: "ai chat from chat gpt-4",
    category: "ai",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) {
            
            return reply("Hello! How can I assist you today?");
        }

        
        let data = await fetchJson(`https://api.giftedtech.web.id/api/ai/gpt4?apikey=_0x5aff35,_0x1876stqr&q=${encodeURIComponent(q)}`);
        return reply(`${data.result}`);
    } catch (e) {
        console.log(e);
        reply(`Error: ${e.message}`);
    }
});
//--------------------------------------------
// LET-ME-GPT COMMANDS
//--------------------------------------------
cmd({
    pattern: "letmegpt",
    desc: "AI chat using LetMeGPT",
    category: "ai",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) {
            return reply("Please provide a query for LetMeGPT.");
        }

        // Fetch the response from the LetMeGPT API
        let data = await fetchJson(`https://api.giftedtech.web.id/api/ai/letmegpt?apikey=_0x5aff35,_0x1876stqr&query=${encodeURIComponent(q)}`);
        
        // Reply with the AI's response
        return reply(`${data.result}`);
    } catch (e) {
        console.log(e); // Log any error for debugging
        reply(`Error: ${e.message}`);
    }
});
//--------------------------------------------
// LIAMA COMMANDS
//--------------------------------------------
cmd({
    pattern: "liama",
    desc: "AI chat using Llama AI",
    category: "ai",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) {
            return reply("Please provide a query for Llama AI.");
        }

        // Fetch the response from the Llama AI API
        let data = await fetchJson(`https://api.giftedtech.web.id/api/ai/llamaai?apikey=_0x5aff35,_0x1876stqr&q=${encodeURIComponent(q)}`);
        
        console.log(data); // Log the entire response to inspect its structure
        
        // Check if the response has the expected structure
        if (data && data.result) {
            return reply(`${data.result}`);
        } else {
            return reply("Sorry, I couldn't get a response from Llama AI.");
        }
    } catch (e) {
        console.log(e); // Log any error for debugging
        reply(`Error: ${e.message}`);
    }
});
//--------------------------------------------
// IMAGINE COMMANDS
//--------------------------------------------
cmd({
  pattern: "imagine",
  react: '🎉',
  desc: "Generate an image using AI API.",
  category: "ai",
  filename: __filename
}, async (client, message, chat, { q: prompt, reply }) => {
  try {
    if (!prompt) {
      return reply("Please provide a prompt for the image.");
    }
    await reply("Generating Imagine...");
    const response = await fetchJson(`https://api.giftedtech.web.id/api/ai/fluximg?apikey=_0x5aff35,_0x1876stqr&prompt=${prompt}`);
    const imageUrl = response.result;
    await client.sendMessage(chat.chat, { image: { url: imageUrl } });
  } catch (error) {
    console.error(error);
    reply(`An error occurred: ${error.message}`);
  }
});
//--------------------------------------------
// FLUX-AI COMMANDS
//--------------------------------------------
cmd({
  pattern: "fluxai",
  alias: ["flux"],
  react: '🚀',
  desc: "Generate an image using AI.",
  category: "ai",
  filename: __filename
}, async (client, message, chat, { q: prompt, reply }) => {
  try {
    if (!prompt) {
      return reply("Please provide a prompt for the image.");
    }
    await reply("𝙴𝙼𝙿𝙸𝚁𝙴-𝙼𝙳 𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝚋𝚢 𝙴𝚖𝚙𝚒𝚛𝚎 𝚃𝚎𝚌𝚑");
    const response = await fetchJson(`https://api.giftedtech.web.id/api/ai/fluximg?apikey=_0x5aff35,_0x1876stqr&prompt=${prompt}`);
    const imageUrl = response.result;
    await client.sendMessage(chat.chat, { image: { url: imageUrl } });
  } catch (error) {
    console.error(error);
    reply(`An error occurred: ${error.message}`);
  }
});
