const { Client, Collection, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
const config = require("./config/config");
const handler = require("./handler/main");
module.exports = client;

// Global variables
client.commands = new Collection();
client.slashs = new Collection();

// Handlers
handler(client);

// Client Login
client.login(config.token);
