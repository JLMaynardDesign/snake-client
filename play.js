//main file for launching the game client
//link to the live stream, so that we can see the game board
//require IP address & port numberconst net = require("net");
//terminate the app with ctrl + c

const net = require('net');

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '192.168.1.29',// IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  console.log("connected to game server");
  console.log("hi");

  return conn;
};

console.log("Connecting ...");
connect();