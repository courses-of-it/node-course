const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}

const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', opt)
    .command('crear', 'crea un archivo sobre la tabbla de multiplicar que tu le digas', opt)
    .help()
    .argv;



module.exports = {
    argv
}