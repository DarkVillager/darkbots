const discord = require("discord.js");

exports.run = async(bot, message, args, level) =>{
    // if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry, je hebt hier niet de juiste permissies voor.");
    // message.delete();

    const fetched = await message.channel.fetchMessages({ limit: args[0] });

    message.channel.bulkDelete(fetched)
        .then(m => message.channel.send(`${fetched.size} messages deleted.`).then(async m => await m.delete([5000])))
        .catch(error => message.channel.send(`Error: ${error}`));
}
   exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "Moderator"
};

exports.help = {
    name: "clear",
    category: "Moderation",
    description: `Clear the given number of messages`,
    usage: "clear <Number of messages>"
};
