const fs = require("node:fs");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const config = require("./config/config");
const { join } = require("node:path");

const commands = [];

const commandFiles = fs
  .readdirSync(join(__dirname, "./commands/slash"))
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/slash/${file}`);
  commands.push(command.data.toJSON());
}

const rest = new REST({ version: 9 }).setToken(config.token);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(
      Routes.applicationGuildCommands(config.clientId, config.guildId), // Slash commands on a server
      // Routes.applicationCommands(config.clientId) // Global slash commands
      {
        body: commands,
      }
    );

    console.log("Successfully reloaded application (/) commands.");
  } catch (err) {
    console.error(err);
  }
})();
