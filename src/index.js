const { Client, Intents, Collection } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const config = require("./config/config");
module.exports = client;

/*-------- Global variables --------*/
client.commands = new Collection();
client.slashs = new Collection();
client.config = config;

/*-------- Handlers --------*/
require("./handler/index")(client);

/*-------- Client Login --------*/
client.login(client.config.token);
