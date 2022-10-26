const hoy = new Date()
console.log(fecha)

const nacimiento = new Date(2001, 11, 17)
console.log(nacimiento)

console.log(hoy > nacimiento)

const diaNacimiento = nacimiento.getDate()
const mesNacimiento = nacimiento.getMonth() + 1
const AnyoNacimiento = nacimiento.getFullYear()