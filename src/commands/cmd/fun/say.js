const { CommandBuilder } = require("../../../components/CommandBuilder");

module.exports = new CommandBuilder({
  data: {
    name: "say",
    alias: [],
    description: "Send a message through me.",
  },
  async run(client, message, args) {
    try {
      let txt = args.join(" ");
      await message.delete();

      if (!txt)
        return await message.channel.send({
          content: "Tienes que poner el contenido del mensaje",
        });

      await message.channel.send({ content: txt });
    } catch (err) {
      console.log(err);
      await message.channel.send({ content: err.message });
    }
  },
});
