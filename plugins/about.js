const config = require('../config')

const {cmd , commands} = require('../command')



cmd({

    pattern: "about",

    desc: "To get the bot informations.",

    react: "ℹ️",

    category: "main",

    filename: __filename

},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{



let about = ` *👋🐼 ආයුබෝවන් ${pushname}*
                    
 𝐈 𝐀𝐌 Panda-𝐌𝐃 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓
 
𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐁𝐘 Hashan (Panda)..
           
*මාව සේව් දාගනිම් 💁‍♂️❣️*

*Panda bot 🐼❤️‍🔥ッ*`

return await conn.sendMessage(from,{image: {url:`https://i.ibb.co/THZ7HJX/IMG-20240913-WA0042.jpg`},caption:about},{quoted: mek})

}catch(e){

console.log(e)

reply(`${e}`)

}

})




