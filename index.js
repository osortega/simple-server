var net = require('net');

var client = new net.Socket();
// Create a server on https://tcpbin.net/ and replace the port below
client.connect({ port: 53417, host: 'tcpbin.net' }, function() {
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