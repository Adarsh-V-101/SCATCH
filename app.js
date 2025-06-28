const express = require('express');
const cokieParser = require('cookie-parser');
const ownerRouter = require('./routers/ownerRouter')
const userRouter = require('./routers/usersRouter')
const productRouter = require('./routers/productRouter')
const db = require('./config/mongodbConnection');
const indexRouter = require('./routers/index');


const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cokieParser());
app.set('view engine', 'ejs');


// Routes
app.use('/owner', ownerRouter)
app.use('/user', userRouter);
app.use('/product', productRouter)
app.use('/', indexRouter);


// Start server
app.listen(1212);