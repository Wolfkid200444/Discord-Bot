import { BaseCommand } from "../../structures/bot/BaseCommand";

class VerificationCommand extends BaseCommand {

    constructor() {
        super("verification", {
            category: "core",
            description: {
                content: "???"
            },
            aliases: ["bot", "verification", "verify"],
            channel: "guild",
            args: [
                {
                    id: "command",
                    type: "string"
                },
                {
                    id: "botID",
                    type: "memberMention"
                },
                {
                    id: "ah",
                    match: "content"
                }
            ]
        });
    }

    async exec(message, args: any): Promise<any> {
        const logs = message.guild.channels.cache.get("797644483340271677");
        const bot = message.mentions.members.first() || message.guild.members.cache.get(args.botID);
        switch (args.command) {
            case "accept":
                const acceptedBotPrefix = args.ah;

                if (!bot)
                    return message.reply("Who you accepting dummy");

                if (!acceptedBotPrefix)
                    return message.reply("What's the prefix dum");

                // @ts-ignore
                logs.send(`**${acceptedBot.user.tag}** has been approved by <@!${message.author.id}>`);

                const botRole = message.guild.roles.cache.find(r => r.name == "⚒️｜User Bots");
                const unverifiedRole = message.guild.roles.cache.find(r => r.name == "⚒️｜Unverified Bots");

                await bot.roles.add(botRole.id);
                await bot.roles.remove(unverifiedRole.id);
                await bot.setNickname(`[ ${acceptedBotPrefix} ] ${bot.user.username}`);
                break;
            case "reject":
                const reason = args.ah
                    .replace(args.command, "")
                    .replace(args.botID, "")
                    .replace("  ", "");

                if (!bot)
                    return message.reply("Who you rejecting dummy");

                if (!reason)
                    return message.reply("Why are you rejecting it dum");

                logs.send(`**${bot.user.tag}** has been rejected for **${reason}**`);

                await message.guild.member(bot).kick(reason);
                break;
        }
    }

}

export = VerificationCommand;