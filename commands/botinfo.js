const discord = require("discord.js");

exports.run = async(bot, message, args, level) =>{
    var botIcon = bot.user.displayAvatarURL;

    var botEmbed = new discord.RichEmbed()
        .setDescription("Dark Bot info:")
        .setColor(0x00ff3b)
        .setThumbnail(botIcon)
        .addField("Name:", bot.user.username, true)
        .addField("Version:", `${bot.config.version}`, true)
        .addField("Created on:", bot.user.createdAt);

    message.channel.send(botEmbed);
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "botinfo",
    category: "Miscelaneous",
    description: `Info over de bot`,
    usage: "botinfo"
};