const mongoose = require('mongoose');
const config = require('config');
const dbgr = require('debug')('development:mongoose')


mongoose
    .connect(`${config.get("MONGODB_URI")}/scatch`)
    .then(() => {
        dbgr('Connected to MongoDB');
    })
    .catch((err) => {
        dbgr('not connected', err);

    })


module.exports = mongoose.connection;