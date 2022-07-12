const path = require("node:path");
const fs = require("node:fs");

module.exports = async (client) => {
  try {
    /*--------- Command handler ---------*/
    const commandFiles = fs
      .readdirSync(path.join(__dirname, "../commands/cmd"))
      .filter((file) => file.endsWith(".js"));

    for (const file of commandFiles) {
      const command = require(`../commands/cmd/${file}`);
      await client.commands.set(command.name, command);
    }

    /*--------- slash handler ---------*/
    const slashFiles = fs
      .readdirSync(path.join(__dirname, "../commands/slash"))
      .filter((file) => file.endsWith(".js"));

    for (const file of slashFiles) {
      const command = require(`../commands/slash/${file}`);
      await client.slashs.set(command.data.name, command);
    }

    /*------------- Event handler -------------*/
    const eventFiles = fs
      .readdirSync(path.join(__dirname, "../events"))
      .filter((file) => file.endsWith(".js"));

    for (const file of eventFiles) {
      const e = require(`../events/${file}`);
      await client.on(e.name, (...args) => e.run(client, ...args));
    }
  } catch (err) {
    console.error(err);
  }
};
