const { ActivityType } = require("discord.js");
const setPresence = require("../components/setPresence");
const EventBuilder = require("../components/EventBuilder");
const config = require("../config/config");

// Event ready
module.exports = new EventBuilder({
  event: "ready",
  listener(client) {
    console.clear();
    console.log(`${client.user.tag} is online!`);

    // Set Presence
    new setPresence(client, [
      {
        type: ActivityType.Playing,
        content: `${config.prefix}help - v${config.version}`,
        status: "online",
      },
      {
        type: ActivityType.Listening,
        content: `${client.guilds.cache.size} ${
          client.guilds.cache.size > 1 ? "servidores" : "servidor"
        }`,
        status: "online",
      },
      {
        type: ActivityType.Watching,
        content: `${client.users.cache.size} ${
          client.users.cache.size > 1 ? "usuarios" : "usuario"
        }`,
        status: "online",
      },
    ]);
  },
});
