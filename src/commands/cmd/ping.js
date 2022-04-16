module.exports = {
  name: "ping",
  alias: [],
  async execute(client, message, args) {
    await message.reply({ content: "🏓Pong!" });
    await message.reply({
      content: `Latency: ${client.ws.ping}ms\nBot Latency: ${
        Date.now() - message.createdTimestamp
      }ms`,
    });
  },
};
