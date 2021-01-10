import { User } from "discord.js";
import { BaseCommand } from "../../structures/bot/BaseCommand";
import {IEmbed} from "../../structures/entities/IEmbed";

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

    async exec(message, { user }: { user: User }): Promise<any> {
        const embed = new IEmbed()

        if (user) {
            embed.setTitle(`— ${user.username}'s Avatar`);
            embed.setURL(user.avatarURL({ dynamic: true, size: 1024 }));
            embed.setImage(user.avatarURL({ dynamic: true, size: 1024 }));
        } else {
            embed.setTitle(`— ${message.author.username}'s Avatar`);
            embed.setURL(message.author.avatarURL({ dynamic: true, size: 1024 }));
            embed.setImage(message.author.avatarURL({ dynamic: true, size: 1024 }));
        }

        return message.channel.send(embed);
    }

}

export = AvatarCommand;