const dummy = require('mongoose-dummy');
const chalk = require('chalk');

const array = [];

module.exports = function(Model,number_of_dummy_data,ignoredFields){

    for(let i=0; i<number_of_dummy_data;i++){
        array.push(dummy(Model,{
            ignore: ignoredFields,
            returnData: true
        }));
    }
  
    (async () => {
        while(array.length){

            let randobj = array.pop();
    
            let model = new Model(randobj);
    
            await model.save(randobj).then(function(res) {
                console.log(chalk.yellow(res));
            }).catch(function(err) {
                console.log(chalk.red(err));
            });
        }
    })().then(()=>{
        process.exit(0);
    }).catch(()=>{
        process.exit(0);
    });
};