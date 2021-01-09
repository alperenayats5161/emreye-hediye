const Discord = require("discord.js"); 
const client = new Discord.Client();
const moment = require("moment");
const os = require('os');
require("moment-duration-format");

module.exports.run = async(client, message, args) => {


    const embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle(`⊹  Spemin Y.  ⊹  `)
    .setThumbnail(client.user.avatarURL())
    .setDescription(`**» Linkler: [Destek Sunucumuz](https://discord.gg/BwBGhr7xWx)**`)
    .addField(`<a:yesilkz:794940748788400160> **anket**`, 's.anket anket baslatır', true)
    .addField(`<a:yesilkz:794940748788400160> **ban**`, 's.ban @etiket Attıgın Kisi banlar', false)
    .addField(`<a:yesilkz:794940748788400160> **kick**`, 's.kick @etiket Attıgın Kisi Sunucudan Atar', true)
    .addField(`<a:yesilkz:794940748788400160> **banlist**`, 's.banlist Sunucudan Ban Yiyenleri Gosterir', false)
    .addField(`<a:yesilkz:794940748788400160> **slowmode**`, 's.slowmode  Kanalın Hızını Ayarlarsın', true)
    .addField(`<a:yesilkz:794940748788400160> **sil**`, 's.sil mesajları siler', false)
    .addField(`<a:yesilkz:794940748788400160> **rol-ver**`, 's.rol-ver @etiket @rol Yazarak Rol Verebilirsiniz', true)
    .addField(`<a:yesilkz:794940748788400160> **rol-al**`, 's.rol-al @etiket @rol Yazarak Rol Alabilirsiniz', false)
    .addField(`<a:yesilkz:794940748788400160> **küfür-engel**`, 's.küfür-engel aç/kapat yazarak Sunucunda Küfürü Onliye Bilirsin', true)
    .addField(`<a:yesilkz:794940748788400160> **everhereengel**`, 's.everhereengel aç/kapat YazaraK Sunucunda Everyone Ve Here Engelliye Bilirsin Yetkililer Atabilir Sadece', false)
    .addField(`<a:yesilkz:794940748788400160> **otorol**`, 's.otorol @rol #kanal Yazarak Sunucuda Otorol Acabilirsin', true)
    .addField(`<a:yesilkz:794940748788400160> **prefix**`, 's.prefix Bu Kodla Eger s. prefixini yazmakta Zorlanıyosanız Kullana Bilirsiniz', false)
    .addField(`<a:yesilkz:794940748788400160> **reklam-engel**`, 's.reklam-engel aç/kapat Sunucunda Reklam Yapılmasını Onliye Bilirsin', true)
    .addField(`<a:yesilkz:794940748788400160> **sayaç-ayarla**`, 's.sayaç-ayarla Sayı', false)
    .addField(`<a:yesilkz:794940748788400160> **sayaç-kanal-ayarla**`, 's.sayaç-kanal-ayarla #kanal', true)
    

    
    
    
  

    .setFooter('Developer LoeSad', client.user.avatarURL())
     .setImage(`https://images-ext-2.discordapp.net/external/IJw4xxQ_Fm9h7RypguwbYLoOjU_LFuM0zQQoX8KrVY0/https/api.creavite.co/out/c6295960-e061-4ac7-bb66-ab3fbb3f86ca_standard.gif`)
    .setTimestamp()
    message.channel.send(embed);
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['moderasyon'],
    permLevel: 0,
    kategori: "bot",
  category: "bot"
  };
  
  exports.help = {
    name: 'moderasyon',
    description: 'moderasyon',
    usage: 'moderasyon',
    enname: 'moderasyon',
    endescription: 'Bot Registery',
    enusage: 'moderasyon'
  };

 
     