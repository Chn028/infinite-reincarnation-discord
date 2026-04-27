const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on('ready', () => {
  console.log(`已登入：${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.author.bot) return;

  if (message.content === '開始遊戲') {
    message.reply('【主神】輪迴者已確認，準備投放副本...');
  }

  if (message.content === '狀態') {
    message.reply('【主神】你目前尚未建立角色');
  }
});

client.login(process.env.TOKEN);
