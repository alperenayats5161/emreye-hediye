const Discord = require("discord.js"); 
const client = new Discord.Client();
const moment = require("moment");
const os = require('os');
require("moment-duration-format");

module.exports.run = async(client, message, args) => {


    const embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle(`⊹  Spemin Y.  ⊹ `)
    .setThumbnail(client.user.avatarURL())
    .setDescription(`**» Linkler: [Destek Sunucumuz](https://discord.gg/BwBGhr7xWx)**`)
    .addField(`<a:dnya:794945744536600596> **aşk**`, 's.aşk Sevgilin İle Arandaki Aşkı Ölç', true)
    .addField(`<a:dnya:794945744536600596>  **afk**`, 's.afk Afk Kalmak İcin Kullanabilirsin', true)
    .addField(`<a:dnya:794945744536600596> **agla**`, 's.agla Bu Kodla Botu AglataBilirsin', true)
    .addField(`<a:dnya:794945744536600596> **espiri**`, 's.espiri Yaz Gör :)', true)
     .addField(`<a:dnya:794945744536600596> **balıktut**`, 's.balıktut balık tutarsın', true)
     .addField(`<a:dnya:794945744536600596> **fbı**`, 's.fbı Knk evine fbı girer dikkat et', true)
     .addField(`<a:dnya:794945744536600596> **kasaaç**`, 's.kasaaç kasa acabilirsin', true)
    .addField(`<a:dnya:794945744536600596> **kedi**`, 's.kedi kedi resmi gosterir', true)
    .addField(`<a:dnya:794945744536600596> **köpek**`, 's.köpek köpek resmi gosterir', true)
    .addField(`<a:dnya:794945744536600596> **kapaklaflar**`, 's.kapaklaf anlatmaya gerek yok', true)
    .addField(`<a:dnya:794945744536600596> **maymun**`, 's.maymun maymun gifi atar', true)
    .addField(`<a:dnya:794945744536600596> **saksak**`, 's.şakşak şakşak resmi atar', true)
    
    
    
    
    
    
    
    
    

    .setFooter('Developer LoeSad', client.user.avatarURL())
     .setImage(`https://images-ext-2.discordapp.net/external/IJw4xxQ_Fm9h7RypguwbYLoOjU_LFuM0zQQoX8KrVY0/https/api.creavite.co/out/c6295960-e061-4ac7-bb66-ab3fbb3f86ca_standard.gif`)
    .setTimestamp()
    message.channel.send(embed);
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['eglence'],
    permLevel: 0,
    kategori: "bot",
  category: "bot"
  };
  
  exports.help = {
    name: 'eglence',
    description: 'eglence.',
    usage: 'eglence',
    enname: 'eglence',
    endescription: 'Bot Registery',
    enusage: 'eglence'
  };

 
     