const discord = require("discord.js");

exports.run = async(bot, message, args, level) =>{
    var botIconss = bot.user.displayAvatarURL;
    var inviteEmbed = new discord.RichEmbed()
        .setDescription("Support server")
        .setColor(0x00ff3b)
        .setThumbnail(botIconss)
        .addField("Support server invite:","[Invite](https://discord.gg/ewFzkNH)");
    {
     message.delete(500)
     message.author.send(inviteEmbed).catch(error => message.reply(`Sorry ${message.author} I can't send an invite because: ${error}`));
     message.reply("I send you the support link in dm.").then(message => {message.delete(10000)})
};
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "support",
    category: "- Help",
    description: `Krijg de support server link`,
    usage: "support "
};