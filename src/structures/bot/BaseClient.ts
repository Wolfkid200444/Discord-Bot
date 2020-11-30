import { AkairoClient, CommandHandler, ListenerHandler } from "discord-akairo";
import { join } from "path";
import "dotenv/config";

export class BaseClient extends AkairoClient {

    public commandHandler: CommandHandler = new CommandHandler(this, {
        directory: join(__dirname, "../../", "commands"),

        prefix: process.env.PREFIX
    });

    public listenerHandler: ListenerHandler = new ListenerHandler(this, {
        directory: join(__dirname, "../../", "listeners")
    });

    constructor() {
        super({
            ownerID: process.env.OWNER_ID
        }, {
            disableMentions: "everyone",
            fetchAllMembers: true
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