const express = require("express");
const path = require("path");

// Create web application and configure port
const app = express();
const port = 3000;

// Configure server routes
app.use(express.static(path.join(__dirname, "build")));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + "/build/index.html");
});

// Start listening to incoming requests
app.listen(port, () => console.log(`Chat app listening on port ${port}`));