console.log("El bot está on");

const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const YoutubeDL = require('youtube-dl');

const bot= new Discord.Client();


bot.on('ready', () => {
  bot.user.setUsername('MusicKK');
  bot.user.setPresence({ game: { name: '+help', type: 0 } });
})

bot.on('message',(message) => {
    
    //text command
    if (message.content === 'kk'){
      message.channel.send(wrap('Me tení podrío.'));
      
    };
    if (message.content === 'tomisad') {
      message.channel.sendFile('./img/tomisad.jpeg');
    };

    
    const streamOptions = { seek: 0, volume: 0.3 };
    var comandos = [];
    //music voice
    sonido("90s","mp3", 0.3);
    sonido("ajaj", "mp3", 0.4);
    sonido("ameno","mp3", 1);
    sonido("brain power","mp3", 0.4);
    sonido("ddd","mp3", 1);
    sonido("dejavu","mp3", 0.4);
    sonido("fornai","mp3", 1);
    sonido("kkchucrut", "ogg", 1);
    sonido("kkhomero", "ogg", 1);
    sonido("kkpodrio", "ogg", 1);
    sonido("likey", "mp3", 0.6);
    sonido("likey2", "mp3", 0.6);
    sonido("loquendo", "mp3", 1);
    sonido("patan","ogg", 1);
    sonido("pompom","mp3", 1);
    sonido("renai","mp3", 1);
    sonido("sblend","mp3", 0.7);
    sonido("signal","mp3", 0.5);
    sonido("skra","mp3", 1);
    sonido("spongebob","mp3", 1);
    sonido("stars","mp3", 0.5);
    sonido("triple", "mp3", 1);
    sonido("whatislove", "mp3", 0.5);    
    sonido("wupiti","ogg", 1);
    sonido("yuki", "mp3", 0.4);
    sonido("heartshaker", "mp3", 0.4);
    sonido("noknok", "mp3", 0.4);
    sonido("widow", "mp3", 1);
    sonido("niñorata", "mp3", 1);
    sonido("coco", "mp3", 0.6);
    sonido("gameover", "mp3", 0.6);
    sonido("tokyo", "mp3", 0.6);
    sonido("titanic", "mp3", 0.7);
    sonido("bluesky", "mp3", 0.7);
    sonido("vonosabi", "mp3", 0.5);
    sonido("darude", "mp3", 0.6);
    sonido("ssj3", "mp3", 0.5);
    sonido("thisisamerica", "mp3", 0.5);
    sonido("smile", "mp3", 0.5);
    sonido("losiento", "mp3", 0.5);
    sonido("bumbum", "mp3", 0.5);
    sonido("sonic", "mp3", 0.4);
    sonido("pumpum", "mp3", 0.3);
    sonido("nice", "mp3", 0.3);
    sonido("callatevo", "mp3", 1);
    sonido("homeroxino", "mp3", 1);
    sonido("choche", "mp3", 1);
    sonido("september", "mp3", 0.7);
    sonido("fernanflo", "mp3", 0.4);
    sonido("doit", "mp3", 0.4);
    sonido("pizza", "mp3", 0.7);
    sonido("mybody", "mp3", 0.5);
    sonido("sempai", "mp3", 0.7);
    sonido("dance", "mp3", 0.4);
    sonido("onegai", "mp3", 1);
    
    

    function sonido(title, ext, vol){
      comandos.push({title, ext, vol});
      if (message.content === title) {
        if (message.member.voiceChannel) {
          message.member.voiceChannel.leave();
          message.member.voiceChannel.join()
            .then(connection => { 
              message.channel.send({
                embed: {
                    color: 3447003,
                    description: "*Escuchando* : **__"+message.content+"__**."
                }
              }).then(
                function (message){
                    message.react('🎶');
                    message.react(bot.emojis.get('383112963344826368'));
                }
              );
              const dispatcher = connection.playFile('./song/'+message.content+'.'+ext+'');
              dispatcher.setVolume(vol);
              dispatcher.on('end', () => {
                dispatcher.end();
                message.member.voiceChannel.leave();
              });
              dispatcher.on('error', e => {
                console.log(e);
              });
            })
            .catch(console.log);
        } else {
          message.reply('Necesita estar en una sala!');
        }
      };
    };

    //unir comandos
    function unirComandos(objeto) {
      var resultado = "";
      for (var i in objeto) {
        if (objeto.hasOwnProperty(i)) {
            resultado += objeto[i]+ "\n\t";
        }
      }
      return resultado;
    };

    //arreglo comandos random
    var vozrrr = [];
    for (var i=0;i<comandos.length;i++){
      vozrrr.push(comandos[i].title);
    }
    var vozrr = vozrrr.sort();
    var vozr = unirComandos(vozrr);
    
    //arreglo de comandos de chat
    var comandoschat = [];
    comandoschat.push("+del <cantidad>");
    comandoschat.push("kk");
    comandoschat.push("tomisad");
    var chatr = unirComandos(comandoschat);

    //arreglo comandos musica
    var comandosmusica = [];
    comandosmusica.push("+play <cancion>");
    comandosmusica.push("+lista");
    comandosmusica.push("+limpiarlista");    
    comandosmusica.push("+skip");
    comandosmusica.push("+resume");
    comandosmusica.push("+pause");
    comandosmusica.push("+volume");
    comandosmusica.push("+exit");
    var chatm = unirComandos(comandosmusica);


     //PRUEBA
    if (message.content.startsWith('+')) {
      const command = message.content.substring(1).split(/[ \n]/)[0].toLowerCase().trim();
      const suffix = message.content.substring(1 + command.length).trim();
      switch (command) {
				case 'play':
					return play(message, suffix);
				case 'skip':
					return skip(message, suffix);
				case 'lista':
					return lista(message, suffix);
				case 'pause':
					return pause(message, suffix);
				case 'resume':
					return resume(message, suffix);
				case 'volume':
					return volume(message, suffix);
				case 'exit':
					return exit(message, suffix);
				case 'limpiarlista':
          return limpiarlista(message, suffix);
        case 'del':
          return limpiarchat(message, suffix);
        case 'help':
          return help(message, chatr, chatm);
        case 'randomlist':
          return randomlist(message, vozr);
        case 'random':
          return randomvoz(message, comandos);
			}
    }
    //FINPRUEBA
});
//reply, @tu, mensaje
//send o sendMessage -> escribir normal
//react reacciona mensaje
function help(message, chatr, chatm) {
  // Send the user's avatar URL
  message.channel.send({embed: {
    color: 15158332,
    description: "**__Comandos__**.\n\n__Chat:__\n\t"+chatr+"\n__Canción:__\n\t"+chatm+"\n__Voz Random:__\n\t+randomlist\n\t+random\n\n Comandos 'Canción' y 'Voz random' no son compatibles.\nUtilizar +exit antes de cambiar."
  }});
};
function randomlist(message, vozr) {
  message.channel.send({embed: {
    color: 15158332,
    description: "**__Voz Random:__**\n\t"+vozr+""
  }});
};
function randomvoz(message, comandos){

  var indice = Math.floor(Math.random() * comandos.length);

  if (message.member.voiceChannel) {
    message.member.voiceChannel.leave();
    message.member.voiceChannel.join()
      .then(connection => { 
        message.channel.send({
          embed: {
              color: 3447003,
              description: "*Escuchando* : **__"+comandos[indice].title+"__**."
          }
        }).then(
          function (message){
              message.react('🎶');
              message.react(bot.emojis.get('383112963344826368'));
          }
        );
        const dispatcher = connection.playFile('./song/'+comandos[indice].title+'.'+comandos[indice].ext+'');
        dispatcher.setVolume(comandos[indice].vol);
        dispatcher.on('end', () => {
          dispatcher.end();
          message.member.voiceChannel.leave();
        });
        dispatcher.on('error', e => {
          console.log(e);
        });
      })
      .catch(console.log);
  } else {
    message.reply('Necesita estar en una sala!');
  }
}
//funciones de prueba
let queues = {};

