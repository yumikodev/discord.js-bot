/*-------- Event message --------*/
module.exports = {
  name: "messageCreate",
  run(client, message) {
    try {

      if (message.channel.type === "DM") return;
      if (message.author.bot) return;
  
      const prefix = client.config.prefix;
  
      if (!message.content.startsWith(prefix)) return;
  
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
  
      const cmd = client.commands.find(
        (c) => c.name === command || (c.alias && c.alias.includes(command))
      );
  
      if (!cmd)
        return await message.reply({
          content: `Command \`${command}\` does not exist`,
        });
  
      if (cmd) return cmd.execute(client, message, args);
    } catch (err) {
      console.log(err);
      await message.reply({ content: err.message });
    }
  },
};
