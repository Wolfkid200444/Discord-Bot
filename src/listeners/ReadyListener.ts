import { BaseListener } from "../structures/bot/BaseListener";

class ReadyListener extends BaseListener {

    constructor() {
        super("ready", {
            emitter: "client",
            event: "ready"
        });
    }

    async exec(...args): Promise<any> {
        this.client.user.setPresence({
            activity: {
                name: "play.elysianetwork.xyz",
                type: "PLAYING"
            },
            status: "online"
        });

        console.log(`Logged in as ${this.client.user.tag}!`);
    }

}

export = ReadyListener;