function wrap(text) {
  const lorkk = bot.emojis.get("383112393087123456");
	return `${lorkk}`+'``\n' + text.replace(/`/g, '`' + String.fromCharCode(8203)) + '\n``';
}

function getQueue(server) {
  // Check if global queues are enabled.
  if (false) server = '_'; // Change to global queue.

  // Return the queue.
  if (!queues[server]) queues[server] = [];
  return queues[server];
}
//play
function play(msg, suffix) {
  // Make sure the user is in a voice channel.
  if (!false && msg.member.voiceChannel === undefined) return msg.channel.send(wrap('No estás en un canal de voz.'));

  // Make sure the suffix exists.
  if (!suffix) return msg.channel.send(wrap('No dijiste ningún vídeo!'));

  // Get the queue.
  const queue = getQueue(msg.guild.id);

  // Check if the queue has reached its maximum size.
  if (queue.length >= 5) {
    return msg.channel.send(wrap('La lista está completa!'));
  }

  // Get the video information.
  msg.channel.send(wrap('Buscando...')).then(response => {
    var searchstring = suffix
    if (!suffix.toLowerCase().startsWith('http')) {
      searchstring = 'gvsearch1:' + suffix;
    }

    YoutubeDL.getInfo(searchstring, ['-q', '--no-warnings', '--force-ipv4'], (err, info) => {
      // Verify the info.
      if (err || info.format_id === undefined || info.format_id.startsWith('0')) {
        return response.edit(wrap('Vídeo no válido!'));
      }

      info.requester = msg.author.id;

      // Queue the video.
      response.edit(wrap('Lista: ' + info.title)).then(() => {
        queue.push(info);
        // Play if only one element in the queue.
        if (queue.length === 1) executeQueue(msg, queue);
      }).catch(console.log);
    });
  }).catch(console.log);
}
//lista
function lista(msg, suffix) {
  // Get the queue.
  const queue = getQueue(msg.guild.id);

  // Get the queue text.
  const text = queue.map((video, index) => (
    (index + 1) + ': ' + video.title
  )).join('\n');

  // Get the status of the queue.
  let queueStatus = 'Nada por aquí';
  const voiceConnection = bot.voiceConnections.find(val => val.channel.guild.id == msg.guild.id);
  if (voiceConnection !== null) {
    const dispatcher = voiceConnection.player.dispatcher;
    queueStatus = dispatcher.paused ? 'Pausada' : 'Reproduciendo';
  }

  // Send the queue and status.
  msg.channel.send(wrap('Lista (' + queueStatus + '):\n' + text));
}
function executeQueue(msg, queue) {
  // If the queue is empty, finish.
  if (queue.length === 0) {
    msg.channel.send(wrap('Lista terminada.'));

    // Leave the voice channel.
    const voiceConnection = bot.voiceConnections.find(val => val.channel.guild.id == msg.guild.id);
    if (voiceConnection !== null) return voiceConnection.disconnect();
  }

  new Promise((resolve, reject) => {
    // Join the voice channel if not already in one.
    const voiceConnection = bot.voiceConnections.find(val => val.channel.guild.id == msg.guild.id);
    if (voiceConnection === null) {
      if (false) {
        msg.guild.channels.find('name', false).join().then(connection => {
          resolve(connection);
        }).catch((error) => {
          console.log(error);
        });

      // Check if the user is in a voice channel.
      } else if (msg.member.voiceChannel) {
        msg.member.voiceChannel.join().then(connection => {
          resolve(connection);
        }).catch((error) => {
          console.log(error);
        });
      } else {
        // Otherwise, clear the queue and do nothing.
        queue.splice(0, queue.length);
        reject();
      }
    } else {
      resolve(voiceConnection);
    }
  }).then(connection => {
    // Get the first item in the queue.
    const video = queue[0];

    console.log(video.webpage_url);

    // Play the video.
    msg.channel.send(wrap('Escuchando: ' + video.title)).then(() => {
      let dispatcher = connection.playStream(ytdl(video.webpage_url, {filter: 'audioonly'}), {seek: 0, volume: (50/100)});

      connection.on('error', (error) => {
        // Skip to the next song.
        console.log(error);
        queue.shift();
        executeQueue(msg, queue);
      });

      dispatcher.on('error', (error) => {
        // Skip to the next song.
        console.log(error);
        queue.shift();
        executeQueue(msg, queue);
      });

      dispatcher.on('end', () => {
        // Wait a second.
        setTimeout(() => {
          if (queue.length > 0) {
            // Remove the song from the queue.
            queue.shift();
            // Play the next song in the queue.
            executeQueue(msg, queue);
          }
        }, 1000);
      });
    }).catch((error) => {
      console.log(error);
    });
  }).catch((error) => {
    console.log(error);
  });
}
//pause
function pause(msg, suffix) {
  // Get the voice connection.
  const voiceConnection = bot.voiceConnections.find(val => val.channel.guild.id == msg.guild.id);
  if (voiceConnection === null) return msg.channel.send(wrap('No hay nada escuchandose.'));

  if (!isAdmin(msg.member))
    return msg.channel.send(wrap('No tienes permisos para esto.'));

  // Pause.
  msg.channel.send(wrap('Lista pausada.'));
  const dispatcher = voiceConnection.player.dispatcher;
  if (!dispatcher.paused) dispatcher.pause();
}
//resume
function resume(msg, suffix) {
  // Get the voice connection.
  const voiceConnection = bot.voiceConnections.find(val => val.channel.guild.id == msg.guild.id);
  if (voiceConnection === null) return msg.channel.send(wrap('No hay música escuchandose.'));

  if (!isAdmin(msg.member))
    return msg.channel.send(wrap('No tienes permisos para esto.'));

  // Resume.
  msg.channel.send(wrap('Lista reanudado.'));
  const dispatcher = voiceConnection.player.dispatcher;
  if (dispatcher.paused) dispatcher.resume();
}
function canSkip(member, queue) {
  if (false) return true;
  else if (queue[0].requester === member.id) return true;
  else if (isAdmin(member)) return true;
  else return false;
}
function isAdmin(member) {
  return member.hasPermission("ADMINISTRATOR");
}
//saltar
function skip(msg, suffix) {
  // Get the voice connection.
  const voiceConnection = bot.voiceConnections.find(val => val.channel.guild.id == msg.guild.id);
  if (voiceConnection === null) return msg.channel.send(wrap('No hay música escuchandose.'));

  // Get the queue.
  const queue = getQueue(msg.guild.id);

  if (!canSkip(msg.member, queue)) return msg.channel.send(wrap('No puedes cambiar la canción.')).then((response) => {
    response.delete(5000);
  });

  // Get the number to skip.
  let toSkip = 1; // Default 1.
  if (!isNaN(suffix) && parseInt(suffix) > 0) {
    toSkip = parseInt(suffix);
  }
  toSkip = Math.min(toSkip, queue.length);

  // Skip.
  queue.splice(0, toSkip - 1);

  // Resume and stop playing.
  const dispatcher = voiceConnection.player.dispatcher;
  if (voiceConnection.paused) dispatcher.resume();
  dispatcher.end();

  msg.channel.send(wrap('Saltando ' + toSkip + '!'));
}
//salir
function exit(msg, suffix) {
  if (isAdmin(msg.member)) {
    const voiceConnection = bot.voiceConnections.find(val => val.channel.guild.id == msg.guild.id);
    if (voiceConnection === null) return msg.channel.send(wrap('No estoy en ningún canal!.'));
    // Clear the queue.
    const queue = getQueue(msg.guild.id);
    queue.splice(0, queue.length);

    // End the stream and disconnect.
    voiceConnection.player.dispatcher.end();
    voiceConnection.disconnect();
  } else {
    msg.channel.send(wrap('No tienes permiso para usar este comando!'));
  }
}
//volumen
function volume(msg, suffix) {
  // Get the voice connection.
  const voiceConnection = bot.voiceConnections.find(val => val.channel.guild.id == msg.guild.id);
  if (voiceConnection === null) return msg.channel.send(wrap('No hay música escuchandose.'));

  if (!isAdmin(msg.member))
    return msg.channel.send(wrap('No tienes permisos para esto.'));

  // Get the dispatcher
  const dispatcher = voiceConnection.player.dispatcher;

  if (suffix > 200 || suffix < 0) return msg.channel.send(wrap('Volumen fuera de rango!')).then((response) => {
    response.delete(5000);
  });

  msg.channel.send(wrap("Volumen definido en " + suffix));
  dispatcher.setVolume((suffix/100));
}
//limpiar lista
function limpiarlista(msg, suffix) {
  if (isAdmin(msg.member)) {
    const queue = getQueue(msg.guild.id);

    queue.splice(0, queue.length);
    msg.channel.send(wrap('Lista limpia!'));
  } else {
    msg.channel.send(wrap('No tienes permiso para usar este comando!'));
  }
}
//limpiar mensajes
function limpiarchat(msg, suffix){
  if (isAdmin(msg.member)) {
    const cantidad = parseInt(suffix);
    if(!cantidad || cantidad < 2 || cantidad > 100){
      msg.reply(wrap('Error, comando no válido.'));
    }else{
      msg.channel.bulkDelete(cantidad).catch(error => msg.reply(`Error: ${error}`));
      msg.channel.send(wrap('Mensajes borrados.'));
    }
  } else {
    msg.channel.send(wrap('No tienes permiso para usar este comando!'));
  }
}


bot.login(process.env.keyapi);