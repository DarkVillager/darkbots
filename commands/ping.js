const discord = require("discord.js");

exports.run = async (bot, message, args, level) => {
    message.channel.send('Pong!').then(sentMessage => sentMessage.edit('Pong! The bot latencty is: `' + `${Date.now() - message.createdTimestamp}` + ' ms`'));
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "ping",
    category: "Miscelaneous",
    description: `Krijg de ping`,
    usage: "ping"
};