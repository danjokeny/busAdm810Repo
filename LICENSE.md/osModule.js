//OS module for operating system

var os = require('os');
console.log("hostname=",os.hostname());
console.log("type=",os.type());
console.log(os.platform());
console.log((os.arch()));