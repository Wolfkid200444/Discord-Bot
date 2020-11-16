import { Command, Listener } from "discord-akairo";
import { Message } from "discord.js";
import { BaseClient } from "../src/structures/bot/BaseClient";

export interface BaseCommand extends Command {

    client: BaseClient;

    exec(message: Message, args: any): any;

}

export interface BaseListener extends Listener {

    client: BaseClient;

    exec(...args: any): any;

}