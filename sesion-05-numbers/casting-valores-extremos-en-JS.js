//Operador .valueOf() - Obtener valores numéricos a partir de literales
let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);
console.log(a + b);
console.log(a.valueOf() + b.valueOf());

console.log(b.valueOf());

let str = new String("Hola soy un string");
console.log(str);
console.log(str.valueOf())

//NaN (Not a Number) - Infinity
let n = Number('adios');
console.log(n);

console.log(isNaN(n));

let numerador = 19;
let divisor = 0;
let divisor_2 = null
//El valor "Infinity" nos puede dar cuando un valor es "0" o "null" esta dividiendo a un numero
console.log(numerador / divisor);
console.log(numerador/divisor_2)

//Cómo convertir los string a valores numéricos con Number, parseInt y parseFloat
let numero = '5.89'
let num2= 17.2;

console.log(typeof numero)
//Como "numero" es un string, cuando hagamos la suma, estos van a contatenarse
console.log(numero + num2)//Error de concepto

console.log(Number(numero) + num2)

//parseInt(enteros) y parseFloat(con coma)
console.log(parseInt(numero))

console.log(parseFloat(numero))

let num3 = 4;

console.log(parseInt(num3))
console.log(parseFloat(num3))

//Números hexadecimales: Se utilizan mucho en una asignación de memoria porque en la memoria de los ordenadores funciona con 1 y 0, entonces este utiliza bits (1 bit = utiliza ocho 1 y 0)

//Números hexadecimales (base 16) [Todos los números hexadecimales empiezan con 0x]
let numHex= '0x3a5b7';
console.log(parseInt(numHex, 16));

//Obtener los valores máximo y mínimo en Javascript
//El "EPSILON" Es el minimo numero que puede haber entre un numero y el siguiente (muy preciso)
let min_precision = Number.EPSILON
let min_valor_JS = Number.MIN_VALUE
let max_valor_JS = Number.MAX_VALUE

console.log(min_precision);
console.log(min_valor_JS)
console.log(max_valor_JS)
console.log(2 ** 1024)