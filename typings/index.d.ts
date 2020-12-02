import { AkairoOptions, CommandOptions } from "discord-akairo";

export interface BaseClientOptions extends AkairoOptions {
    ownerID?: string|string[],
    token: string|null,
}

export interface BaseCommandOptions extends CommandOptions {
    description?: {
        content?: string,
        usage?: string
    }
}