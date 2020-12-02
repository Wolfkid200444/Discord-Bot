import { BaseClient } from "./structures/bot/BaseClient";
import "dotenv/config";

const client = new BaseClient({
    token: process.env.DISCORD_TOKEN
}, {
    disableMentions: "everyone"
});

client.build()
    .catch(console.error);