const { Command, ArgumentType, CommandType } = require('gcommands');
const { Inhibitor: { MemberPermissions } } = require('gcommands');

new Command({
    name: 'purge',
    description: 'Purdgni splavy',
    type: [ CommandType.SLASH ],
    guildId: '883749060018864198',
    arguments: [
        {
            name: 'count',
            description: 'kaunt',
            type: ArgumentType.NUMBER,
            required: true
        }
    ],
    inhibitors: [
        new MemberPermissions({
            permissions: [ 'MANAGE_MESSAGES', 'MANAGE_CHANNELS' ]
        })
    ],
    run: (ctx) => {
        const count = ctx.arguments.getNumber('count');

        ctx.channel.bulkDelete(count, true)
            .then(collection => {
                ctx.safeReply({
                    content: `🧹 Smazal \`${collection.size}\` zpráv`,
                    ephemeral: true
                })
            })
            .catch(e => {
                ctx.safeReply({
                    content: e.toString(),
                    ephemeral: true
                })
            })
    }
})