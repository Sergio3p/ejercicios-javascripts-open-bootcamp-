var variable;
let variableLetl;

 const constante ="hola soy una constante";

var a = 1;
console.log(a);

a = 4
console.log(a);

console.log(constante)
//A una constante no se le puede cambiar el valor anterior que tenia, en cambio en una variable si se puede.
// constante = "adios"

let b = 3;
console.log(b);

b = 5;
console.log(b);

/*La diferencia entre "var" y "let" es que "var" afecta a todo el codigo y "let" solo afecta al bloque 
declarado*/
//ej:

var variable = "Hola soy una variable VAR"

for (var i = 0; i < 3; i++) {
    var variable= "Soy la segunda variable"
}

console.log(variable)

let variableLet = "Hola soy una variable LET"

for (var i = 0; i < 3; i++) {
    let variableLet= "Soy la segunda variable" //Se declara variable let, pero su valor no se lee nunca
}

console.log(variableLet)

//"typeof nos sirve para saber de que tipo es el valor que usaremos" ej:

var num= 4;
console.log(typeof num)

num = "hola soy num"

console.log(typeof num)