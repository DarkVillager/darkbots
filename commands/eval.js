const discord = require("discord.js");

exports.run = async(bot, message, args, level) =>{


    let evaled;
    try {
      evaled = await eval(args.join(' '));
      message.channel.send(inspect(evaled));
      console.log(inspect(evaled));
    }
    catch (error) {
      console.error(error);
      message.reply('there was an error during evaluation.');
    }


// let toEval = args.join(" ");
// let evaluated = inespect(eval(toEval, { depth: 0 } ))
// try {
//     if(toEval) {
//         let hrStart = procces.hrtime()
//         let hrDiff;
//         hrDiff = procces.hrtime(hrStart)
//         return message.channel.send(`*Executed in ${hrDiff[0] > 0 ? `${hrDiff[0]}s` : ''}${hrDiff[1] / 1000000} ms. *\`\`\`javascript`${evaluated}\n`)
//     }
// }


}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "Bot Owner"
};

exports.help = {
    name: "eval",
    category: "Owner",
    description: `Eval`,
    usage: "eval [code]"
};