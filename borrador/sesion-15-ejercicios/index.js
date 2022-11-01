const miNombre = "Sergio"
const miApellido = "Pacheco"

const datos = {
    miNombre,
    miApellido
}

//sessionStorage.setItem("datos", JSON.stringify(datos))
//localStorage.setItem("datos", JSON.stringify(datos))

const cad = new Date()

//ocument.cookie = `datos=${JSON.stringify(datos)}; expires = $ {new Date(cad.getTime() + 2 * 60000)}`