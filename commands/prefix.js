const discord = require("discord.js");
const fs = require("fs");

exports.run = async (bot, message, args, level) => {
   
 if (!bot.settings.has(message.guild.id)) bot.settings.set(message.guild.id, {});
 if (!args[0]) {
     message.channel.send(`You need to supply your new prefix!\nExample: \`${message.settings['prefix']}prefix <new prefix here>\``)
 } else {
     bot.settings.set(message.guild.id, args[0], 'prefix');
     message.channel.send(`Prefix set to \` ${args[0]} \``);
 }

}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "Admin"
};

exports.help = {
    name: "prefix",
    category: "Moderation",
    description: `Weergeef & verander de prefix`,
    usage: "prefix <Nieuwe prefix>"
};