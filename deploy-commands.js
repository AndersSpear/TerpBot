#!/home/pi/n/bin/node
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientID, guildID, token } = require('/home/pi/projects/terpbot/config.json');
const fs = require("node:fs");

const commands = [];

const commandFiles = fs.readdirSync('/home/pi/projects/terpbot/commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`/home/pi/projects/terpbot/commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);
//console.log(commands);
rest.put(Routes.applicationGuildCommands(clientID, guildID), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);
