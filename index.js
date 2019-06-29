require('dotenv').config();
const mongoose = require('mongoose');
const chalk = require('chalk');
const consoleMain = require('./libs/consoleMain');

mongoose.connect(`${process.env.MONGO_HOST}/${process.env.MONGO_DB}`,{
    useNewUrlParser:true,
    useCreateIndex:true
}).then(res => {
    console.log(chalk.blue.bold("♫ welcome to mongoose dummy seeder ♫"));
    consoleMain();
}).catch(err => {
    throw err;
});

module.exports = require('./libs/Seed');