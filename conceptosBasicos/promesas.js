let empleados = [{
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Melissa'
    },
    {
        id: 3,
        nombre: 'Juan'
    },
]
let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
]

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleado = empleados.find(empleado => empleado.id === id)

        if (!empleado) {
            reject(`no existe un empleado con el ID ${ id }`)
        } else {
            resolve(empleado)
        }
    })
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salario = salarios.find(salario => salario.id === empleado.id)

        if (!salario) {
            reject(`No se encontró un salario para el usuario ${ empleado.nombre }`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salario.salario,
                id: empleado.id
            })
        }
    })
}


getEmpleado(2)
    .then(empleado => {
        return getSalario(empleado)
    })
    .then(resp => {
        console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
    })
    .catch(err => {
        console.log(err);
    })