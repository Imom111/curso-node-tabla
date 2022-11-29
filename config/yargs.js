const argv = require('yargs/yargs')(process.argv.slice(2))
    .option('b', {
        alias: 'base',
        demandOption: true,
        default: 0,
        describe: 'Input of table',
        type: 'number'
    })
    .option('h', {
        alias: 'hasta',
        demandOption: true,
        default: 10,
        describe: 'Limit of table',
        type: 'number'
    })
    .option('l', {
        alias: 'list',
        // demandOption: true,
        default: false,
        describe: 'List table?',
        type: 'boolean'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
          throw new Error("La base debe ser un número.");
        }
        if (isNaN(argv.h)) {
          throw new Error("h debe ser un número.");
        }
        return true;
      })
    .argv;

module.exports = argv;
