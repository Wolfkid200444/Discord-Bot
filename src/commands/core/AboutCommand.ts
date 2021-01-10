import { BaseCommand } from "../../structures/bot/BaseCommand";
import { IEmbed } from "../../structures/entities/IEmbed";

class AboutCommand extends BaseCommand {

    constructor() {
        super("about", {
            category: "core",
            description: {
                content: "Shows the bot statistics"
            },
            aliases: ["about", "stats"],
            channel: "guild",
        });
    }

    async exec(message, args: any): Promise<any> {
        const embed = new IEmbed()
            .setThumbnail(this.client.user.avatarURL())
            .setTitle("— Bot Stats")
            .setDescription(
                "➤ Official Discord Bot of [Elysia Network](https://home.elysianetwork.xyz)\n" +
                "➤ GitHub Repo: [Click Me](https://github.com/elysiadevel/discord-bot)"
            )
            .addField("➜ Bot Stats", "```asciidoc\n" +
                "Total Users   ::  " + `${this.client.users.cache.size}\n` +
                "Discord.JS    ::  " + `v${require("discord.js").version}\n` +
                "Akairo        ::  " + `v${require("discord-akairo").version}\n` +
                "\n```"
            )
            .addField("➜ Process Stats", "```asciidoc\n" +
                "Uptime        ::  " + `${this.getUptime(this.client.uptime)}\n` +
                "WS Ping       ::  " + `${this.client.ws.ping}ms\n` +
                "Platform      ::  " + "Debian 10\n" +
                "Node.js       ::  " + `${process.version}\n` +
                "\n```"
            );
        return message.channel.send(embed);
    }

    getUptime(millisec: number) {
        let seconds = millisec / 1000;
        let days = parseInt(String(seconds / 86400));
        seconds = seconds % 86400;
        let hours = parseInt(String(seconds / 3600));
        seconds = seconds % 3600;
        let minutes = parseInt(String(seconds / 60));
        seconds = parseInt(String(seconds % 60));

        if (days) {
            return `${days}d, ${hours}h, ${minutes}m, ${seconds}s`;
        }
        else if (hours) {
            return `${hours}h, ${minutes}m, ${seconds}s`;
        }
        else if (minutes) {
            return `${minutes}m, ${seconds}s`;
        }
        return `${seconds}s`;
    }

}

export = AboutCommand;
