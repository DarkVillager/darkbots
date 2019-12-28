const discord = require("discord.js");

exports.run = async (bot, message, args, level) => {
    if (!args.length) {
        return message.channel.send(`Provide something to say, ${message.author}!`);
} else {
        let botmessage = args.join(" ")
        message.channel.send(botmessage);
    };

}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "say",
    category: "Fun",
    description: "Let the bot say something.",
    usage: `Say <text>`
};