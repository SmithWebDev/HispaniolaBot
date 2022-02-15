const {Client, Collection } = require('discord.js');
const client = new Client({intents: 32767});
const {token, prefix} = require('./botconfig.json');
const botconfig = require('./botconfig.json');

client.commands = new Collection()

require('./Handlers/Events')(client);


client.login(token);
