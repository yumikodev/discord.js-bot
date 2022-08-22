const { join } = require("node:path");
const { readdir } = require("node:fs/promises");
const { Client } = require("discord.js");

/**
 * @param {Client} client
 */
module.exports = async (client) => {
  try {
    // Command handler
    const commandFiles = await readdir(join(__dirname, "../commands/cmd"));

    for (const folders of commandFiles) {
      const folder = await readdir(
        join(__dirname, `../commands/cmd/${folders}`)
      );

      for (const file of folder) {
        const command = require(`../commands/cmd/${folders}/${file}`);
        client.commands.set(command.data.name, command);
      }
    }

    // Slash handler
    const slashFiles = await readdir(join(__dirname, "../commands/slash"));

    for (const folders of slashFiles) {
      const folder = await readdir(
        join(__dirname, `../commands/slash/${folders}`)
      );

      for (const file of folder) {
        const command = require(`../commands/slash/${folders}/${file}`);
        client.slashs.set(command.data.name, command);
      }
    }

    // Event handler
    const eventFiles = await readdir(join(__dirname, "../events"));

    for (const file of eventFiles) {
      const e = require(`../events/${file}`);
      client.on(
        e.data.event,
        async (...args) => await e.data.listener(client, ...args)
      );
    }
  } catch (err) {
    console.error(err);
  }
};
