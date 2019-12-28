const discord = require("discord.js");

exports.run = async(bot, message, args, level) =>{
           // !Ban @gebruikersnaam reden hier
          let kicker = message.author 
          var server = message.guild.name 
           let member = message.mentions.members.first();
           if(!member)
           return message.reply(`
           Please use this format: 
           **${message.settings['prefix']}ban <@user> <Reason>** `);
           if(!member.bannable) 
           return message.reply("An error accured. Do i have the right perms?");
       
           let reason = args.slice(1).join(' ');
           if(!reason) reason = "Unspecified";

           var band = new discord.RichEmbed()
           .setDescription("**Ban**")
           .setColor(0xff0022)
           .addField("Server:", server)
           .addField("Banned user:", member)
           .addField("Banned by:", kicker)
           .addField("Reason:", reason)



           var bant = new discord.RichEmbed()
           .setDescription("**Ban**")
           .setColor(0xff0022)
           .addField("Banned user:", member)
           .addField("Banned by:", kicker)
           .addField("Reason:", reason)

           await member.send(band)
           await member.ban(reason)
             .catch(error => message.reply(`Sorry ${message.author} Error: ${error}`));
    
           message.channel.send(bant);
}
    exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "Moderator"
};

exports.help = {
    name: "ban",
    category: "Moderation",
    description: "Ban an user.",
    usage: "Ban <@User> <Reason>"
};