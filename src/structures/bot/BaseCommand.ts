import { Command, CommandOptions } from "discord-akairo";
import { BaseClient } from "./BaseClient";

export class BaseCommand extends Command {

    client!: BaseClient;

    constructor(id: string, options?: CommandOptions) {
        super(id, options);
    }

}