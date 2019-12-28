const discord = require("discord.js");

exports.run = async(bot, message, args, level) =>{
if (!args.length) {
    return message.channel.send(`You didn't tag someone, ${message.author}!`);
} else {
     let first = message.author;
     let firsti = message.member.user.username;
     let second = message.mentions.users.first();
     let secondi = message.mentions.users.first().username;
     number = 25;
     imageNumber = Math.floor (Math.random() * (number)) + 1;
     let files = "./images/slap" + imageNumber + ".gif";
    message.channel.send (`***${secondi}***  you got slapped by ***${firsti}***`, {files: ["./images/slap/" + imageNumber + ".gif"]});

}

}
    exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "slap",
    category: "Fun",
    description: "Slap an person.",
    usage: `Slap <@user>`
};