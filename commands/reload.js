const discord = require("discord.js");
exports.run = async (bot, message, args, level) => {// eslint-disable-line no-unused-vars
    if (!args || args.length < 1) return message.channel.send("Must provide a command to reload. Derp.");

    let response = await bot.unloadCommand(args[0]);
    if (response) return message.channel.send(`Error Unloading: ${response}`);

    response = bot.loadCommand(args[0]);
    if (response) return message.channel.send(`Error Loading: ${response}`);

    message.channel.send(`The command \`${args[0]}\` has been reloaded`);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "Bot Owner"
};

exports.help = {
    name: "reload",
    category: "Owner",
    description: "Reloads a command that\"s been modified.",
    usage: "reload [command]"
};