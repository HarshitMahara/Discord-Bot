import dotenv from "dotenv";
dotenv.config();

const token = process.env.TOKEN;

import { Client, GatewayIntentBits } from "discord.js";
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
  ],
});

client.on("messageCreate", (message) => {
  console.log(message.content);
  if (message.author.bot) return;
  message.reply({
    content: `Hi ${message.author.globalName} !!
Welcome to the Server`,
  });
  console.log(message.reply);
});

client.on("interactionCreate", (interaction) => {
  console.log(interaction);
});

client.login(token);
