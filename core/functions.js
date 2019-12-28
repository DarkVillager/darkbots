module.exports = (bot) => {
 
    /*
    PERMISSION LEVEL FUNCTION
    This is a very basic permission system for commands which uses "levels"
    "spaces" are intentionally left black so you can add them if you want.
    NEVER GIVE ANYONE BUT OWNER THE LEVEL 10! By default this can run any
    command including the VERY DANGEROUS `eval` and `exec` commands!
    */
   bot.permlevel = message => {
        let permlvl = 0;
 
        const permOrder = bot.config.permLevels.slice(0).sort((p, c) => p.level < c.level ? 1 : -1);
 
        while (permOrder.length) {
            const currentLevel = permOrder.shift();
            if (message.guild && currentLevel.guildOnly) continue;
            if (currentLevel.check(message)) {
                permlvl = currentLevel.level;
                break;
            }
        }
        return permlvl;
    };
 
    /*
    GUILD SETTINGS FUNCTION
    This function merges the default settings (from config.defaultSettings) with any
    guild override you might have for particular guild. If no overrides are present,
    the default settings are used.
    */
   bot.getSettings = (guild) => {
        const defaults = bot.config.defaultSettings || {};
        if (!guild) return defaults;
        const guildData = bot.settings.get(guild) || {};
        const returnObject = {};
        Object.keys(defaults).forEach((key) => {
            returnObject[key] = guildData[key] ? guildData[key] : defaults[key];
        });
        return returnObject;
    };
 
    /*
    SINGLE-LINE AWAITMESSAGE
    A simple way to grab a single reply, from the user that initiated
    the command. Useful to get "precisions" on certain things...
    USAGE
    const response = await bot.awaitReply(msg, "Favourite Color?");
    msg.reply(`Oh, I really love ${response} too!`);
    */
   bot.awaitReply = async (msg, question, limit = 60000) => {
        const filter = m => m.author.id === msg.author.id;
        await msg.channel.send(question);
        try {
            const collected = await msg.channel.awaitMessages(filter, { max: 1, time: limit, errors: ["time"] });
            return collected.first().content;
        } catch (e) {
            return false;
        }
    };
 
 
    /*
    MESSAGE CLEAN FUNCTION
    "Clean" removes @everyone pings, as well as tokens, and makes code blocks
    escaped so they're shown more easily. As a bonus it resolves promises
    and stringifies objects!
    This is mostly only used by the Eval and Exec commands.
    */
   bot.clean = async (bot, text) => {
        if (text && text.constructor.name == "Promise")
            text = await text;
        if (typeof evaled !== "string")
            text = require("util").inspect(text, { depth: 1 });
 
        text = text
            .replace(/`/g, "`" + String.fromCharCode(8203))
            .replace(/@/g, "@" + String.fromCharCode(8203))
            .replace(bot.token, "mfa.VkO_2G4Qv3T--NO--lWetW_tjND--TOKEN--QFTm6YGtzq9PH--4U--tG0");
 
        return text;
    };
 
    bot.commands = (commandName) => {
        try {
 
 
        } catch (e) {
            return `Failed to fetch the commands list!: ${e}`;
        }
    }
 
    bot.loadCommand = (commandName) => {
        try {
            console.log(`Loading Command: ${commandName}`);
            const props = require(`../commands/${commandName}`);
            if (props.init) {
                props.init(bot);
            }
            bot.commands.set(props.help.name, props);
            props.conf.aliases.forEach(alias => {
                bot.aliases.set(alias, props.help.name);
            });
            return false;
        } catch (e) {
            return `Unable to load command ${commandName}: ${e}`;
        }
    };
 
    bot.unloadCommand = async (commandName) => {
        let command;
        if (bot.commands.has(commandName)) {
            command = bot.commands.get(commandName);
        } else if (bot.aliases.has(commandName)) {
            command = bot.commands.get(bot.aliases.get(commandName));
        }
        if (!command) return `The command \`${commandName}\` doesn"t seem to exist, nor is it an alias. Try again!`;
 
       if (command.shutdown) {
           await command.shutdown(bot);
       }
       const mod = require.cache[require.resolve(`../commands/${commandName}`)];
       delete require.cache[require.resolve(`../commands/${commandName}.js`)];
       for (let i = 0; i < mod.parent.children.length; i++) {
           if (mod.parent.children[i] === mod) {
               mod.parent.children.splice(i, 1);
               break;
           }
       }
       return false;
   };
 
 
   /* MISCELANEOUS NON-CRITICAL FUNCTIONS */
 
   // EXTENDING NATIVE TYPES IS BAD PRACTICE. Why? Because if JavaScript adds this
   // later, this conflicts with native code. Also, if some other lib you use does
   // this, a conflict also occurs. KNOWING THIS however, the following 2 methods
   // are, we feel, very useful in code.
 
   // <String>.toPropercase() returns a proper-cased string such as:
   // "Mary had a little lamb".toProperCase() returns "Mary Had A Little Lamb"
   Object.defineProperty(String.prototype, "toProperCase", {
       value: function () {
           return this.replace(/([^\W_]+[^\s-]*) */g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
       }
   });
 
   // <Array>.random() returns a single random element from an array
   // [1, 2, 3, 4, 5].random() can return 1, 2, 3, 4 or 5.
   Object.defineProperty(Array.prototype, "random", {
       value: function () {
           return this[Math.floor(Math.random() * this.length)];
       }
   });
 
   // `await bot.wait(1000);` to "pause" for 1 second.
   bot.wait = require("util").promisify(setTimeout);
 
    // These 2 process methods will catch exceptions and give *more details* about the error and stack trace.
    process.on("uncaughtException", (err) => {
        const errorMsg = err.stack.replace(new RegExp(`${__dirname}/`, "g"), "./");
        console.log(`Uncaught Exception: ${errorMsg}`);
      // Always best practice to let the code crash on uncaught exceptions.
        // Because you should be catching them anyway.
        process.exit(1);
    });
 
    process.on("unhandledRejection", (reason, p) => {
       console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
    });
};