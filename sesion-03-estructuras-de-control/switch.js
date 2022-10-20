//Switch: Nos va a permitir es "en función de un valor" poner varias condiciones. ej:
//Sentencias Switch
//definir break y default
let nota = 6;

switch (nota) {
    case 5:
        console.log("Buen trabajo, ¡sobresaliente!");
        break;
    case 4:
        console.log("Buen trabajo, pero podrías haberlo hecho mejor");
        break;
    case 3:
        console.log("has obtenido un suficiente");
        break;
    case 2:
        console.log("No has aprobado por poco");
        break;
    case 1:
        console.log("No has estudiado nada, trabaja un poquito más para la próxima");
        break;
    default:
        console.log("Error")
        break;
} 