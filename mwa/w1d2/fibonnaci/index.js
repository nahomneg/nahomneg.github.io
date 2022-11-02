const child_process= require("child_process");
const newProcess = child_process.spawn('node', ['fibonnaci.js'],{stdio:'inherit'});