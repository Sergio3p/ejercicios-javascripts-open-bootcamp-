const persona = {
    nombre: "Sergio",
    edad: 20,
    isDeveloper: true,
    saludo: function() {
        console.log("Hola")
    }
}

//console.log(persona)
persona.saludo()

const otra_persona = {
    nombre: "Marcos",
    edad: 14,
    isDeveloper: false,
    saludo: function() {
        console.log("hola")
    }
}

otra_persona.saludo()

//Para resumir y no repetir tantas funciones, podemos utilizar una constante.

//Esto se lo conoce como Función factory
const creaPersona = (nombre, edad, isDeveloper) =>{
    return {
        nombre, //Esto es igual a nombre: nombre
        edad,
        isDeveloper,
        saludo: function() {
            console.log('Hello')
        }
    }
}

const nueva_persona = creaPersona("Juan", 21, true)
console.log(nueva_persona)

const nueva_persona_2 = creaPersona("Maria", 32, false)
console.log(nueva_persona_2)