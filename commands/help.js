const discord = require("discord.js");

const { RichEmbed } = require('discord.js')
exports.run = (bot, message, args, level) => {
        if (!args[0]) {
            // Filter all commands by which are available for the user's level, using the <Collection>.filter() method.
            const myCommands = message.guild ? bot.commands.filter(cmd => bot.levelCache[cmd.conf.permLevel] <= level) : bot.commands.filter(cmd => bot.levelCache[cmd.conf.permLevel] <= level && cmd.conf.guildOnly !== true);

            // Here we have to get the command names only, and we use that array to get the longest name.
            // This make the help commands "aligned" in the output.
            const commandNames = myCommands.keyArray();
            const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
            let currentCategory = "";
            let output = ``;
            const sorted = myCommands.array().sort((p, c) => p.help.category > c.help.category ? 1 : p.help.name > c.help.name && p.help.category === c.help.category ? 1 : -1);
            sorted.forEach(c => {
                const ban = c.help.category.toProperCase();
                if (currentCategory !== ban) {
                    output += `\n= ${ban} =\n`;
                    currentCategory = ban;
                }
                output += `${message.settings.prefix}${c.help.name}\n`;
            });
            const embed = new RichEmbed()
                .setAuthor(`List of Commands for ${message.author.username}`, message.author.avatarURL)
                .setThumbnail(bot.user.avatarURL)
                .setDescription(`\`\`\`asciidoc\n${output}\`\`\``)
                message.channel.send({ embed })
        } else {
            // Show individual command's help.
            let command = args[0];
            if (bot.commands.has(command)) {
                command = bot.commands.get(command);
                if (level < bot.levelCache[command.conf.permLevel]) return;
                message.channel.send(`= ${command.help.name} = \n${command.help.description}\nusage:: ${command.help.usage}\naliases:: ${command.conf.aliases.join(", ")}\n= ${command.help.name} =`, { code: "asciidoc" });
            }
        }
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "help",
    category: "- Help",
    description: "Displays all the available commands for your permission level.",
    usage: "help [command]"
};