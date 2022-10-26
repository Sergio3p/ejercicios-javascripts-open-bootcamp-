const obj = {
    nombre: "Sergio",
    apellido: "Pacheco",
    edad: 20,
    altura: 1.75,
    eresDesarrollador: true
}

const prop = "edad"
console.log(obj[prop])

console.log(obj)

const amigos = [
    {Nombre: "Miguel Rodriguez", edad: 23},

    {Nombre: "Bruno Matricardi", edad: 22},
]

console.log(amigos)
amigos.sort((a, b) => a.edad - b.edad)