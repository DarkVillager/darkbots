const discord = require("discord.js");

exports.run = async(bot, message, args, level) =>{
  if (!args.length) {
        return message.reply(` Please use the right format: 
        **${message.settings['prefix']}lovecalc <@user> <@Other user>** `);
    } else {
        var random = Math.floor(Math.random() * 100) + 1 + '%'
        var first = args[0]
        var second = args[1]
        message.channel.send(`The love between ***${first}*** & ***${second}*** is ${random}`)
}
}
    exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "lovecalc",
    category: "Fun",
    description: "Calculate the love between 2 people.",
    usage: `Lovecalc <@user> <@other user>`
};