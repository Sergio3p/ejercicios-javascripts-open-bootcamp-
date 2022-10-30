//Acá estaremos creando un objeto de tipo persona

class Persona {
    nombre;//Estas son variables que forman partes de la persona
    edad;//Variables
    isDeveloper;//Variables

    constructor(nombre, edad, isDeveloper) {
        this.nombre = nombre;//Asi es como se declaran las variables o atributos de las clases.
        this.edad = edad;//"this." es una palabra reservada. Esta palabra hace referencia al objeto en el que esta operando dentro de una funcion
        this.isDeveloper = isDeveloper
    }
    saludo() {//Estas funciones(tanto en objetos como en clases), se las denominan "metodos"
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años`)
        //console.log("Hola")
    }//Metodo
}

const nueva_persona = new Persona("Sergio", 20, true)//"La palabra new crea un objeto". Al poner Persona al lado(tal como se llama en class), se creara un objeto persona
console.log(nueva_persona)
nueva_persona.saludo()

let numero = 60 //inicializando una variable
console.log(typeof numero)

let persona_2 = new Persona("Juan", 43, false) //Esto se lo llama "instanciar"
//Esto se utiliza mucho, sobretodo con las herencias
console.log(typeof persona_2)
console.log(persona_2 instanceof Persona)
//Existe un operador llamado "instanceof" --> similar al typeof pero para clases
