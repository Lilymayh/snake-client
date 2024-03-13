const net = require("net");

// establishes a connection with the game server
const connect = function() {
	const conn = net.createConnection({
		host: "165.227.47.243",// IP address here,
		port: 50541,// POsRT number here,
	});

	conn.on("data", (data) => {
		console.log("Server says: ", data);
	});

	// interpret incoming data as text
	conn.setEncoding("utf8");

	return conn;
};

console.log("Connecting ...");
connect();


