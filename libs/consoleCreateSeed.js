const fs = require('fs');
const chalk = require('chalk');

module.exports = function(vorpal) {
    vorpal
    .command('create-seed <filename>','Outputs "Create Seed"')
    .action(function(args, callback){
        if(!fs.existsSync('./src/seeds')){
            fs.mkdirSync('./src/seeds');
        }
            fs.writeFile(`./src/seeds/${args.filename}.js`,'', function(err){
                if(err){
                    const error = chalck.red(err);
                    return console.log(error);
                }
                fs.copyFile('./node_modules/mongoose-dummy-seeder/BasicSeed.js',`./src/seeds/${args.filename}.js`, (errr) => {
                    if(errr){
                        const errrr = chalk.red(errr);
                        return console.log(errrr);
                    }
                    const afilename = chalk.green('*** The seed ') + chalk.blue(`${args.filename}.js`) + chalk.green(' is successfully created inside ') + chalk.blue('seeds') + chalk.green(' folder ***');
                    console.log(afilename);
                    callback();
                });
            });

    });
};