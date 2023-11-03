var net = require('net');

var client = new net.Socket();
client.connect({ keepAlive: true, port: 4242, host: 'tcpbin.com' }, function() {
	console.log('Connected');
});

client.on('data', function(data) {
	console.log('Received: ' + data);
});

client.on('close', function() {
	console.log('Connection closed');
});

client.on('ready', function() {
  console.log('Ready');
  client.write('Sending data from client\n');
});