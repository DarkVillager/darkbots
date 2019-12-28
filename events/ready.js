module.exports = async (bot, error) => {
    bot.on("error", (e) => console.error (e)) 
    console.log(`${bot.user.username} is online!`);
    // bot.user.setActivity(`=Help | V${bot.config.version}`, {{ type: "PLAYING"}, status: 'online' });
    bot.user.setActivity(`=help | V${bot.config.version}`, { type: "PLAYING" });
    // bot.user.setActivity(`=Help | Geupdate worden.`, { type: "PLAYING" });
            // List servers the bot is connected to
            console.log(`Aantal servers: ${bot.guilds.size}`)
}