const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "💁‍♂️",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*

> *MY OWNER INFO* 

*⚡ᴏᴡɴᴇʀ ɴᴀᴍᴇ -: Hashan*
*⚡ɴᴜᴍʙᴇʀ* -: 94782543893*
*⚡මාව සේව් දාන්න💁‍♂️ -:* https://wa.me/qr/P6WADRJOKAFUK1*

*©🐼❤️‍🔥ッ*
`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/7721cf222f9790f3fcd1b.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
