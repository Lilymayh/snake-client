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

module.exports = connect