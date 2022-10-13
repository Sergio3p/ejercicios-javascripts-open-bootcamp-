/*listas, array o arreglo: Es un conjuntos de datos almacenados de forma lineal. Esta misma puede tener
varios elementos. ej: */
const lista = [1, 'hola', true, undefined, null]

const lista2 = new Array(2, "hola", true, undefined, null)

//tambien podemos utilizar de este modo la lista, colocando entre corchetes el numero 0 para que sea el primer elemento. ej
const lista3 = new Array(3);

lista3[0] = "soy el primer elemento, index 0"

//Tambien podemos meter una lista dentro de otra lista. ej:
const lista4 = [lista, lista2, lista3]

console.log(lista)
console.log(lista2)
//ej lista3:
console.log(lista3)
//ej lista4:
console.log(lista4)

//Objetos: En javascript "objetos" son representaciones en datos de objetos de la vida real. ej:
//los atributos se lo daremos nosotros(son las cosas que pondremos adentro de la const)
const movil = {
    altura: 10,
    anchura: 5,
    marca: "Samsung",
    isWhite: false,
    contactos: ["Sergio", "Carlos", "Raul"],
    tarjeta: {
        marca: "Sandisk",
        almacenamiento: 32
    }
}
//Se pueden cambiar las cosas que estan adentro de la constante sin problemas.
/*Tambien tener en cuenta que no se puede cambiar el objeto de una constante ya que esta va a estar definida,
pero si se puede editar todo lo que esta adentro de una constante('const').*/
movil.s21 = 2021;
movil.marca = "Samsung"
//ej:
console.log(movil.marca)
console.log(movil.tarjeta.marca)
console.log(movil.s21)

//fechas: 
//Librerias de apoyo: Momento.js
//Para crear una fecha, se escribe de esta manera. (hay distintos tipos de conductores):
new Date() //si utilizamos esta tipo de fecha, nos daria la fecha exacta del momento en que se creo esa variable.
//ej:
const ahora = new Date();
console.log(ahora);

//Se puede definir utilizando los milisegundos. Ej:
const fecha_milis = new Date(10)
console.log(fecha_milis)

//
const fecha_cadena = new Date("november 122021")
console.log(fecha_cadena)

//
const fechas_valores = new Date(2022, 9, 15);
console.log(fechas_valores)

//
const dia = ahora.getDate()
const mes = ahora.getMonth() + 1
const anyo = ahora.getFullYear()

console.log(dia, mes, anyo)