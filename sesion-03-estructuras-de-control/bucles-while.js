/*Bucle while; es un bucle exactamente igual que el for, solo 
que se va a cumplir cuando una condicion cumpla*/
//hay que tener cuidado con los bucles while.
let i = 0;
let max = 10;
while (i < max) {
    console.log(i);
    i++;
}

i = 15;
//Do...while
//Solo se usara para ocaciones muy especificas.
do {
    console.log("Estoy en el do while")
} while (i < max)