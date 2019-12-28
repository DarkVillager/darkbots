const discord = require("discord.js");

exports.run = async (bot, message, args, level) => {
           // !Kick @gebruikersnaam reden hier
           let kicker = message.author 
           var server = message.guild.name 

           let member = message.mentions.members.first();
           if(!member)
           return message.reply(`
           Please use this format: 
           **${message.settings['prefix']}kick <@user> <Reason>** `)
           if(member.id === message.author.id)
           return message.reply(`You can't kick yourself :person_facepalming:`)
           if(member.id === bot.user.id)
           return message.reply(`You can't kick the bot :person_facepalming:`)
           
           if(member.user.bot) {
            
            if(!member.kickable) 
            return message.reply(`An error accured. Do i have the right perms?`)
        
            let reason = args.slice(1).join(' ');
            if(!reason) reason = "Unspecified";
   
              var kickt = new discord.RichEmbed()
              .setDescription("**Kick**")
              .setColor(0xff0022)
              .addField("Kicked user:", member)
              .addField("Kicked by:", kicker)
              .addField("Reason:", reason)
 
              await member.kick(reason)
              .catch(error => message.reply(`Sorry ${message.author} Error: ${error}`));
            message.channel.send(kickt);
                return;
           }
           if(!member.kickable) 
           return message.reply(`An error accured. Do i have the right perms?`)
       
           let reason = args.slice(1).join(' ');
           if(!reason) reason = "Unspecified";


             var kickd = new discord.RichEmbed()
             .setDescription("**Kick**")
             .setColor(0xff0022)
             .addField("Server:", server)
             .addField("Kicked user:", member)
             .addField("Kicked by:", kicker)
             .addField("Reason:", reason)
  
  
  
             var kickt = new discord.RichEmbed()
             .setDescription("**Kick**")
             .setColor(0xff0022)
             .addField("Kicked user:", member)
             .addField("Kicked by:", kicker)
             .addField("Reason:", reason)

             await member.send(kickd)
             await member.kick(reason)
             .catch(error => message.reply(`Sorry ${message.author} Error: ${error}`));
           message.channel.send(kickt);
               return;
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "Moderator"
};

exports.help = {
    name: "kick",
    category: "Moderation",
    description: `Kick een gebruiker`,
    usage: "kick <Gebruiker> <Reden>"
};