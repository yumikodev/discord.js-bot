import { Client, ClientEvents } from "discord.js";

type K = keyof ClientEvents;

export declare type EventBuilderOptions = {
  event: K;
  listener(client: Client, ...args: ClientEvents[K]): Promise<void | any> | any;
};
