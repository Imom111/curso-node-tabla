const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base, hasta, list = false) => {
    try {
        console.clear();
        let salida = '';
        for (let index = 0; index < hasta; index++) {
            salida += (` ${base} * ${index + 1} = ${(index + 1)*base} \n`);
        }
        if (list) {
            console.log('============='.green);
            console.log(`Tabla del ${colors.blue(base)}`.green);
            console.log('============='.green);
            console.log(salida);
        }
        fs.writeFile(`./output/tabla-${base}.txt`, salida, (err) => {
            if (err) throw( 'No se ha guardado el archivo' );
        });
        return `tabla-${base}.txt`;
    } catch (error) {
        return error;
    }
}


module.exports = {
    crearArchivo: crearArchivo
}
// const crearArchivo = (base = 0) => {

//     return promesa = new Promise(( resolve, reject ) => {
//         console.clear();
//         console.log('=============');
//         console.log(`Tabla del ${base}`);
//         console.log('=============');
    
//         for (let index = 0; index < 10; index++) {
//             salida += (` ${base} * ${index + 1} = ${(index + 1)*base} \n`);
//         }
    
//         console.log(salida);
//         fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
//             if (err) reject( 'No se ha guardado el archivo' );
//             resolve( `tabla-${base}.txt` );
//         });
//     });
// }
