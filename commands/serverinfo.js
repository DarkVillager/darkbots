const discord = require("discord.js");

exports.run = async (bot, message, args, level) => {
    
    var icon = message.guild.iconURL;


    var serverEmbed = new discord.RichEmbed()
        .setDescription("Server info:")
        .setColor(0x00ff3b)
        .setThumbnail(icon)
        .addField("Server name:", message.guild.name)
        .addField("Total members & bots:", message.guild.memberCount)
        .addField("Server is created by:", message.guild.owner)
        .addField("Server got created on:", message.guild.createdAt)
        .addField("You joined on:", message.member.joinedAt);

    return message.channel.send(serverEmbed);
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "serverinfo",
    category: "Miscelaneous",
    description: `Geef de server info`,
    usage: "serverinfo"
};