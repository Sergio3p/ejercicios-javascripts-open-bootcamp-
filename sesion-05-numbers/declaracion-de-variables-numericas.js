//sesión 05 - numbers
//Declaración de variables numéricas (enteros y con decimales)
let a = 5;

console.log(a);

//Los numeros decimales se los conocen como numeros flotantes

let b = 0.1;

console.log(b);

//Precisión:
let c = 0.2;

//Javascript tiene un problema con la precisión del resultado ya que tiene una distribución de bits distinta a las demas (REPASAR BIEN ESTO)
console.log(b + c);

//Solución (pequeño truco para obtener valores "reales")
//Math.round redondea un numero hacia abajo sin decimales.
console.log(Math.round((0.1 + 0.2) * 100)/100)