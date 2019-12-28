const discord = require("discord.js");
module.exports = async (bot, guildMemberAdd) => {
    bot.on('guildMemberAdd', member => {
        var channel = member.guild.channels.get("604442606537015327")
        var icon = member.displayAvatarURL;
    var botEmbed = new discord.RichEmbed()
    .setDescription(`Welcome New Survivor`)
    .setColor(0x0000000)
    .setImage("https://66.media.tumblr.com/3fb87b0fa37048304542fc8785bd4b97/64a5bceb89f2f9c5-80/s1280x1920/d9b85d78be10c190016b3a6db05af5def768a3b7.gif")
    .setThumbnail(icon)
    .setFooter(`You are the ${channel.guild.memberCount}th member`)
    channel.send(`Hey ${member}, Welcome to ${member.guild.name} where you can talk about sao series :AsunaYay: don't forget to check the <#604441187071557705> for server rules and check <#618867111824982031> to see and know how to role yourself!`)
    channel.send(botEmbed)
    });
}