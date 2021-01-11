import { Message } from "discord.js";
import { BaseListener } from "../structures/bot/BaseListener";
import { IEmbed } from "../structures/entities/IEmbed";

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
			
		const args = message.content.split(" ");
		// Invite your bot functionality lol
		if (message.channel.id === "790862426555023380") {
			if (isNaN(parseInt(args[0])))
				return;

			const submittedBot = await this.client.users.fetch(args[0], true, true);

			console.log(submittedBot);

			const options = {
				timeout: 1500
			}

			if (message.deletable)
				await message.delete();


			if (!args[1])
				return message.reply("Specify your bot's prefix!").then(msg => {
					msg.delete(options);
				});
			
			if (!submittedBot.bot)
				return message.reply("Specified bot ID is not an bot!").then(msg => {
					msg.delete(options);
				});

			const queueLogChannel = message.guild.channels.cache.get("797644483340271677");
			const invLink = `https://discordapp.com/api/oauth2/authorize?client_id=${submittedBot.id}&permissions=3533824&scope=bot`;

			const embed = new IEmbed()
				.setThumbnail(submittedBot.avatarURL())
				.setAuthor(submittedBot.tag, submittedBot.avatarURL())
				.setDescription(`Thank you for inviting your bot! It will be added to the server after it is tested.`)
				.addField("➜ Bot Info", "```\nUsername: " + submittedBot.tag + "\nID: " + submittedBot.id + "\n```" )
				.addField("➜ Developer Info", "```\nUsername: " + message.author.tag + "\nID: " + message.author.id + "\n```" )
				.addField("➜ Additional Info", `Prefix: ${args[1]}\nInvite Link: [here](${invLink})`);
			await message.channel.send(embed);

			// @ts-ignore
			queueLogChannel.send(`**${submittedBot.tag}** has been added to the verification center`);
			// @ts-ignore
			message.guild.channels.cache.get("797648225439186954").send(`Invite link for ${submittedBot.tag}: `);
		}

		// DISBOARD Reminder
		if (message.content.includes("!d bump")) {
			// TODO: Fix this
		}

    }

}

export = MessageListener;