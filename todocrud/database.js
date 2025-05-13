const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/todo-app';

mongoose.connect(mongoURI)
    .then(() => {
        console.log('Database connected successfully');
    })
    .catch((error) => {
        console.error('Database connection error:', error);
    });

module.exports = mongoose.connection;
