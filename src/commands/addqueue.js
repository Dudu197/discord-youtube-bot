const Queue = require('./../utils/Queue');

const command = {
	name: 'addqueue',
	action: async (bot, msg, command) => {
		try {
			const args = Array.from(command.args);
			const queue = new Queue(msg.guild);
			await queue.add(args.join(' '));
			msg.reply(`Added item to the queue!`);
		} catch (error) {
			console.error(error);
		}
	}
};

module.exports = command;
