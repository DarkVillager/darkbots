const discord = require("discord.js");

exports.run = async(bot, message, args, level) =>{

if (!args.length) {
    message.reply(`You didn't provide an argument.
    Please provide one of these arguments: **list** , **invite** or **leave**`)
} 
else if (args[0] === 'leave') {
    let input = args[1]
    if (!input) return message.channel.send(`Enter a valid guild id.`);
    let guildid = bot.guilds.get(args[1])
    guildid.leave().catch(error => message.reply(`Sorry ${message.author} I can't leave the server because: ${error}`));
    message.reply(`I succesfuly left ${input}.`);
    }
    else if (args[0] === 'invite') {
        let sv = bot.guilds.get(args[1]);
        if (!sv) return message.channel.send(`Enter a valid guild id.`);
        sv.channels.random().createInvite().then((a) => message.author.send(a.toString())).catch(error => message.reply(`Sorry ${message.author} I can't create an invite link because: ** ${error} **`));
    }
    else if (args[0] === 'list') {
        message.channel.send(bot.guilds.map(r => `**${r.name}**` + ` | ${r.id}` + ` | **${r.memberCount}** members`))
    } else {
        message.reply('`' + args[0] + '` ' + `is not a valid argument.
        Please provide one of these arguments: **list** , **invite** or **leave**`)

    }

}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "Bot Owner"
};

exports.help = {
    name: "guild",
    category: "Owner",
    description: `Owner`,
    usage: "gleave"
};