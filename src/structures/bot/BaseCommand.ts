import { Command } from "discord-akairo";
import { BaseClient } from "./BaseClient";
import { BaseCommandOptions } from "../../../typings";

export class BaseCommand extends Command {

    client: BaseClient;

    constructor(id: string, options?: BaseCommandOptions) {
        super(id, options);
    }

}