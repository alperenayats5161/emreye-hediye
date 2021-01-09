const Discord = require("discord.js"); 
const client = new Discord.Client();
const moment = require("moment");
const os = require('os');
require("moment-duration-format");

module.exports.run = async(client, message, args) => {


    const embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle(` ⊹  Spemin Y.  ⊹ `)
    .setThumbnail(client.user.avatarURL())
    .setDescription(`**» Linkler: [Destek Sunucumuz](https://discord.gg/BwBGhr7xWx)**`)
    .addField(`<:GreenHeart:794946138369294346> **istatistik**`, 's.istatistik :)', true)
    .addField(`<:GreenHeart:794946138369294346>  **ilet**`, 's.ilet Bu Kodla Bana Ulasa Bilirsiniz', false)
    .addField(`<:GreenHeart:794946138369294346> **sa-as**`, 's.sa-as aç/kapat La Sa-as Sistemini Aktif Edebilirsin', true)
    .addField(`<:GreenHeart:794946138369294346> **sunucuresmi**`, 's.sunucuresmi :)', false)
    .addField(`<:GreenHeart:794946138369294346> **say**`, 's.say Sunucundaki Uye Sayisini Bulabilirsin', true)
     .addField(`<:GreenHeart:794946138369294346> **bug-bildir**`, 's.bug-bildir Bottaki Buglari Bildire Bilirsin', false)
      .addField(`<:GreenHeart:794946138369294346> **istek-kod**`, 's.istek-kod istedigin kodu yaz botta olmasını :)', true)
    

    .setFooter('Developer LoeSad', client.user.avatarURL())
    .setImage(`https://images-ext-2.discordapp.net/external/IJw4xxQ_Fm9h7RypguwbYLoOjU_LFuM0zQQoX8KrVY0/https/api.creavite.co/out/c6295960-e061-4ac7-bb66-ab3fbb3f86ca_standard.gif`)
    .setTimestamp()
    message.channel.send(embed);
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yardım1',"y1"],
    permLevel: 0,
    kategori: "bot",
  category: "bot"
  };
  
  exports.help = {
    name: 'yardım1',
    description: 'yardım1',
    usage: 'yardım1',
    enname: 'yardım1',
    endescription: 'yardım1',
    enusage: 'yardım1'
  };

 
     