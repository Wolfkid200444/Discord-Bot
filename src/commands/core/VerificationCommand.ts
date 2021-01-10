import { BaseCommand } from "../../structures/bot/BaseCommand";

class VerificationCommand extends BaseCommand {

    constructor() {
        super("verification", {
            category: "core",
            description: {
                content: "???"
            },
            aliases: ["bot", "verification", "verify"],
            channel: "guild"
        });
    }

    async exec(message, args: any): Promise<any> {
        args = message.content.split(" ");
        switch (args) {
            case "accept":
                const acceptedBot = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
                const acceptedBotPrefix = args[2];

                if (!acceptedBot)
                    return message.reply("Who you accepting dummy");

                if (!acceptedBotPrefix)
                    return message.reply("What's the prefix dum");

                const logs = message.guild.channels.cache.get("797644483340271677");
                // @ts-ignore
                logs.send(`**${acceptedBot.user.tag}** has been approved by <@!${message.author.id}>`);

                const botRole = message.guild.roles.cache.find(r => r.name == "⚒️｜User Bots");
                const unverifiedRole = message.guild.roles.cache.find(r => r.name == "⚒️｜Unverified Bots");

                acceptedBot.addRole(botRole.id);
                acceptedBot.removeRole(unverifiedRole.id);
                await acceptedBot.setNickname(`[ ${acceptedBotPrefix} ] ${acceptedBot.user.username}`);
                break;
        }
    }

}

export = VerificationCommand;