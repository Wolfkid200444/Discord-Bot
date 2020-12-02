import { Message, MessageAttachment, User } from "discord.js";
import { BaseCommand } from "../../structures/bot/BaseCommand";

class AvatarCommand extends BaseCommand {

    constructor() {
        super("avatar", {
            category: "utility",
            description: {
                content: "Shows you an user's avatar",
                usage: "(username | id | mention)"
            },
            aliases: ["avatar", "pfp"],
            channel: "guild",
            args: [
                {
                    id: "user",
                    type: "user"
                }
            ]
        });
    }

    async exec(message: Message, { user }: { user: User }): Promise<any> {
        if (user) {
            const attachment = new MessageAttachment(user.avatarURL({ dynamic: true, size: 1024, format: "png" }));

            message.channel.send(`> **Viewing avatar** ・ **[** ${user.tag} **]**`, attachment);
        } else {
            const attachment = new MessageAttachment(message.author.avatarURL({ dynamic: true, size: 1024, format: "png" }));

            message.channel.send(`> **Viewing avatar** ・ **[** ${message.author.tag} **]**`, attachment);
        }

    }

}

export = AvatarCommand;