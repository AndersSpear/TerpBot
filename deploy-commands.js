#!/home/pi/n/bin/node
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
<<<<<<< HEAD
const { clientID, guildID, token } = require('config.json');
=======
const { clientID, guildID, token } = require('./config.json');
>>>>>>> fb2cd97 (made paths relative)
const fs = require("node:fs");

const commands = [];

<<<<<<< HEAD
const commandFiles = fs.readdirSync('commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`commands/${file}`);
=======
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
>>>>>>> fb2cd97 (made paths relative)
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);
//console.log(commands);
rest.put(Routes.applicationGuildCommands(clientID, guildID), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);
