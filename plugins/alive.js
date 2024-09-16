const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "💁‍♂️",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const voice = {
    alive: 'media/AUD-20240909-WA0003'
                    }
let des = `*💁‍♂️❣️ආයුබෝවන් ${pushname}*

*╔╭────────────╮╕*
*╭│I'm Alive Now👾  │─◎◎▷*
*╘╰────────────╯╜*
*│A PANDA-MD │Whatsapp Bot Based │Many │Services With A │RealTime* *Automated │Consversational* *││Experience, Enjoy💫.*
*| So,I Think This Bots Are Useful To You.📍*
*│*
*│Type .menu To Get Bot User*
*│Menu💫*
*╰───────────────◎◎▷*

*©සේව් දාගනිම්💁‍♂️❣️*`
await conn.sendMessage(from, { audio: { url: voice.alive }, mimetype: 'audio/mp4', ptt: true }, { quoted: mek })
return await conn.sendMessage(from,{image: {url: `https://telegra.ph/file/7721cf222f9790f3fcd1b.jpg`},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
