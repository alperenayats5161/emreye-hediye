const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  

  const nameles = new Discord.MessageEmbed()

  .setColor("GREEN")

  .setTitle('⊹  Spemin Y.  ⊹ ')

  .addField("<a:insta:791668509980491827> **• | s.kayıt-kanal-ayarla #kanal**",`Üyelerin Kayıt Olacagi Kanal`)
  
  .addField("<a:insta:791668509980491827> **• | s.kayıt-log-ayarla #kanal**",`Kayıt Olduklarında Bildirimin Gidecegi Kanal`)
  
  .addField("<a:insta:791668509980491827> **• | s.giriş-mesajı #kanal**",`Hosgeldin Mesajının Atılcagı Kanal`)
  
  .addField("<a:insta:791668509980491827> **• | s.yetkili-rol-ayarla**",`Yetkili Rol @etiket `)

  .addField("<a:insta:791668509980491827> **• | s.erkek-rol-ayarla @rol**",`Erkek Rol @etiket`)
  
  .addField("<a:insta:791668509980491827> **• | s.kadın-rol-ayarla @rol**",`Kadın Rol Etiket`)
  
  .addField("<a:insta:791668509980491827> **• | s.kayıt-alınacak-rol-ayarla**",`Unregister Rolunuz`)
  
  .addField("<a:insta:791668509980491827> **• |  s.kayıtbilgi **",`Veya s.kayıtbilgi @kullanıcı`)
  
  .addField("<a:insta:791668509980491827> **• |  s.kayıt-sistemini-kapat **",`kayıtsistemini kapatır`)
  
      
  
  .setDescription("[Ekle](https://discord.com/oauth2/authorize?client_id=791661044102856724&scope=bot&permissions=136) | [Destek](https://discord.gg/AufP935X) " )
  .setImage(`https://images-ext-2.discordapp.net/external/IJw4xxQ_Fm9h7RypguwbYLoOjU_LFuM0zQQoX8KrVY0/https/api.creavite.co/out/c6295960-e061-4ac7-bb66-ab3fbb3f86ca_standard.gif`)
  

 message.channel.send(nameles)

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ['help', 'h', 'y', 'sunucukayıt']

}

exports.help = {

  name: 'sunucukayıt',

  description: 'Yardım Menüsünü Açar',

  usage: 'sunucukayıt'

}