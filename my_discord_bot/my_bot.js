const Discord=require('discord.js')
const client=new Discord.Client();
client.on('ready',()=>{
    console.log("Connected as "+client.user.tag)
    client.user.setActivity("with JS")
    client.guilds.cache.forEach((guild) => {
        console.log(" - " + guild.name)
        guild.channels.cache.forEach((channel)=>{
            console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
        })
        // General Channel ID: 778319412850720781
    })
    let generalChannel=client.channels.cache.get("778319412850720781")
    const attachment=new Discord.MessageAttachment("https://images.app.goo.gl/PHUcaewjRJZMB8js5")
    generalChannel.send(attachment)
})
client.on('message',(receivedMessage)=>{
    if(receivedMessage.author==client.user)
    {
        return
    }
    receivedMessage.channel.send("Message received: "+receivedMessage.author.toString()+": "+receivedMessage.content)
    receivedMessage.react("😂")
   /* receivedMessage.guild.emojis.cache.forEach(customEmoji =>{
        console.log(`${customEmoji.name} ${customEmoji.id}`)
        receivedMessage.react(customEmoji)
        // Id 778354458291339295
    })*/
    let customEmoji=receivedMessage.guild.emojis.cache.get("778354458291339295")
    receivedMessage.react(customEmoji)

})


bot_secret_token="Nzc4MzIxMTM2NTU4OTMyMDM4.X7QSCw.DSwcdAqEnvmF_x5fDoWdEdQw1EY"
client.login(bot_secret_token)
