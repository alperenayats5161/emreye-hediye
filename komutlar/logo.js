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
    .addField(`<a:ucurtma:794944431207088158> **alevlogo**`, 's.alevlogo Yazdırmak İstedigin Yazı', true)
    .addField(`<a:ucurtma:794944431207088158>  **altınlogo**`, 's.altınlogo Yazdırmak İstedigin Yazı', false)
    .addField(`<a:ucurtma:794944431207088158> **basitlogo**`, 's.basitlogo Yazdırmak İstedigin Yazı', true)
    .addField(`<a:ucurtma:794944431207088158> **elmaslogo**`, 's.elmaslogo Yazdırmak İstedigin Yazı', false)
    .addField(`<a:ucurtma:794944431207088158> **dinamiklogo**`, 's.dinamiklogo Yazdırmak İstedigin Yazı', true)
    .addField(`<a:ucurtma:794944431207088158> **habbologo**`, 's.habbologo Yazdırmak İstedigin Yazı', false)
    .addField(`<a:ucurtma:794944431207088158> **kalınlogo**`, 's.kalınlogo Yazdırmak İstedigin Yazı', true)
    .addField(`<a:ucurtma:794944431207088158> **kalp**`, 's.kalp Yazdırmak İstedigin Yazı', false)
    .addField(`<a:ucurtma:794944431207088158> **discord**`, 's.discord Yazdırmak İstedigin Yazı', true)
    .addField(`<a:ucurtma:794944431207088158> **cool**`, 's.cool Yazdırmak İstedigin Yazı', false)
    .addField(`<a:ucurtma:794944431207088158> **comic**`, 's.comic Yazdırmak İstedigin Yazı', true)
    .addField(`<a:ucurtma:794944431207088158> **bubble2**`, 's.bubble2 Yazdırmak İstedigin Yazı', false)
    .addField(`<a:ucurtma:794944431207088158> **arrow**`, 's.arrow Yazdırmak İstedigin Yazı', true)
    
    
    
    
    

    .setFooter('Developer LoeSad', client.user.avatarURL())
    .setImage('https://images-ext-2.discordapp.net/external/IJw4xxQ_Fm9h7RypguwbYLoOjU_LFuM0zQQoX8KrVY0/https/api.creavite.co/out/c6295960-e061-4ac7-bb66-ab3fbb3f86ca_standard.gif')
    .setTimestamp()
    message.channel.send(embed);
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['logo'],
    permLevel: 0,
    kategori: "bot",
  category: "bot"
  };
  
  exports.help = {
    name: 'logo',
    description: 'logo.',
    usage: 'logo',
    enname: 'logo',
    endescription: 'Bot Registery',
    enusage: 'logo'
  };

 
     