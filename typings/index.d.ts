import { Command, Listener } from "discord-akairo";
import { BaseClient } from "../src/structures/bot/BaseClient";

export interface BaseCommand extends Command {
    client: BaseClient;
}

export interface BaseListener extends Listener {
    client: BaseClient;
}