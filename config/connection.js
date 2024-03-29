const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://txtony9:<password>@snapi.2iej5rm.mongodb.net/');

module.exports = mongoose.connection;
