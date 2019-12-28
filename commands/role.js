const discord = require("discord.js");
exports.run = async (bot, message, args, level) => {
    if (args[0] === 'sub') {
    let rMember = message.guild.member(message.author) || message.guild.members.get(args[1]);
    if (!rMember) return message.channel.send(`Couldn't find the user.`)
    let role = args.slice(1).join(" ");
    if(!role) return message.reply("Specify a role!")
    let gRole = message.guild.roles.find(x => x.name === role);
    if(!gRole) return message.reply("Couldn't find that role.")

    if(rMember.roles.has(gRole.id)) return message.reply("Already has that role");
    rMember.addRole(gRole.id);

try{
   await message.reply(`Congrats you now got the role **${gRole.name}**`);
 }catch(e){
     message.channel.send(`An error accured. ${error}`)
   }
} 
else if (args[0] === 'unsub') {
    let rMember = message.guild.member(message.author) || message.guild.members.get(args[1]);
    if (!rMember) return message.channel.send(`Couldn't find the user.`)
    let role = args.slice(1).join(" ");
    if(!role) return message.reply("Specify a role!")
    let gRole = message.guild.roles.find(x => x.name === role);
    if(!gRole) return message.reply("Couldn't find that role.")

    if(!rMember.roles.has(gRole.id)) return message.reply("Doesn't have the role.");
    rMember.removeRole(gRole.id);

try{
   await message.reply(`you just took **${gRole.name}** away from yourself!`);
 }catch(e){
     message.channel.send(`An error accured. ${error}`)
   }
 }
 else {
     message.reply("Provide an valid argument. Valid arguments: **sub** or **unsub**")
     }
 }
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["rol"],
    permLevel: "Bot Owner"
};

exports.help = {
    name: "role",
    category: "Maintenance",
    description: "Gives/Creates and role",
    usage: "role sub/unsub <role-name>"
};