const { readdir } = require("node:fs/promises");
const { REST } = require("@discordjs/rest");
const config = require("./config/config");
const { Routes } = require("discord.js");
const { join } = require("node:path");

(async () => {
  try {
    const commands = [];

    const commandFiles = await readdir(join(__dirname, "./commands/slash"));

    for (const folders of commandFiles) {
      const folder = await readdir(
        join(__dirname, `./commands/slash/${folders}`)
      );

      for (const file of folder) {
        const command = require(`./commands/slash/${folders}/${file}`);
        commands.push(command.data.toJSON());
      }
    }

    const rest = new REST({ version: 10 }).setToken(config.token);

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
