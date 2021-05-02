const getPlayer = require('../utils/functions/getPlayer');

module.exports = {
	name: 'clear',
	description: __.clear(config.prefix),
	action: async (bot, msg, command) => {
		try {
			const queue = getPlayer(msg.guild, bot);

			const result = await queue.clear(command.combined);
			if (result) msg.channel.send(__.clearedqueue());
		} catch (error) {
			console.error(error);
			msg.channel.send(__.commanderror());
		}
	}
};
