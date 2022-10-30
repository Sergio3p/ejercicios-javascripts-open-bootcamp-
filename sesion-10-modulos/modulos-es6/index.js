//Esta es la forma mas facil de importar-exportar las funciones

//Este seria un metodo para importar modulos:
//import { suma, eleva, nombre } from './modulos/matematicas.js'

//Y este seria el metodo mas sensillo para importar modulos.
import * as moduloMatematicas from './modulos/matematicas.js'

//Mucho mas resumido si utilizamos bien las propiedades.
import getAutor, { libro } from './modulos/literatura.js'

const sum = moduloMatematicas.suma(4, 12)
console.log(sum)

const potencia = moduloMatematicas.eleva(2, 5)
console.log(potencia)

console.log(moduloMatematicas.nombre)

console.log(getAutor())
console.log(libro)