const {cmd , commands} = require('../command')

cmd({
    pattern: "kylie",
    desc: "wallpaper the bot",
    category: "main",
    react: "🎗️",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `❮❮ MY PANDA WALLPEPAR 👾💗 ❯❯`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/7721cf222f9790f3fcd1b.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/7721cf222f9790f3fcd1b.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/7721cf222f9790f3fcd1b.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/7721cf222f9790f3fcd1b.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
