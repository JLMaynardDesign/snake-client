const {connect} = require("./client");
const {setupInput} = require("./play.js");

console.log("Connecting ...");
connect();

setupInput();

