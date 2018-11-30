const Discord = require('discord.js');
const client = new Discord.Client();
const developers = ['320423357709549568','515458477053706251'];


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("LIFE IS PAIN",{type: 'LISTENING'})
  client.user.setStatus("idle")
});

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;

if (message.content.startsWith('.Mwt')) {
client.user.setActivity(argresult, {type:'WATCHING'});
  client.user.setStatus("idle")
    message.channel.send(` :heavy_check_mark:  `)
} else 
if (message.content.startsWith('.Mls')) {
client.user.setActivity(argresult , {type:'LISTENING'});
  client.user.setStatus("idle")
    message.channel.send(`:heavy_check_mark: `)
  } else 
if (message.content.startsWith('.Mpl')) {
client.user.setActivity(argresult , {type:'PLAYING'});
  client.user.setStatus("idle")
    message.channel.send(`:heavy_check_mark:  `) // حقوق ميرسي.
  }
          
});
client.login(process.env.MEERCY);
