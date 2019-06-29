module.exports = function(vorpal) {
    vorpal
    .command('seed <filename>','Output "seeds the given <filename>"')
    .action(function(args, callback){
        const DefaultSeed = require(`../../../src/seeds/${args.filename}`);
        DefaultSeed();
    });
};