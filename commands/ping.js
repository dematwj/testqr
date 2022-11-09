const { SlashCommandBuilder } = require('@discordjs/builders');  0.0 

module.exports = {
	data: new SlashCommandBuilder() 
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('Pong!'); (0000)
	},
};
