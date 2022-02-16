const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "10.0.2.15",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('data', function(data) {
    console.log("connected user says:", data);
  })
  return conn;
};

console.log("Connecting ...");
connect();

// console.log("Connecting ...");

// ------------------

// const net = require('net');
// const stdin = process.stdin;
// //We need to specify the address and the port to connect to
// const client = net.createConnection({
//   host: 'localhost',
//   port: 3000
// });
// //We need the encoding to tell the server and the client what kind of data are we transfering
// client.setEncoding('utf8');
// //When I, the client finally connect...........
// client.on('connect', function() {
//   client.write('I have connected!!!');
// })

