const fs = require("fs");
const chalk = require("chalk");

/*
 * Create By Naze
 * Follow https://github.com/nazedev
 * Whatsapp : https://whatsapp.com/channel/0029VaWOkNm7DAWtkvkJBK43
 */

//~~~~~~~~~~~~< GLOBAL SETTINGS >~~~~~~~~~~~~\\

global.owner = ["6282138458638", "6282325781726", "6282225907841"]; //['628','628'] 2 owner
global.packname = "Fox";
global.author = "Razael";
global.botname = "Fox Bot";
global.listprefix = ["."];
global.listv = [
    "•",
    "●",
    "■",
    "✿",
    "▲",
    "➩",
    "➢",
    "➣",
    "➤",
    "✦",
    "✧",
    "△",
    "❀",
    "○",
    "□",
    "♤",
    "♡",
    "◇",
    "♧",
    "々",
    "〆"
];
global.tempatDB = "database.json";
global.pairing_code = true;
global.number_bot = "6282325781726"; // Kalo pake panel bisa masukin nomer di sini, jika belum ambil session. Format : '628xx'

global.fake = {
    anonim: "https://telegra.ph/file/95670d63378f7f4210f03.png",
    thumbnailUrl:
        "https://images.unsplash.com/vector-1738903339967-f041ef0dba08?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    thumbnail: fs.readFileSync("./src/media/naze.png"),
    docs: fs.readFileSync("./src/media/fake.pdf"),
    listfakedocs: [
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/pdf"
    ]
};

global.my = {
    yt: "https://youtube.com/",
    gh: "https://github.com/razael-svg",
    gc: "https://chat.whatsapp.com/abcd",
    ch: "0@newsletter"
};

global.limit = {
    free: 20,
    premium: 999,
    vip: 9999
};

global.uang = {
    free: 10000,
    premium: 1000000,
    vip: 10000000
};

global.mess = {
    key0: "Apikey mu telah habis silahkan kunjungi\nhttps://my.hitori.pw",
    owner: "Fitur Khusus Owner!",
    admin: "Fitur Khusus Admin!",
    botAdmin: "Bot Bukan Admin!",
    group: "Gunakan Di Group!",
    private: "Gunakan Di Privat Chat!",
    limit: "Limit Anda Telah Habis!",
    prem: "Khusus User Premium!",
    wait: "Loading...",
    error: "Error!",
    done: "Done"
};

global.APIs = {
    hitori: "https://my.hitori.pw/api"
};
global.APIKeys = {
    "https://my.hitori.pw/api": "htrkey-awokawok"
};

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Update ${__filename}`));
    delete require.cache[file];
    require(file);
});
