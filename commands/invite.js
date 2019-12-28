const discord = require("discord.js");

exports.run = async (bot, message, args, level) => {
    var botIconss = bot.user.displayAvatarURL;
    var inviteEmbed = new discord.RichEmbed()
        .setDescription("Bot invite links:")
        .setColor(0x00ff3b)
        .setThumbnail(botIconss)
        .addField("Full permissions:", "[Invite link](https://discordapp.com/oauth2/authorize?client_id=645664277570781241&scope=bot&permissions=8)")
        .addField("Needed permissions (best choice):", "[Invite link](https://discordapp.com/oauth2/authorize?client_id=645664277570781241&scope=bot&permissions=268446742)")
        .addField("Basic permissions (+ manage messages):", "[Invite link](https://discordapp.com/oauth2/authorize?client_id=645664277570781241&scope=bot&permissions=11264)")
        .addField("Support server:", "[Support link](https://discord.gg/ewFzkNH)")
    {
     message.delete(500)
     message.author.send(inviteEmbed).catch(error => message.reply(`Sorry ${message.author} I can't send an invite because: ${error}`));
     message.reply("I send the invite link in dm.").then(message => {message.delete(10000)})
    };
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "invite",
    category: "Miscelaneous",
    description: `Invite DarkBot`,
    usage: "invite"
};