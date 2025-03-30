const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "RAHUL-AI-MD~fUw1GTQT#ek_TUTma_R4Xgy1sfiD0qCP3dgpCAZpZAGBgnxuBd1E",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/bruryh.jpeg",
SUDO_NB: process.env.SUDO_NB || "919356730236",
MONGODB: process.env.MONGODB || "mongodb+srv://kulathungaasitha319:yjHB0DvFfStNfwPS@cluster0.3oijd.mongodb.net/",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE: "false"
};
