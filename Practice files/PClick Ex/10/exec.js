var exec = require("child_process").exec;

exec("dir", function (error, stdout) {
	// body...
	if (error) {
		throw error;
	};
	console.log("Listing Finished!");
	console.log;
});