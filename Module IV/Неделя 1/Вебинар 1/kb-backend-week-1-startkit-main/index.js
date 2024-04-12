require('events').EventEmitter.defaultMaxListeners = 0;
const launcher = require('./AppModules/launcher');
const dictionary = require('./AppModules/dictionary');


console.log(dictionary.global.hello);
launcher.run();




