const discord = require("discord.js");
exports.run = async (bot, message, args, level) => {
try {
    await message.channel.send(`The bot is getting restarted. This can take 5 minutes max.`)
    process.exit(1)

    

} catch(e) {
    message.channel.send(`Error: ${e.message}`)
}


}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "Bot Owner"
};

exports.help = {
    name: "reboot",
    category: "Owner",
    description: "Restart the bot.",
    usage: "reboot "
};