const discord = require("discord.js");

exports.run = async(bot, message, args, level) =>{
    // check: (message) => config.sovjet.includes(message.guild.id)
    message.channel.send("Bring honor to papa Stalin! ☭", {files: ["./images/IMG_20190427_123910.jpg"]});
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "propaganda",
    category: "Miscelaneous",
    description: `propaganda`,
    usage: "propaganda"
};