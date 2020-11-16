import { BaseClient } from "./structures/bot/BaseClient";

const client = new BaseClient();
client.build()
    .catch(console.error);