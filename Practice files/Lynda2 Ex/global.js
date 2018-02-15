// var hello = "Hello World from Node Js";

// var justNode = hello.slice(17);

// console.log(`Rock on World from ${justNode}`);

// console.log(__dirname);

// console.log(__filename);


var path = require("path");
console.log(`Rock on world from ${path.basename(__filename)}`);