const discord = require("discord.js");

exports.run = async (bot, message, args, level) => {

    // const settings = message.settings = bot.getSettings(message.guild.id);
    // message.reply(`Dit commando is tijdelijk in onderhoud, voor andere commands gebruik ** ${settings.prefix}help **`);
    let user;
    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
        // if (user = user.bot) return message.channel.send(`Can't do. ` + `<@` + `${message.mentions.users.first().id}` + `> ` + `is too smart.`);
    } else {
        user = message.author;
    }
    if(user.bot) {
        const member = message.guild.member(user)

        var botIconss = user.displayAvatarURL;
        var botEmbed = new discord.RichEmbed()
        .setDescription(`${user.username}#${user.discriminator}`)
        .setColor(0x00ff3b)
        .setThumbnail(botIconss)
        .addField(`Joined ** ${message.guild.name} ** on:`, member.joinedAt, true)
        .addField(`Account creation date:`, `${user.createdAt !== null ? `${user.createdAt}` : '**Error**'}`, true)
        .addField(`Nickname:`, `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
        .addField(`Id:`, `${member.id !== null ? `${member.id}` : '**Error**'}`, true)
        .addField(`Banable:`, `${member.bannable !== null ? `${member.bannable}` : 'None'}`, true)
        .addField(`Last send message:`, `${member.lastMessage !== null ? `${member.lastMessage}` : 'None'}`, true)
        .addField(`Roles:`, member.roles.map(roles => `${roles.name}`).join(`, `), true)
        return  message.channel.send(botEmbed).catch(error => message.reply(`Sorry ${message.author} I can't send info because of: ${error}`))
     } else {
        const member = message.guild.member(user)

        var botIconss = user.displayAvatarURL;
        var botEmbed = new discord.RichEmbed()
        .setDescription(`${user.username}#${user.discriminator}`)
        .setColor(0x00ff3b)
        .setThumbnail(botIconss)
        .addField(`Joined ** ${message.guild.name} ** on:`, member.joinedAt, true)
        .addField(`Account creation date:`, `${user.createdAt !== null ? `${user.createdAt}` : '**Error**'}`, true)
        .addField(`Nickname:`, `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
        .addField(`Id:`, `${member.id !== null ? `${member.id}` : '**Error**'}`, true)
        .addField(`Banable:`, `${member.bannable !== null ? `${member.bannable}` : 'None'}`, true)
        .addField(`Last send message:`, `${member.lastMessage !== null ? `${member.lastMessage}` : 'None'}`, true)
        .addField(`Roles:`, member.roles.map(roles => `${roles.name}`).join(`, `), true)
        return  message.channel.send(botEmbed).catch(error => message.reply(`Sorry ${message.author} I can't send info because: ${error}`))
    }
    
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "info",
    category: "Maintenance",
    description: `Krijg een begroeting`,
    usage: "info <@user>"
};