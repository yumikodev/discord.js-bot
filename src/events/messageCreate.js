const client = require("../../index");

/*-------- Event message --------*/
client.on("messageCreate", async (message) => {
  if (message.channel.type === "DM") return;
  if (message.author.bot) return;

  const prefix = client.config.prefix;

  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  const cmd = client.commands.find(
    (c) => c.name === command || (c.alias && c.alias.includes(command))
  );

  if (!cmd) return message.reply({ content: `Command \`${command}\` does not exist` });

  if (cmd) return cmd.execute(client, message, args);
});
