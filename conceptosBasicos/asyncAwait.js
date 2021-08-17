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

let getEmpleado = async(id) => {
    let empleado = empleados.find(empleado => empleado.id === id)

    if (!empleado) {
        throw new Error(`no existe un empleado con el ID ${ id }`)
    } else {
        return (empleado)
    }
}

let getSalario = async(empleado) => {
    let salario = salarios.find(salario => salario.id === empleado.id)

    if (!salario) {
        throw new Error(`No se encontró un salario para el usuario ${ empleado.nombre }`);
    } else {
        return ({
            nombre: empleado.nombre,
            salario: salario.salario,
            id: empleado.id
        })
    }
}

let getInformation = async(id) => {
    let empleado = await getEmpleado(id);
    let salario = await getSalario(empleado);
    return `${salario.nombre} tiene un salario de ${salario.salario}`
}

getInformation(1)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err))