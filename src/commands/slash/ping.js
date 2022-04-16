const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Send a ping request."),

  async execute(client, int) {
    await int.reply({ content: `🏓Pong!` });
    await int.followUp({
      content: `Latency: ${client.ws.ping}ms\nBot Latency: ${
        Date.now() - int.createdTimestamp
      }ms`,
    });
  },
};
