import { GuildMember, Message, MessageEmbed, User } from "discord.js";
import { BaseCommand } from "../../structures/bot/BaseCommand";

class AvatarCommand extends BaseCommand {

    constructor() {
        super("avatar", {
            category: "utility",
            description: {
                content: "Shows you an user's avatar",
                usage: "<username | id | mention>"
            },
            aliases: ["pfp"],
            channel: "guild",
            args: [
                {
                    id: "user",
                    type: "user"
                }
            ]
        });
    }

    async exec(message: Message, { user }: { user: GuildMember }): Promise<any> {
        const embed = new MessageEmbed()
            .setColor("0xBB94F8");

        if (!user) {
            embed.setDescription(`[**Image Link**](${user.user.displayAvatarURL()})`);
            embed.setImage(user.user.displayAvatarURL({ dynamic: true }));

            message.channel.send(`> Viewing avatar of ${user.user.username}`);
            message.channel.send(embed);
        } else {
            embed.setDescription(`[**Image Link**](${message.author.avatarURL()})`);
            embed.setImage(message.author.avatarURL({ dynamic: true }));

            message.channel.send(`> Viewing avatar of ${message.author.username}`);
            message.channel.send(embed)
        }

    }

}

export = AvatarCommand;