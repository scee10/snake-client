// establishes a connection with the game server
const net = require("net");

const connect = function () {
 const conn = net.createConnection({
   host: "165.227.47.243",
   port: 50541
 });

 conn.on('connect', function() {
   //this is showing you 
   console.log("Successfully connected to game server!!");
   //this is showing on the server side
   conn.write('Name: Ste');
   // // setTimeout(() => {conn.write('Move: up');}, 5000);
   // for (let i = 0; i < 100; i++) {
   //   setTimeout(() => {
   //     conn.write('Move: up')
   //     conn.write('Move: left')
   //   ;}, 500*i);
   // }
 })
 // interpret incoming data as text
 conn.setEncoding("utf8");
 // this is data FROM the server 
 conn.on('data', function(data) {
   console.log("connected user says:", data);
 })
 return conn;
};

module.exports = {connect};

