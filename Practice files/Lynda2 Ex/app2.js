
/* jshint esnext: true */


var http=require("http");

http.createServer(function (req, res) {

	res.writeHead(200,{"Content-Type":"text/html"});
	res.end(`<!DOCTYPE html>
		<html>
			<head>
				<title>Web Server</title>
			</head>
			<body>
				<h1>Web Page Served...</h1>
				<p>You are welcome</p>
				<p>Hi</p>
			</body>
		</html>
		`);
}).listen(3000);

console.log("Server running at http://localhost:3000");