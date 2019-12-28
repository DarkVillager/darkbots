const discord = require("discord.js");

exports.run = async (bot, message, args, level) => {
    let user;
    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
        // if (user = user.bot) return message.channel.send(`Can't do. ` + `<@` + `${message.mentions.users.first().id}` + `> ` + `is too smart.`);
    } else {
        user = message.author;
    }
    var avatarEmbed = new discord.RichEmbed()
        .setColor(0x00ff3b)
        .setImage(user.displayAvatarURL)    
        // .setDescription(`${user.username}#${user.discriminator}`)

    return message.channel.send(avatarEmbed);
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "avatar",
    category: "Maintenance",
    description: `Get the avatar of someone`,
    usage: "avatar <@user>"
};