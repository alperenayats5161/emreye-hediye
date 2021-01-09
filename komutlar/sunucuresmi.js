const umit = require('discord.js');


exports.run = (client, message, params) => {
  
  const TA = new umit.MessageEmbed()
  .setColor("RANDOM")
  .setTitle(`${message.guild.name}`)
  .setFooter(`© Spemin | Tüm hakları saklıdır.`)
  .setImage(message.guild.iconURL(({ format: 'png', dynamic: true, size: 1024 })))
  message.channel.send(TA)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
    aliases: ["sunucupp","sunucu-pp"],
}


exports.help = {
  name: 'sunucuresmi',
  description: '  sunucu resmi',
  usage: 'sunucuresmi',
};
