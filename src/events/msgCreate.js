const { ChannelType } = require("discord.js");
const EventBuilder = require("../components/EventBuilder");
const config = require("../config/config");

// Event message
module.exports = new EventBuilder({
  event: "messageCreate",
  async listener(client, message) {
    try {
      if (message.channel.type === ChannelType.DM) return;
      if (message.author.bot) return;

      let prefix = config.prefix;

      if (!message.content.startsWith(prefix)) return;

      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();

      const cmd = client.commands.find(
        (c) =>
          c.data.name === command ||
          (c.data.alias && c.data.alias.includes(command))
      );

      if (!cmd)
        return await message.reply({
          content: `Command \`${command}\` does not exist`,
        });

      await message.channel.sendTyping();
      await cmd.run(client, message, args);
    } catch (err) {
      console.log(err);
      await message.reply({ content: err.message });
    }
  },
});
