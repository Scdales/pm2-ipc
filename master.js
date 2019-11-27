const pm2 = require('pm2');

console.log('Starting master');

pm2.connect(function() {
    pm2.sendDataToProcessId({
        type : 'process:msg',
        data : {
            some : 'data',
            hello : true
        },
        id   : 1, // id of procces from "pm2 list" command or the position in the ecosystem.config.js app array
        topic: 'some topic'
        }, function(err, res) {
    });
});
  
pm2.launchBus(function(err, bus) {
    bus.on('process:msg', function(packet) {
      console.log('Message from slave:', packet);
    });
});