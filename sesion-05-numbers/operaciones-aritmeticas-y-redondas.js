//Principales operaciones aritméticas
let a = 3.5;
let b = 4.8;

//Suma (+)
console.log(a + b);
//Resta (-)
console.log(a - b);
//Multiplicación
console.log(a * b);
//División
console.log(a / b);

//Representación de los números en cadena de texto
console.log(typeof a);
let a_s = a.toString();
console.log(a_s);
console.log(typeof a_s);

//Redondeo de números decimales
let c = 3.3;
let d = c * 3;

console.log(d);
console.log(typeof d)
//primer metodo
// .toFixed(x) - Limitar el número de decimales al valor x
console.log(d.toFixed(4));
console.log(typeof d.toFixed(4));

//ej
let e = 1832.1234902
console.log(e.toFixed(2))

let f = 24341222
console.log(f.toFixed(2))

//segundo metodo
// .toPrecision(x) - Este realizara un redondeo cientifico. Limita el número de cifras significativas
console.log(e.toPrecision(7))
console.log(f.toPrecision(7))

console.log(typeof f.toPrecision(3))
//Saber la diferencia entre el ".toFixed" y ".toPrecision"(OBTENDREMOS UN STRING)