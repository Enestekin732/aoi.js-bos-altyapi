const { Client, Intents } = require('discord.js');
const { AoiClient } = require('aoi.js');

// şimdi bota başlayalım :)

const bot = new AoiClient({
    mobile: true, //ben pek esemem ama siz bilirsiniz
    token: "", //botun tokeni [buraya Tıklayıp tokenini alabilirsin](https://discord.com/developers/applications)
    prefix: "", // botunuzun prefix girin birden çok prefix eklemek için örnek: [".", "!"] bu şekilde!
    fetchInvites: true // kalsin
})

//callbackler
bot.onMessage()
bot.onJoined()
bot.onLeave()

// komut yükleme eleme yoksa komut yükleyemez!

bot.loadCommands(`komutlar`)

//variableler
bot.variables({
    aktifmesajkanalId: "", // buraya Değiskenler sıralican!
})

//bot durum

bot.status({
    text: "wnerscode | gg/wnerscode",
    type: "PLAYING", // buraya ben oynuyor yaptım. siz değistirebilirsiniz.
    time: 12
});

// aktif olma mesajı (ben bu mesaj her bot kullanıyorum.)

bot.readyCommand({
    channel: "$getServerVar[aktifmesajkanalId]",
    code: `Aktif oldum.
    kaç sunucudamıyım: **$serverCount**
    kaç kullanıcıya sahibim: **$allMemberCount**
    pingim: **$ping**
    komut sayım: **$commandsCount**`
})