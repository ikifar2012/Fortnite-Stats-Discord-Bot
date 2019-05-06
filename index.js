// Import the discord.js module
const Secret = require('./key.json');

const Discord = require('discord.js');
// Create an instance of a Discord client
const client = new Discord.Client();
client.login(Secret.key);
/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});
client.on('message', message => {
    if (message.content === 'ping') {
        // Send the user's avatar URL
        message.reply('My ping is ' + client.ping + ' ms');
      }
    if (message.content.startsWith('avatar')) {
        const user = message.mentions.users.first();
        if (user) {
            // Now we get the member from the user
            const member = message.guild.member(user);
        
            message.reply(user.avatarURL);
    }};
        if (message.content.startsWith('stats')) {
            var args = message.content.split(' ');
            var name = args[1];
            console.log(name)
            
        }
});
