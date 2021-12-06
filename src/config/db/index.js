const mongoose = require('mongoose');

async function db_connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/Begin');
        console.log('Successfully!!!')
    } catch (error) {
        console.log('Fail!!!')
    }
}

module.exports = db_connect