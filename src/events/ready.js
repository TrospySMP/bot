const { Listener, Logger } = require("gcommands");

new Listener({
    name: 'rejdy',
    event: 'ready',
    run: (client) => {
        Logger.info(`Ready as ${client.user.tag} (${client.user.id})`)
    }
})