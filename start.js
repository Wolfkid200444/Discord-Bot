require("dotenv").config();
checkEnv();

function checkEnv() {
    if (process.env.DISCORD_TOKEN === "") {
        return console.error("Discord Bot Token shouldn't be null!");
    }

    start();
}

function start() {
    // TODO: Check if host is Glitch or Heroku
    require("./dist/index.js");
}