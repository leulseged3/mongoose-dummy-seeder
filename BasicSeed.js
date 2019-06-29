//Import Your Model Here
const Model = require('path-to-model');

const Seed = require('mongoose-dummy-seeder');

//Insert Ignored Fields Here
const ignoredFields = ['_id','__v'];

//number of dummy data you want to be generated.
const number_of_dummy_data = 10;

module.exports = function(){
    Seed(Model,number_of_dummy_data,ignoredFields);
};


