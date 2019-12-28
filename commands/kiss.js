const discord = require("discord.js");

exports.run = async(bot, message, args, level) =>{
if (!args.length) {
    return message.channel.send(`You didn't tag someone, ${message.author}!`);
} else {
     let first = message.author;
     let firsti = message.member.user.username;
     let second = message.mentions.users.first();
     let secondi = message.mentions.users.first().username;
     number = 25;
     imageNumber = Math.floor (Math.random() * (number)) + 1;
     let files = "./images/kiss" + imageNumber + ".gif";
    message.channel.send (`***${secondi}***  you got kissed by ***${firsti}***`, {files: ["./images/kiss/" + imageNumber + ".gif"]});

    // var images = [
    //     'https://media.giphy.com/media/CZpro4AZHs436/giphy.gif',
    //     'https://media.giphy.com/media/CZpro4AZHs436/giphy2.gif',
    //     'https://media.giphy.com/media/CZpro4AZHs436/giphy3.gif',
    //     ]
    //      var rand = Math.floor(Math.random() * images.length);
    //      message.channel.send(`${message.author} gave ${member} a hug!`, {
    //         file: rand});
        
    // var hug = new discord.RichEmbed()
    // .setDescription(`${secondi} you got hugged by ${firsti}`)
    // .attachFiles([files])
    // .setImage(randomItem);

    //   message.channel.send(hug);
}

}
    exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "User"
};

exports.help = {
    name: "kiss",
    category: "Fun",
    description: "Kiss an person.",
    usage: `Kiss <@user>`
};