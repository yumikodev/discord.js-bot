/* Interaction create */
module.exports = {
  name: "run",
  async run(client, interaction) {
    if (!interaction.isCommand()) return;

    const command = client.slashs.get(interaction.commandName);

    if (!command)
      return interaction.reply({
        content: "An error has ocurred",
        ephemeral: true,
      });

    try {
      await command.execute(client, interaction);
    } catch (err) {
      console.error(err);

      await interaction.reply({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    }
  },
};
