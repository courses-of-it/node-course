const fs = require('fs');
const colors = require('colors');
const { rejects } = require('assert');
const { resolve } = require('path');

let data = ''

let listarTabla = (base, limite) => {
    if (!Number(base) || !Number(limite)) {
        console.log(`Los parametro introducidos no són números`.red)
        return
    }
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`.yellow);
    }

}


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`Los parametro introducidos no són números`)
            return
        }
        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }
        fs.writeFile(`tablas/tabla-del-${base}-hasta-el-${limite}.txt`, data, function(err) {
            if (err) reject(err);
            else resolve(`el archivo tabla-del-${base}-hasta-el-${limite}.txt ha sido creado correctamente`);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}