const Discord = require("discord.js");
const bot = new Discord.Client();


const {
    version,
    PREFIX,
    BotID,
    TOKEN,
    gameStatus
  } = require("./config.json");

bot.on("error", (e) => console.error(e))

bot.on('ready', () => {
    if (process.env.NODE_ENV) {
      console.log(`The pen is mightier than the sword. \nBut not for Lore, he doesn't have hands.`)
    }
    console.log(`Lore v${version} has logged in as ${bot.user.tag}!`)
    bot.user.setPresence({
      "status": "online",
      "game": { "name": gameStatus }
    })
  });
bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    const messNoCaps = message.content.toLowerCase ();
if (!message.content.startsWith(PREFIX)) return; 

var args = message.content.substring(PREFIX.length).trim().split(/ +/g);


switch (args[0]) {
  case "inventory":
      if (args[1] === 'ash') {
          var InvAsh = ["Katana","Lyre"];
          if (args[2] === 'add') {
              InvAsh.push(args[3].toString) 
              break;
          } else {
          var embed = new Discord.RichEmbed()
              .setDescription('Belongings of ' + args[1])
              .addField('Items', InvAsh)
          message.channel.send(embed);
          break;
          }

  default:
        message.channel.send("Sinto muito, mas eu não entendi seu pedido." + "\nPor favor digite Lore?ajuda");   
        break;
}});

bot.login(TOKEN);
