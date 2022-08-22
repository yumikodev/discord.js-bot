import {
  ChatInputCommandInteraction,
  Client,
  Message,
  SlashCommandBuilder,
} from "discord.js";

export type CmdBuilderOptions = {
  data: {
    name: string;
    alias: string[];
    description: string;
  };
  run(client: Client, message: Message, args: string[]): Promise<void | any>;
};

export type SlashBuilderOptions = {
  data: SlashCommandBuilder | any;
  run(
    client: Client,
    interaction: ChatInputCommandInteraction
  ): Promise<void | any>;
};
