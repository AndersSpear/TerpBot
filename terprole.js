#!/home/pi/n/bin/node
const { Client, Collection, Intents } = require("discord.js");
const {token, guildID, clientID } = require("/home/pi/projects/terpbot/config.json");
const fs = require("node:fs");

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });


const guild = client.guilds.cache.get(guildID);



client.commands = new Collection();
const commandFiles = fs.readdirSync("/home/pi/projects/terpbot/commands").filter(file => file.endsWith(".js"));

var command = require("/home/pi/projects/terpbot/commands/role.js");
client.commands.set(command.data.name, command);

command = require("/home/pi/projects/terpbot/commands/remove.js");
client.commands.set(command.data.name, command);
/*
for (const file of commandFiles){
    console.log(file);
    const command = require("./commands/${file}");
    client.commands.set(command.data.name, command);
}*/

client.on('interactionCreate', async interaction => {
	//const command=null;
	//if(interaction.isSelectMenu()) command = client.commands.get(interaction.commandNane);
	if (!interaction.isCommand()) return;

	else command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});


// Login to Discord with your client's token
client.login(token);

