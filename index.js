//Creating a CLI constant that gets our 
//proper app requirement
const CLI = require('./lib/cli.js');

//creating a new command line input object
//then calling run
const cli = new CLI();
cli.run();
