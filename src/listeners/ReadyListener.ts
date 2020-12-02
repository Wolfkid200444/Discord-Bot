import { BaseListener } from "../structures/bot/BaseListener";

class ReadyListener extends BaseListener {

    constructor() {
        super("ready", {
            emitter: "client",
            event: "ready"
        });
    }

    async exec(...args): Promise<any> {
        await this.client.user!.setPresence({
            activity: {
                name: "play.elysianetwork.xyz — 🔵",
                type: "PLAYING"
            },
            status: "idle"
        });

        console.log(`Logged in as ${this.client.user!.tag}!`);
    }

}

export = ReadyListener;