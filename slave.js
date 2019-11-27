console.log('Starting Slave');

process.on('message', function(packet) {
    console.log('Message from master: ', packet)
    process.send({
      type : 'process:msg',
      data : {
       success : true
      }
   });
  });