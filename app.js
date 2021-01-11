let http = require("http");

let fs = require("fs");

// myReadStream.on("data", function (chunk) {
// 	console.log("new chunk recieved");
// 	console.log(chunk);
// 	myWriteStream.write(chunk);
// });

let server = http.createServer(function (req, res) {
	console.log("request was made" + req.url);
	if (req.url === "/home" || req.url === "/") {
		res.writeHead(200, { "Content-Type": "text/html" });
		fs.createReadStream(__dirname + "/index.html").pipe(res);
	} else if (req.url === "/contact") {
		res.writeHead(200, { "Content-Type": "text/html" });
		fs.createReadStream(__dirname + "/contact.html").pipe(res);
	} else if (req.url === "/api/ninjas") {
		let myObj = {
			name: "Ryu",
			job: "Ninja",
			age: 29,
		};
		res.writeHead(200, { "Content-Type": "application/json" });
		res.end(JSON.stringify(myObj));
	} else {
		res.writeHead(404, { "Content-Type": "text/html" });
		fs.createReadStream(__dirname + "/404.html").pipe(res);
	}
	// let myObj = {
	// 	name: "Ryu",
	// 	job: "Ninja",
	// 	age: 29,
	// };
	// res.end(JSON.stringify(myObj));
	// let myReadStream = fs.createReadStream(__dirname + "/index.html");

	// myReadStream.pipe(res);
});

server.listen(3000, "127.0.0.1");
console.log("you are here");
