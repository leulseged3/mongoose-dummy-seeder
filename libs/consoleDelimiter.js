const chalk = require('chalk');
module.exports =  function(vorpal){
    vorpal
    .delimiter(chalk.bold.greenBright('seeder $'))
    .show();
};