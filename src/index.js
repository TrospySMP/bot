require('dotenv').config();

const { GClient } = require("gcommands");
const { join } = require("node:path");

const client = new GClient({
    intents: [ 'GUILDS', 'GUILD_MEMBERS' ],
    devGuildId: '883749060018864198',
    dirs: [
        join(__dirname, 'commands'),
        join(__dirname, 'events')
    ],
})

client.login(process.env.token);