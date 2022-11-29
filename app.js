const { crearArchivo } = require('./helpers/multiplicar.js');
require('colors');
const argv = require('./config/yargs.js');

// console.clear();
// console.log( process.argv );
// console.log( argv );
// console.log( argv.base );

crearArchivo( argv.b, argv.h, argv.l )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado') )
    .catch( err => console.error(err) );



// const [,, arg3 = 'base=0'] = process.argv;
// const [ , base = 0] = arg3.split('=');
