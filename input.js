const connect = require("./client.js");


//stores the active TCP connection object.
let connection;

const handleUserInput = function(key) {

  const w = "Move: up";
  const a = "Move: left";
  const s = "Move: down";
  const d = "Move: right";

  if (key === "a") {
    //process.stdin('Move: left');
    connection.write(a);
    connection.write("Say: left");
  }

  if (key === "w") {
    connection.write(w);
    connection.write("Say: up");
  }

  if (key === "s") {
    connection.write(s);
    connection.write("Say: down");
  }

  if (key === "d") {
    connection.write(d);
    connection.write("Say: right");
  }

  if (key === '\u0003') {
    // \u003 equals to control + c
    process.exit();
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

connect;
module.exports = setupInput;