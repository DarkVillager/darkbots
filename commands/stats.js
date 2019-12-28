const discord = require("discord.js");

exports.run = async (bot, message, args, level) => {
        var botsicon = bot.user.displayAvatarURL;
        function duration(ms) {
            let day, hour, minute, seconds;
            seconds = Math.floor(ms / 1000);
            minute = Math.floor(seconds / 60);
            seconds = seconds % 60;
            hour = Math.floor(minute / 60);
            minute = minute % 60;
            day = Math.floor(hour / 24);
            hour = hour % 24;
            return `${day} days, ${hour} hours, ${minute} minutes, ${seconds} seconds`
        }
        var serverEmbed = new discord.RichEmbed()
            .setDescription("Stats")
            .setColor(0x00ff3b)
            .setThumbnail(botsicon)
            .addField("This server", message.guild.name)
            .addField("Total servers:", `${bot.guilds.size}`)
            .addField("Total members:", `${bot.users.size}`)
            // .addField("Aantal online members:", `${bot.users.presence.status}`)
            .addField("Total channels:", `${bot.channels.size}`)
            .addField("Uptime", `${duration(bot.uptime)}`);
 
        return message.channel.send(serverEmbed);
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "stats",
    category: "Miscelaneous",
    description: "Krijg botstats",
    usage: "stats"
};