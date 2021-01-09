const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  

  const nameles = new Discord.MessageEmbed()

  .setColor("GREEN")

  .setTitle('⊹  Spemin Y.  ⊹ ')

  .addField("<a:insta:791668509980491827> **• | s.logo**",`Botun istatistiklerini gösterir`)
  
  .addField("<a:insta:791668509980491827> **• | s.eglence**",`Eglence Komutlarını Gösterir`)
  
  .addField("<a:insta:791668509980491827> **• | s.moderasyon**",`Moderasyon Komutlarını Gösterir`)
  
  .addField("<a:insta:791668509980491827> **• | s.yardım1**",`Yardım1 Komutlarını Gösterir`)

  
  
      
  
  .setDescription("[Ekle](https://discord.com/oauth2/authorize?client_id=791661044102856724&scope=bot&permissions=136) | [Destek](https://discord.gg/AufP935X)  |  [Spemin+](https://discord.com/oauth2/authorize?client_id=795721561977257996&scope=bot&permissions=0)" )
  .setImage(`https://images-ext-2.discordapp.net/external/IJw4xxQ_Fm9h7RypguwbYLoOjU_LFuM0zQQoX8KrVY0/https/api.creavite.co/out/c6295960-e061-4ac7-bb66-ab3fbb3f86ca_standard.gif`)
  

 message.channel.send(nameles)

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ['help', 'h', 'y', 'yardım']

}

exports.help = {

  name: 'yardım',

  description: 'Yardım Menüsünü Açar',

  usage: 'yardım'

}