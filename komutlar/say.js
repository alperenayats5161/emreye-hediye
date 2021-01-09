const Discord = require('discord.js');

exports.run = async (client, message, args) => {
 let güvenlik = message.guild.verificationLevel
  if(güvenlik === "NONE") güvenlik = "Yok"
    if(güvenlik === "LOW") güvenlik = "Düşük"
      if(güvenlik === "MEDIUM") güvenlik = "Orta"
   if(güvenlik === "HIGH") güvenlik = "Yüksek"
     if(güvenlik === "VERY_HIGH") güvenlik = " En Yüksek"
     const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
    let count = 0
  let guild = message.guild;
     let botlar = message.guild.members.cache.filter(m => m.user.bot).size;
    let textChannels = message.guild.channels.cache.filter(m => m.type == "text").size;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  let  çevrimiçi = message.guild.members.cache.filter(m => !m.user.bot && m.user.presence.status !== "offline").size
    const embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setThumbnail(`https://media.discordapp.net/attachments/761099716993613824/771419350828843059/gif_3.gif?width=115&height=115`)
    
        .addField(`<a:kelebek:794943363572432947> **__Sunucudaki Toplam Üye Sayısı__**`,`**${message.guild.memberCount}**`)
    
        .addField(`<a:kelebek:794943363572432947> **__Seslideki Üye Sayısı__**`,`**${count}**`)
    
      .addField(`<a:kelebek:794943363572432947> **__Güvenlik Seviyesi__**`,`**${güvenlik}**`)
    
        .addField(`<a:kelebek:794943363572432947>  **__Yazı Kanalları__**`, `» **${textChannels}**`)
    
        .addField(`<a:kelebek:794943363572432947>  **__Ses Kanalları__**`, `» **${voiceChannels.size}**`)
    
        .addField(`<a:kelebek:794943363572432947>  **__Roller__**`,`»  **${message.guild.roles.cache.size}**`)
    
        .addField(`<a:kelebek:794943363572432947>  **__Emojiler__**`,`»  **${message.guild.emojis.cache.size}**`)
    
       .addField(`<a:kelebek:794943363572432947>  **__Boost Seviyesi__**`,`»  **${message.guild.premiumTier}/3**`)
    
        .addField(`<a:kelebek:794943363572432947>  **__Boost Sayısı__**`,`»  **${message.guild.premiumSubscriptionCount}**`)
   
       .setTitle(`<a:small_orange_diamond:771414619776352277> ${message.author.tag} - Tarafından istendi.`)
    .setImage("https://images-ext-2.discordapp.net/external/IJw4xxQ_Fm9h7RypguwbYLoOjU_LFuM0zQQoX8KrVY0/https/api.creavite.co/out/c6295960-e061-4ac7-bb66-ab3fbb3f86ca_standard.gif")
        .setFooter(`Spemin Bot 2021.`, client.user.avatarURL)
    message.channel.send(embed);

} 


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['say'],
    permLevel: 0
};

exports.help = {
    name: 'say',
    description: 'Say',
    usage: 'say'
}