const { SlashCommandBuilder } = require("discord.js");
const { SlashBuilder } = require("../../../components/CommandBuilder");

module.exports = new SlashBuilder({
  data: new SlashCommandBuilder()
    .setName("say")
    .setDescription("Send a message through me.")
    .addStringOption((option) =>
      option
        .setName("content")
        .setDescription("The content of the message.")
        .setRequired(true)
    ),
  async run(client, int) {
    try {
      let txt = int.options.getString("content");

      await int.reply({ content: "Mensaje enviado.", ephemeral: true });
      await int.channel.send({ content: txt });
    } catch (err) {
      console.log(err);
      await int.reply({ content: err.message, ephemeral: true });
    }
  },
});
