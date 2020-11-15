import Client from "./structures/client/Client";

const client = new Client();
client.build()
    .catch(console.error);