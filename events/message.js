module.exports = async (bot, message) => {
    // It's good practice to ignore other bots. This also makes your bot ignore itself
       // and not get into a spam loop (we call that "botception").
       if (message.author.bot) return;
   
       // Grab the settings for this server from Enmap.
       // If there is no guild, get default conf (DMs)
       const settings = message.settings = bot.getSettings(message.guild.id);
   
       // Checks if the bot was mentioned, with no message after it, returns the prefix.
       const prefixMention = new RegExp(`^<@!?${bot.user.id}>( |)$`);
       if (message.content.match(prefixMention)) {
           return message.reply(`My prefix on this guild is \`${settings.prefix}\``);
       }
   
       // Also good practice to ignore any message that does not start with our prefix,
       // which is set in the configuration file.
       if (message.content.indexOf(settings.prefix) !== 0) return;
   
       // Here we separate our "command" name, and our "arguments" for the command.
       // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
       // command = say
       // args = ["Is", "this", "the", "real", "life?"]
       const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
       const command = args.shift().toLowerCase();
   
       // If the member on a guild is invisible or not cached, fetch them.
       if (message.guild && !message.member) await message.guild.fetchMember(message.author);
   
       // Get the user or member's permission level from the elevation
       const level = bot.permlevel(message);
   
       // Check whether the command, or alias, exist in the collections defined
       // in app.js.
       const cmd = bot.commands.get(command) || bot.commands.get(bot.aliases.get(command));
       // using this const varName = thing OR otherthign; is a pretty efficient
       // and clean way to grab one of 2 values!
       if (!cmd) return;
   
       // Some commands may not be useable in DMs. This check prevents those commands from running
       // and return a friendly error message.
    //    if (cmd && !message.guild && cmd.conf.guildOnly)
    //        return message.channel.send("This command is unavailable via private message. Please run this command in a guild.");
   
    if (level < bot.levelCache[cmd.conf.permLevel]) {
        if (settings.systemNotice === "true") {
            return message.channel.send(`You do not have permission to use this command.
  Your permission level is ${level} (${bot.config.permLevels.find(l => l.level === level).name})
  This command requires level ${bot.levelCache[cmd.conf.permLevel]} (${cmd.conf.permLevel})`);
        } else {
            return message.channel.send(`You do not have permission to use this command.
            Your permission level is ${level} (${bot.config.permLevels.find(l => l.level === level).name})
            This command requires level ${bot.levelCache[cmd.conf.permLevel]} (${cmd.conf.permLevel})`);
        }
    }
   
       // To simplify message arguments, the author's level is now put on level (not member so it is supported in DMs)
       // The "level" command module argument will be deprecated in the future.
       message.author.permLevel = level;
   
       message.flags = [];
       while (args[0] && args[0][0] === "-") {
           message.flags.push(args.shift().slice(1));
       }
       // If the command exists, **AND** the user has permission, run it.
       cmd.run(bot, message, args, level);
    
   }