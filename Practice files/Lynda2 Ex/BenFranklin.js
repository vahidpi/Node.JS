var Person = require("./lib/Person");
// var EventEmitter = require('events').EventEmitter;

// // var events = require('events');
// // var emitter=new events.EventEmitter();



// // emitter.on('customEvent', function(message, status) {
// // 	console.log(`${status}: ${message}`);
// // });

// // emitter.emit('customEvent', "Hello World", 200);

// var util=require('util');

// var Person = function (name) {
// 	this.name=name;
// };

// util.inherits(Person, EventEmitter);

var ben = new Person("Ben Franklin");
var george = new Person("George Washington");


george.on('speak', function (said) {
	console.log(`${this.name} -> ${said}`);
});

ben.on('speak', function (said) {
	console.log(`${this.name} : ${said}`);
});

ben.emit('speak', "You may delay, but time will not.");
george.emit('speak', "It is far better to be alone, than to be in a bad company.");