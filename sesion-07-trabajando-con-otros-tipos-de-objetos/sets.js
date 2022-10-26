//Array.def: Es un conjunto ordenado de valores y objetos.
//Set.def: Es un conjunto no ordenado de valores o elementos unicos.
//La diferencia entre estos dos es que "set" nos permite asegurarnos de que un conjunto no va a haber valores repetidos.
// Sets o conjuntos (en castellano): Los sets se comportan de forma diferente a las listas
const array = [1, 2, 3, 4, 5, 6, 5, 6, 7, 8, "hola"]

const miSet = new Set(array)

console.log(array)
console.log(miSet)

//métodos de set para añadir y eliminar valores
// .add() --> Añade valores

miSet.add(9)
console.log(miSet)
//En el caso de que pongamos un valor que ya aparece en la lista, este no se registrara ya que estaria repitiendo el numero o str y "set" trata de evitar eso. Ej:
miSet.add(3)
console.log(miSet)

//.delete() --> Elimina valores

miSet.delete("hola")
console.log(miSet)

//.clear() --> Este eliminara todos los valores del set

/* miSet.clear()
   console.log(miSet) */ //Lo comento para que no elimine el set

//.has() --> Este nos dira si mi set contiene un valor. Similar al metodo "includes"

//console.log(miSet.includes(3))
console.log(miSet.has(2))

//.size --> Sabremos el tamaño de un set (esto es una propiedad y no un metodo)
console.log(miSet.size)

//forEach --> Se utiliza para tener una interasion dentro de este set

miSet.forEach(valor => {
    console.log(valor)
})

const it_miSet = miSet.values()
console.log(it_miSet)

const ar_miSet = [ ...miSet]
console.log(ar_miSet[2])