const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "nW5ziTQa#sTqQXax5OKHhqj_Zy1lPJuJ7vFRomSn9oDz5ZxtLJgI",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/7721cf222f9790f3fcd1b.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "🤖🔰 Hi Panda-MD Is Online Now 💻\n*💻 Owner* - Hashan\n\n*💻 මගෙ නම්බරෙ 🫰💀* -94782543893",
SUDO_NB: process.env.SUDO_NB || "94782543893",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "private",
AUTO_VOICE:"true"
};

