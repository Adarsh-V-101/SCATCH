const express = require('express');
const cokieParser = require('cookie-parser');
const ownerRouter = require('./routers/ownerRouter')
const userRouter = require('./routers/usersRouter')
const productRouter = require('./routers/productRouter')
const db = require('./config/mongodbConnection');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cokieParser());
app.set('view engine', 'ejs');


// app.use('/', ownerRouter)
// app.use('/', userRouter);
// app.use('/', productRouter)

// Routes
app.get('/', (req, res) => {
    // res.send('hello')
    res.render('login')
});

// Start server
app.listen(1212);