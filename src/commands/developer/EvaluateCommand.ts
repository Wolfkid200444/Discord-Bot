import { Message } from "discord.js";
import { inspect } from "util";
import { BaseCommand } from "../../structures/bot/BaseCommand";
import {IEmbed} from "../../structures/entities/IEmbed";

class EvaluateCommand extends BaseCommand {

    constructor() {
        super("evaluate", {
            category: "developer",
            description: {
                content: "Evaluates JavaScript code",
                usage: "[code]"
            },
            aliases: ["evaluate", "eval", "fuckyoulich"],
            ownerOnly: true,
            args: [
                {
                    id: "code",
                    match: "text"
                }
            ]
        });
    }

    async exec(message: Message, { code }: { code: string }): Promise<any> {
        if (!code)
            return message.reply("Specify something to evaluate dumbo :angry:");

        const embed = new IEmbed()

        try {
            let evaled = eval(code);
            if (typeof evaled !== "string")
                evaled = inspect(evaled, { depth: 0 });

            embed.addField("➜ Input", "```js\n" + code + "\n```")
            embed.addField("➜ Output", "```js\n" + this.cleanCode(evaled) + "\n```")
            embed.setTimestamp();
            return message.channel.send(embed);
        } catch (e) {
            console.log(e)

            embed.addField("➜ Error", "```js\n" + this.cleanCode(e) + "\n```")
            embed.setTimestamp()
            return message.channel.send(embed);
        }
    }

    cleanCode(text) {
        if (typeof(text) === "string") {
            return text
                .replace(/`/g, "`" + String.fromCharCode(8203))
                .replace(/@/g, "@" + String.fromCharCode(8203))
                .replace(this.client.token, "<TOKEN>");
        } else {
            return text;
        }
    }

}

export = EvaluateCommand;