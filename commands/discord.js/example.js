const axios = require('axios'); // specify every dependencies your command uses
module.exports = {
  name: '{{ custom }}', 
  description: 'describe your command',
  async execute(interaction) {
    await interaction.reply('Pong !')
  }
}
