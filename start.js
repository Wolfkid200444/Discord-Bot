require("dotenv").config();
checkEnv();

function checkEnv() {
    if (process.env.DISCORD_TOKEN === "") {
        return console.error("Discord Bot Token shouldn't be null!");
    }

    if (process.env.OWNER_ID === "") {
        return console.error("Owner User ID shouldn't be null!");
    }

    if (process.env.PREFIX === "") {
        return console.error("Bot Prefix shouldn't be null!");
    }

    start();
}

function start() {
    // TODO: Check if host is Glitch or Heroku
    require("./dist/index.js");
}