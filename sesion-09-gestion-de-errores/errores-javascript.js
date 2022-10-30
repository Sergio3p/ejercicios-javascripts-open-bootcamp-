//errores

const miFuncion = val => {
    if (typeof val === "number") {
    return 2 * val
    }
    //return false;
    throw new Error("El valor debe ser de tipo número")//throw (en español es lanzar), este nos servira para clasificar y lanzar el tipo de valor que estemos utilizando en el console.log. ej: Si nosotros creamos una función solo para numeros y en el console.log ponemos un str, utilizaremos el throw para indicarle al usuario que en esta función se utilizan solo numeros, obviamente anclando un mensaje.
}


//const elDoble = miFuncion("ala")

//try - catch() - finally --> javascript tratara de ejecutar un codigo que estara dentro de "try" y que puede fallar y en el caso de que falle, ejecutara las 2 llaves que hay en try
const numero = "6";

try {
    //Código que puede fallar
    console.log("Está ejecutandose de manera correcta")
    const doble = miFuncion(numero)//Si ponemos mal la palabra "numero", nos dara un error. Esto nos dara una mejor gestión a la hora de corregir los errores.
    console.log(doble)
} catch(e) {//
    //En caso de fallar, quiero que ejecutes
    console.log(`El valor de e es: ${e}`)//la "e" nos indica que el valor tiene que ser tipo numero si o si, casi lo mismo que el throw.
    console.log("ERROR!")
} finally {
    console.log("Esto se va a ejecutar tanto si se produce algún error, como si no existe ninguno")
}

//InternalError, SyntaxError, TypeError, RangerError y ReferenceError

//InternalError --> Lo lanza el interprete cuando hay un problema interno, como por ejemplo el ejercicio de recursividad.

//SyntaxError --> Este error salta cada vez que hay un fallo de sintaxis, osea, una funcion o variable mal escrita.

//TypeError --> Esto pasa cuando modificamos una función con un numero cuando esta en realidad espera un booleano. (ESPECIFICAR MEJOR)

//RangerError --> Esto aparece cuando tratamos de acceder a una posición que esta sobrepasando un limite. Un ejemplo seria un array con 11 elementos y queremos acceder al elemento 15 (sobrepasando los 11 elementos), nos dara este error, porque nos pasamos de rango.

//ReferenceError --> Este se activa cuando no existe o no esta definida una referencia a la que queremos utilizar.

//Error -Javascript - MDN (En esta pagina tienen todos los errores configurados para javascript)[Entrar a la pagina.]