const discord = require("discord.js");
exports.run = async (bot, message, args, level) => {
    if (!args.length) {
        message.reply(`You didn't provide an argument.
        Please provide this argument: **rank**`)
    } 
        else if (args[0] === 'rank') {
            let user;
            if (message.mentions.users.first()) {
                user = message.mentions.users.first();
            } else {
                user = message.author;
            }
            message.channel.send(`Your permission level is **${level} ${bot.config.permLevels.find(l => l.level === level).name}**`)
        } else {
            message.reply('`' + args[0] + '` ' + `is not a valid argument.
            Please provide this argument: **rank**`)
            // message.reply(`**${args[0]} isn't a valid argument.
            // Please provide one of these arguments: **list** or **rank**`)
        }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "Helper"
};

exports.help = {
    name: "staff",
    category: "Bot Staff",
    description: "A command to show the serverlist & your staff rank in db.",
    usage: "staff rank"
};