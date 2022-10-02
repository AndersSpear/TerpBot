const { SlashCommandBuilder, SelectMenuComponent } = require('@discordjs/builders');
const { GuildMember, Guild, GuildMemberManager } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('role')
		.setDescription('Adds roles...'),

        async execute(interaction) {
            //const m = interaction.guild.members
            //const u=  m.resolve(interaction.options.data[0].user);
            //u.setNickname(interaction.options.data[1].value);
            //const r = `<@${interaction.member.id}> changed **${u.user.username}**'s nickname to ${interaction.options.data[1].value}`
               const r = {
                "content": "Choose up to 16 roles from the dropdown that you would like to add",
                "components": [
                    {
                        "type": 1,
                        "components": [
                            {
                                "type": 3,
                                "custom_id": "role_select",
                                "options":[
                                    {
                                        "value": "she",
                                        "label": "She/Her",
                            
                                        "emoji": {
                                            "name": "",
                                            "id": "990119725143048213"
                                        }
                                    },
                                    {
                                        "value": "they",
                                        "label": "They/Them",
                                        
                                        "emoji": {
                                            "name": "",
                                            "id": "990119724039962664"
                                        }
                                    },
                                    {
                                        "value": "he",
                                        "label": "He/Him",
                                        
                                        "emoji": {
                                            "name": "",
                                            "id": "990119722643243058"
                                        }
                                    },
                                    {
                                        "value": "cs",
                                        "label": "Computer Science",
                                        "description": "nerd",
                                        "emoji": {
                                            "name": "",
                                            "id": "937420726846251030"
                                        }
                                    },
                                    {
                                        "value": "other",
                                        "label": "Other Major",
                                        "description": "Not a cs major/multiple majors",
                                        "emoji": {
                                            "name": "",
                                            "id": "431346786024554506"
                                        }
                                    },
                                    {
                                        "value": "firstyear",
                                        "label": "Freshman",
                                        "description": "Less than 30 credits",
                                        "emoji": {
                                            "name": "",
                                            "id": ""
                                        }
                                    },
                                    {
                                        "value": "secondyear",
                                        "label": "Sophomore",
                                        "description": "Less than 60 credits",
                                        "emoji": {
                                            "name": "",
                                            "id": ""
                                        }
                                    },
                                    {
                                        "value": "thirdyear",
                                        "label": "Junior",
                                        "description": "Less than 90 credits",
                                        "emoji": {
                                            "name": "",
                                            "id": ""
                                        }
                                    },
                                    {
                                        "value": "fourthyear",
                                        "label": "Senior",
                                        "description": "More than 90 credits",
                                        "emoji": {
                                            "name": "",
                                            "id": ""
                                        }
                                    },
                                    {
                                        "value": "transfer",
                                        "label": "Transfer Student",
                                        "description": "Disliked college #1",
                                        "emoji": {
                                            "name": "",
                                            "id": ""
                                        }
                                    },
                                    {
                                        "value": "c131",
                                        "label": "CMSC 131",
                                        "description": "Intro to Object Oriented Programming 1",
                                        "emoji": {
                                            "name": "",
                                            "id": "804395228131229707"
                                        }
                                    },
                                    {
                                        "value": "c132",
                                        "label": "CMSC 132",
                                        "description": "Object Oriented Programming 2",
                                        "emoji": {
                                            "name": "",
                                            "id": "804395228131229707"
                                        }
                                    },
                                    {
                                        "value": "c216",
                                        "label": "CMSC 216",
                                        "description": "Introduction to Computer Systems",
                                        "emoji": {
                                            "name": "",
                                            "id": "804395228151808001"
                                        }
                                    },
                                    {
                                        "value": "c250",
                                        "label": "CMSC 250",
                                        "description": "Discrete Structures",
                                        "emoji": {
                                            "name": "",
                                            "id": ""
                                        }
                                    },
                                    {
                                        "value": "c330",
                                        "label": "CMSC 330",
                                        "description": "Organization of Programming Languages",
                                        "emoji": {
                                            "name": "",
                                            "id": "804395228051537970"
                                        }
                                    },
                                    {
                                        "value": "c351",
                                        "label": "CMSC 351",
                                        "description": "Algorithms...",
                                        "emoji": {
                                            "name": "",
                                            "id": ""
                                        }
                                    },
                                    {
                                        "value": "m140",
                                        "label": "MATH 140",
                                        "description": "Calculus 1",
                                        "emoji": {
                                            "name": "",
                                            "id": ""
                                        }
                                    },
                                    {
                                        "value": "m141",
                                        "label": "MATH 141",
                                        "description": "Calculus 2",
                                        "emoji": {
                                            "name": "",
                                            "id": ""
                                        }
                                    },
                                    {
                                        "value": "m240",
                                        "label": "MATH 240",
                                        "description": "Linear Algebra",
                                        "emoji": {
                                            "name": "",
                                            "id": ""
                                        }
                                    },
                                    {
                                        "value": "m241",
                                        "label": "MATH 241",
                                        "description": "Calculus 3",
                                        "emoji": {
                                            "name": "",
                                            "id": ""
                                        }
                                    },
                                    {
                                        "value": "s400",
                                        "label": "STAT 400",
                                        "description": "Applied Probability and Statistics 1",
                                        "emoji": {
                                            "name": "",
                                            "id": ""
                                        }
                                    },
                                                
                                ],
                                "placeholder": "Choose a role",
                                "min_values": 0,
                                "max_values": 21
                            }
                        ]
                    }
                ],
                "ephemeral": true,
            }         
            //await interaction.reply(r);
            //interaction.deferUpdate();
            
        
            const filter = (interaction) => interaction.isSelectMenu();

            const collector = interaction.channel.createMessageComponentCollector({filter, time: 15000});

            collector.on("collect", async(collected) => {
                const value = collected.values;
                //console.log(value);

                    for (let v in value){
                        //console.log(v);
                        //console.log(value[v]);
                        switch(value[v]){
                            case 'she':
                                collected.guild.roles.fetch('749748438123413587').then(role => collected.member.roles.add(role));
                                break;
                            case 'they':
                                collected.guild.roles.fetch('749748487087980677').then(role => collected.member.roles.add(role));
                                break;
                            case 'he':
                                collected.guild.roles.fetch('749748513474084996').then(role => collected.member.roles.add(role));
                                break;
                            case 'cs':
                                collected.guild.roles.fetch('749748530218008638').then(role => collected.member.roles.add(role));
                                break;
                            case 'other':
                                collected.guild.roles.fetch('749748623235088554').then(role => collected.member.roles.add(role));
                                break;
                            case 'firstyear':
                                collected.guild.roles.fetch('749748643916939321').then(role => collected.member.roles.add(role));
                                break;
                            case 'secondyear':
                                collected.guild.roles.fetch('749748662619340870').then(role => collected.member.roles.add(role));
                                break;
                            case 'thirdyear':
                                collected.guild.roles.fetch('749748691325157497').then(role => collected.member.roles.add(role));
                                break;
                            case 'fourthyear':
                                collected.guild.roles.fetch('749748704701055037').then(role => collected.member.roles.add(role));
                                break;
                            case 'transfer':
                                collected.guild.roles.fetch('749748719385182259').then(role => collected.member.roles.add(role));
                                break;
                            case 'c131':
                                collected.guild.roles.fetch('752616700066791545').then(role => collected.member.roles.add(role));
                                break;
                            case 'c132':
                                collected.guild.roles.fetch('752616781146882089').then(role => collected.member.roles.add(role));
                                break;
                            case 'c216':
                                collected.guild.roles.fetch('752617318114263160').then(role => collected.member.roles.add(role));
                                break;
                            case 'c250':
                                collected.guild.roles.fetch('752647619137896518').then(role => collected.member.roles.add(role));
                                break;
                            case 'c330':
                                collected.guild.roles.fetch('752647757503660155').then(role => collected.member.roles.add(role));
                                break;
                            case 'c351':
                                collected.guild.roles.fetch('752647846880215220').then(role => collected.member.roles.add(role));
                                break;
                            case 'm140':
                                collected.guild.roles.fetch('752642492066824222').then(role => collected.member.roles.add(role));
                                break;
                            case 'm141':
                                collected.guild.roles.fetch('752617288707997788').then(role => collected.member.roles.add(role));
                                break;
                            case 'm240':
                                collected.guild.roles.fetch('752648351098601524').then(role => collected.member.roles.add(role));
                                break;
                            case 'm241':
                                collected.guild.roles.fetch('752648383218450562').then(role => collected.member.roles.add(role));
                                break;
                            case 's400':
                                collected.guild.roles.fetch('752648404118536292').then(role => collected.member.roles.add(role));
                                break;
                            
                            

                        }

                    }
                    const r = `<@${collected.member.id}> added roles: ${value}`;
                    await collected.reply(r).catch(console.error);
                    //interaction.update({
                       // content: "A component interaction was received",
                      //  components: []
                     // })

                     //await collected.message.delete();
                });
            //collector.end();


           await interaction.reply(r).catch(console.error);
            
            //await interaction.reply(r, {ephemeral: true});
        },
	// guildmember.setNickname lets me change the nickname
};
