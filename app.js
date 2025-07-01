const express = require('express');
const cokieParser = require('cookie-parser');
const session = require('express-session')
const flash = require('connect-flash')
const path = require('path')

require('dotenv').config();

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
app.use(session({
  secret: process.env.EXPRESS_SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}))
app.use(flash())
// Routes
app.use('/owner', ownerRouter)
app.use('/user', userRouter);
app.use('/product', productRouter)
app.use('/', indexRouter);


// Start server
app.listen(1212);