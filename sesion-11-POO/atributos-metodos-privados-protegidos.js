class Persona {
    //Private --> #(Sólo se pueden acceder desde dentro de la clase)
    #nombre;//Este se volvera un atributo privado. Esto significa que se podra acceder solamente desde dentro de esta clase y no desde afuera
    #edad;

    //Protected --> _(Sólo se puede acceder desde dentro de la clase y desde clases descendientes)
    _isDeveloper = true
    constructor(nom, edad) {
        this.#nombre = nom
        this.#edad = edad
    }
    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años`)
    }
    obtenNombre() {//función getter --> porque nos permite acceder (de forma controlada) a algún atributo protegido
        return this.#nombre
    }
    #obtenEdad() {
        return this.#edad
    }
    getEdad() {
        return this.#edad
    }
    setEdad(nuevaedad) {
        this.#edad = nuevaedad
    }
}

const persona = new Persona("Sergio", 34)
//console.log(persona)
//console.log(persona.nombre)//Cuando pongamos el punto, nos apareceran muchas opciones. Hay que tener en claro que las palabras azules son propiedades y las palabras moradas seran metodos.
persona.saludo()

//persona.nombre = "Adios"
console.log(persona.obtenNombre())
console.log(persona._isDeveloper)
//console.log((persona.#obtenEdad()))
//Propiedades privadas --> Private ->_ #

//Getter --> Son métodos que nos permiten obtener atributos/métodos privados o protegidos
const edad = persona.getEdad()
console.log(edad)
//Setter --> Son métodos que nos permiten cambiar el valor de algun atributo privado o protegido
//quiero cambiar la edad de la persona
persona.setEdad(22)
console.log(persona.getEdad())

//La diferencia entre getter y setter.