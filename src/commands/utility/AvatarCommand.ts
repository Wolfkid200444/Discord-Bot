import { Message } from "discord.js";
import { BaseCommand } from "../../structures/bot/BaseCommand";

class AvatarCommand extends BaseCommand {

    constructor() {
        super("avatar", {
            category: "utility",
            description: {
                content: "Shows you an user's avatar",
            },
            aliases: ["pfp"],
        });
    }

    async exec(message: Message, args: any): Promise<any> {
        //TODO: Finish this
    }

}