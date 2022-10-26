//Trabajando con fechas
const fecha = new Date ()
console.log(fecha)

//Atención - Los meses inicializan en 0 (0 -enero, 11 - diciembre)
const fecha2 = new Date(2001, 11, 17)

console.log(fecha2)

//otra forma de inicializar una fecha definiendola por milisegundos
const fecha3 = new Date(-10000000000000)
console.log(fecha3)

//Definir fechas atraves de str

const fecha4 = new Date("October 13, 1979 12:15:15")
console.log(fecha4)

//Operador mayor que menor que
console.log(fecha < fecha2)

const fecha5 = new Date(2001, 11, 17)
console.log(fecha5)
console.log(fecha2 === fecha5)//ERROR - No se pueden comparar fechas de esta manera

//Utilizar el metodo .getTime()
console.log(fecha2.getTime() === fecha5.getTime())//OK - Esta es la forma de comparar la igualdad entre fechas (IMPORTANTE)

//Obtener el día, el mes y el año de una fecha (SE UTILIZA MUCHO)
//Para obtener el dia --> .getDate()
console.log(fecha2.getDate())

//Para obtener el mes --> .getMonth() (0 -Enero, 11 - Diciembre)
console.log(fecha2.getMonth() + 1)

//Obtener el año --> .getFullYear()
console.log(fecha2.getFullYear())

//Mostrar una fecha en un str

console.log(fecha2)

//.toLocaleDateString
//developer.mozilla toLocaleDateString (fijarse)
console.log(fecha2.toLocaleDateString())
