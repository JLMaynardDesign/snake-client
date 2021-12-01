//const net = require('net');

// establishes a connection with the game server

/*const connect = function () {
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
connect(); */

const net = require('net');

const connect = () => {
  const conn = net.createConnection({
    host: '192.168.1.29',
    port: 50541
  });
  conn.setEncoding("utf8");
  console.log("connected to game server");
  return conn;
};

const relay = () => {
  console.log("Connecting....");
  connect();
};

module.exports = {
  connect: connect,
  relay: relay,
};