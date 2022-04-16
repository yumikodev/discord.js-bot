const { Client, Intents, Collection } = require("discord.js");
const intents = new Intents(32767);
const client = new Client({ intents });
const config = require("./src/config/config");
module.exports = client;

/*-------- Global variables --------*/
client.commands = new Collection();
client.slashs = new Collection();
client.config = config;

/*-------- Handlers --------*/
require("./src/handler/index")(client);

/*-------- Client Login --------*/
client.login(client.config.token);
