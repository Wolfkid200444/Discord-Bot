import { AkairoClient, CommandHandler, ListenerHandler } from "discord-akairo";
import { ClientOptions } from "discord.js";
import { join } from "path";
import { existsSync } from "fs";
import "dotenv/config";
import { BaseClientOptions } from "../../../typings";

export class BaseClient extends AkairoClient {

    public commandHandler: CommandHandler = new CommandHandler(this, {
        directory: join(__dirname, "../../", "commands"),

        prefix: process.env.PREFIX ?? "e!"
    });

    public listenerHandler: ListenerHandler = new ListenerHandler(this, {
        directory: join(__dirname, "../../", "listeners")
    });

    constructor(options: BaseClientOptions, clientOptions?: ClientOptions) {
        super(options, clientOptions);
    }

    async build() {
        if (existsSync(this.commandHandler.directory)) {
            this.commandHandler.loadAll();
            this.commandHandler.useListenerHandler(this.listenerHandler);
        }

        if (existsSync(this.listenerHandler.directory)) {
            this.listenerHandler.loadAll();
            this.listenerHandler.setEmitters({
                commandHandler: this.commandHandler,
                listenerHandler: this.listenerHandler
            });
        }

        return this.login(process.env.DISCORD_TOKEN);
    }

}