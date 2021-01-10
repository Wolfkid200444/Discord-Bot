import { BaseListener } from "../structures/bot/BaseListener";

class ReadyListener extends BaseListener {

    constructor() {
        super("ready", {
            emitter: "client",
            event: "ready"
        });
    }

    async exec(...args: any[]): Promise<any> {
        await this.client.user.setPresence({
            activity: {
                name: "home.elysianetwork.xyz — 🔵",
                type: "PLAYING"
            },
            status: "idle"
        });

        console.log(`Logged in as ${this.client.user.tag}!`);
    }

}

export = ReadyListener;