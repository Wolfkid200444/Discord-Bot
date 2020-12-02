import { AkairoClient, AkairoOptions, CommandHandler, ListenerHandler } from "discord-akairo";
import { ClientOptions } from "discord.js";
import { join } from "path";
import "dotenv/config";

interface BaseClientOptions extends AkairoOptions {
    ownerID?: string|string[],
    token: string|null,
}

export class BaseClient extends AkairoClient {

    protected commandHandler: CommandHandler = new CommandHandler(this, {
        directory: join(__dirname, "../../", "commands"),

        prefix: process.env.PREFIX ?? "e!"
    });

    protected listenerHandler: ListenerHandler = new ListenerHandler(this, {
        directory: join(__dirname, "../../", "listeners")
    });

    constructor(options: BaseClientOptions, clientOptions?: ClientOptions) {
        super(options, clientOptions);
    }

    async build() {
        this.commandHandler.loadAll();
        this.commandHandler.useListenerHandler(this.listenerHandler);

        this.listenerHandler.loadAll();
        this.listenerHandler.setEmitters({
            commandHandler: this.commandHandler,
            listenerHandler: this.listenerHandler
        });

        return this.login(process.env.DISCORD_TOKEN);
    }

}