import { Message } from "discord.js";
import { BaseListener } from "../structures/bot/BaseListener";

class MessageListener extends BaseListener {

    constructor() {
        super("message", {
            emitter: "client",
            event: "message"
        })
    }

    async exec(message: Message): Promise<any> {
        if (message.author.bot)
            return;

		if (message.channel.id !== "790862426555023380")
			return;

		const args = message.content.split(" ");
		const submittedBot = await this.client.users.fetch(args[0], true, true);

		console.log(submittedBot);

		const options = {
			timeout: 1500
		}

		if (message.deletable)
			message.delete();


		if (!args[1])
			return message.reply("Specify your bot's prefix!").then(msg => {
				message.delete(options);
			});
		
		if (!submittedBot.bot)
			return message.reply("Specified bot ID is not an bot!").then(msg => {
				message.delete(options);
			});

    }

}

export = MessageListener;