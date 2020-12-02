import { AkairoOptions } from "discord-akairo";

export interface BaseClientOptions extends AkairoOptions {
    ownerID?: string|string[],
    token: string|null,
}