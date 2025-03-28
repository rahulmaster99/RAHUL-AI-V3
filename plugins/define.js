
const { cmd } = require('../command');
const axios = require('axios');

cmd({
    pattern: "define2",
    category: "ai",
    desc: "Get the definition of a word from Urban Dictionary",
    use: "<word>",
    react: "📖",
    async handler(m, { text, conn }) {
        if (!text) return m.reply("What do you want to define?");

        try {
            const response = await axios.get(`http://api.urbandictionary.com/v0/define?term=${text}`);
            const definitions = response.data.list;
            
            if (!definitions.length) return m.reply(`No definition found for *${text}*`);

            const result = `
*📖 Word:* ${text}
*📌 Definition:* ${definitions[0].definition.replace(//g, "").replace(//g, "")}
*📝 Example:* ${definitions[0].example.replace(//g, "").replace(//g, "")}
            `;

            await conn.sendMessage(m.chat, { text: result }, { quoted: m });

        } catch (error) {
            console.error(error);
            return m.reply(`Error fetching definition for *${text}*`);
        }
    }
});
