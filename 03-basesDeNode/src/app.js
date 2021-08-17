const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs')
const colors = require('colors/safe');


let command = argv._[0]

switch (command) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(colors.green(archivo)))
            .catch(e => console.log(colors.red(e)))
        break;

    default:
        console.log('comando no reconocido')
}