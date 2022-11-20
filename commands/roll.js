const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roll')
		.setDescription('Replies with Rolled!'),
	async execute(interaction) {
		await interaction.reply('rolled!');
	},
};
