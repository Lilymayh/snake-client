const net = require("net");

let connection;

const connect = function() {
	connection = net.createConnection({
		host: "165.227.47.243",// IP address here,
		port: 50541,// POsRT number here,
	});

	connection.on("connect", () => {
		console.log("Name: LLY")
	})

	connection.on("data", (data) => {
		console.log("Server says: ", data);
	});

	// interpret incoming data as text
	connection.setEncoding("utf8");

	return connection;
};


module.exports = connect
