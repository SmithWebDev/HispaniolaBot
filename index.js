// Requiring imported files
const {Client, Intents } = require('discord.js');
const {token, prefix} = require('./botconfig.json');
const botconfig = require('./botconfig.json');

// Create new client instance
const client = new Client({intents: Intents.FLAGS.GUILDS});

//When client is ready, this code will run
client.once('ready', () => {
  console.log('Ready!');
  client.user.setActivity("Server", {type: "WATCHING"})
});

//Login to Discord with client's token
client.login(token);
