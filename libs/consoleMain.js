const vorpal = require('vorpal')();

const consoleSeed = require('./consoleSeed');
const consoleCreateSeed = require('./consoleCreateSeed');
const consoleDelimiter = require('./consoleDelimiter');

module.exports = function() {

    consoleDelimiter(vorpal);

    consoleCreateSeed(vorpal);    

    consoleSeed(vorpal);

};
