// serviceProvider.js
const express = require("express");
const axios = require("axios"); // For making HTTP requests
const app = express();

app.get("/service/:username/:password", async (req, res) => {
	const { username, password } = req.params;

	try {
    	// Call Auth Service to validate user
    	const authResponse = await axios.get(`http://192.168.100.4:3001/validate/${username}/${password}`);

    	if (authResponse.data.success) {
        	res.json({ message: "Welcome to the protected service!", data: "Here is your secret data." });
    	}
	} catch (error) {
    	res.status(401).json({ message: "Authentication failed!", error: error.response.data });
	}
});

app.listen(3002, () => {
	console.log("Service Provider running on port 3002");
});




