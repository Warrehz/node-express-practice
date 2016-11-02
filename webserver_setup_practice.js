// require / import the http module
var http = require('http');

// ports we want to lisen to
var port_1 = 7777;
var port_2 = 7778;

// a function that handles requests and sends a response
function handleRequest_1(request, response) {

  response.end('You are calm and collected. Great job!');

}

function handleRequest_2(request, response) {

  response.end('How did you manage this? You have no idea what you are doing.');

}

// creates a server
var server_1 = http.createServer(handleRequest_1);
var server_2 = http.createServer(handleRequest_2);

// start servers
server_1.listen(port_1, function() {
  // callback triggered when server is listening
  console.log('Listening in on http://localhost port: ' + port_1);

});

server_2.listen(port_2, function() {
  // callback triggered when server is listening
  console.log('Listening in on http://localhost port: ' + port_2);

});
