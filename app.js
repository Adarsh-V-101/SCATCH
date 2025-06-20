const express = require('express');
const cokieParser = require('cookie-parser');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Start server
app.listen(1212);