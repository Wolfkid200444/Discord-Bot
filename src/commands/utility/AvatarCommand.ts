import { Message, MessageEmbed, User } from "discord.js";
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
        const embed = new MessageEmbed()
            .setColor("0xefefef");

        if (user) {
            embed.setImage(user.displayAvatarURL({ dynamic: true, size: 1024}));

            message.channel.send(`> **Viewing avatar** ・ **[** ${user.tag} **]**`);
            message.channel.send(embed);
        } else {
            embed.setImage(message.author.avatarURL({ dynamic: true, size: 1024 }));

            message.channel.send(`> **Viewing avatar** ・ **[** ${message.author.tag} **]**`);
            message.channel.send(embed);
        }

    }

}

export = AvatarCommand;