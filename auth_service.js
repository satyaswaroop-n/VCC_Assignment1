// authService.js
const express = require("express");
const app = express();

// Dummy user data (in a real app, use a database)
const users = {
	user1: "password123",
	user2: "securePass"
};

// Authentication endpoint
app.get("/validate/:username/:password", (req, res) => {
	const { username, password } = req.params;

	if (users[username] && users[username] === password) {
    	res.json({ success: true, message: "User authenticated" });
	} else {
    	res.status(401).json({ success: false, message: "Invalid credentials" });
	}
});

app.listen(3001, () => {
	console.log("Auth Service running on port 3001");
});

