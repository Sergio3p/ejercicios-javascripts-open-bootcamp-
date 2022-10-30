// Inherintance - Herencia
class Persona {
    _nombre
    _edad
    constructor(nombre, edad) {
        this._nombre = nombre
        this._edad = edad
    }
    saludo() {
        console.log(`Hola, mi nombre es ${this._nombre}, tengo ${this._edad} años`)
    }
}

class Desarrollador extends Persona { //La palabra clave "extend" se utiliza para extender esto con la class Persona
    constructor(nombre, edad, lenguaje) {
        super(nombre, edad)//La palabra clave "super" nos permite usar al constructor de la clase padre(class Persona[Clase principal]). De este modo, tendremos a un constructo secundario dentro de otra class.
        this.lenguaje = lenguaje
    }

    saludo(){//Override --> Seria como volver a definir algo que ya esta definido. Si nos fijamos bien, el saludo ya esta en la clase principal, pero podemos modificarla en la rama secundaria
        super.saludo()
        console.log(`Y soy desarrollador de ${this.lenguaje}`)
    }
}

const nuevodev = new Desarrollador("Sergio", 21, "Javascript")
console.log(nuevodev)
nuevodev.saludo()

//Polimorfismo => poli(mucho) y morfismo(formas) -->Varias formas

