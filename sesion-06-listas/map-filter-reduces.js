// Trabajar con métodos más avanzados
//.map()  .filter()  .reduce()

const array = ["San Sebastián", "Madrid", "Barcelona", "Alicante", "Bilbao"]

array.forEach(v => {
    console.log(v)
})

//Método .map()
/*const newArray = array.map((valor, indice) => {
    console.log(indice)
    return `${indice + 1} - ${valor}`
})
console.log(newArray) */

//Se puede hacer de una forma mas resumida:

const newArray = array.map((valor, indice) => `${indice + 1} - ${valor}`)
console.log(newArray)

//Método .filter()
const listaObjetos = [
    {nombre: "Sergio", edad: 35},
    {nombre: "Alejandro", edad: 23},
    {nombre: "Carlos", edad: 40},
    {nombre: "Lucía", edad: 16},
    {nombre: "Martina", edad: 22},
]

/*const personasMayores = listaObjetos.filter(obj => {
    if (obj.edad > 30) {
        return true
    } else {
        return false
    }
}*/

//Forma mas resumida
const personasMayores = listaObjetos.filter(obj => obj.edad > 30)
console.log(personasMayores)
//De esta forma podemos eliminar un nombre que no querramos en nuestra lista
const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Sergio")
console.log(nuevaLista)

//.reduce() : Se utiliza para obtener un valor, un objeto, etc. A partir de una lista

const valores = [3, 51, 23, 314, 5, 100, 80]

const suma = valores.reduce((acumulado, cur, i, arrayOriginal) => {
    console.log(acumulado)
    console.log(cur)
    console.log(i)
    console.log(arrayOriginal)
    return acumulado + cur
})
console.log(suma)