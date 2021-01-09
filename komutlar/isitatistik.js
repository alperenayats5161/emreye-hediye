const Discord = require ("discord.js");

exports.run = (client, message) => {

  
 const emed = new Discord.MessageEmbed()

.setColor("GREEN")
.setTitle("** ⊹ Spemin İstatistik ⊹ **")
.setThumbnail("")
.setDescription(`

**<a:ysly:794984568196300830> Developer <@676468301433536512>

 <a:executor58:789055033437978634>__Bot Bilgi__\n <a:ysly:794984568196300830>  Toplam Kanal :${client.channels.cache.size} \n<a:ysly:794984568196300830> Toplam Sunucu : ${client.guilds.cache.size} \n<a:ysly:794984568196300830> Toplam Kullanıcı  : ${client.users.cache.size}


<a:executor58:789055033437978634>__Sürümler__\n<a:ysly:794984568196300830> Node.js Sürümü ${process.version}\n <a:ysly:794984568196300830> Discord.js Sürümü ${Discord.version} 

<a:ysly:794984568196300830>  __Pingim__** \n ${client.ws.ping}ms

`)


.addField(`》 Linkler`, `[<a:ysly:794984568196300830> Destek Sunucusu](https://discord.gg/BwBGhr7xWx) **|** [<a:ysly:794984568196300830> Davet Linki](https://discord.com/oauth2/authorize?client_id=791661044102856724&scope=bot&permissions=268959928)`) 
 .setThumbnail("")
.setFooter(client.user.username + "", client.user.avatarURL)
 .setImage(`https://images-ext-2.discordapp.net/external/IJw4xxQ_Fm9h7RypguwbYLoOjU_LFuM0zQQoX8KrVY0/https/api.creavite.co/out/c6295960-e061-4ac7-bb66-ab3fbb3f86ca_standard.gif`)
.setTimestamp()


return message.channel.send(emed)
.then;

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik','BotBilgi','botbilgi','bot-bilgi','Bot-Bilgi'],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
  description: '',
  usage: ''
}; 