const { Client } = require('discord.js');

module.exports = {
  name: 'ready',
  once: true,
  execute(client) {
    console.log("the Client is now ready")
    client.user.setActivity("Server", {type: "WATCHING"})
  }
}
