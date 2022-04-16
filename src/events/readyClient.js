const { MessageEmbed } = require("discord.js");
const client = require("../../index");

/*-------- Event ready --------*/
client.on("ready", () => {
  console.clear();
  console.log(`${client.user.tag} is online!`);

  /*-------- Set Presence --------*/
  async function $presence() {
    const status = [
      {
        type: "PLAYING",
        content: `${client.config.prefix}help - v${client.config.version}`,
        status: "online",
      },
      {
        type: "LISTENING",
        content: `${client.guilds.cache.size} ${
          client.guilds.cache.size > 1 ? "servidores" : "servidor"
        }`,
        status: "online",
      },
      {
        type: "WATCHING",
        content: `${client.users.cache.size} ${client.users.cache.size > 1 ? "usuarios" : "usuario"}`,
        status: "online",
      },
    ];

    const option = Math.floor(Math.random() * status.length);
    client.user.setPresence({
      activities: [
        {
          name: status[option].content,
          type: status[option].type,
        },
      ],
      status: status[option].status,
    });
  }
  setInterval($presence, 8 * 1000);
  $presence();
});
