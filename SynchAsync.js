console.log("Synchronus");
console.log("A");
console.log("B");
console.log("C");
console.log("D") ;

console.log("Async change")
console.log("Asynchronous");
console.log("A");
console.log("B");
setTimeout(function(){console.log("C123")});
console.log("D");
