import { AkairoClient, CommandHandler, ListenerHandler } from "discord-akairo";
import { join } from "path";
import "dotenv/config";

export class BaseClient extends AkairoClient {

    protected commandHandler: CommandHandler = new CommandHandler(this, {
        directory: join(__dirname, "../../", "commands"),

        prefix: process.env.PREFIX ?? "e!"
    });

    protected listenerHandler: ListenerHandler = new ListenerHandler(this, {
        directory: join(__dirname, "../../", "listeners")
    });

    constructor() {
        super({
            ownerID: "380307921952833537"
        }, {
            disableMentions: "everyone",
        });
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