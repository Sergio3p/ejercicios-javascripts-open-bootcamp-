//Funciones asíncronas

function miAsinc() {
    //Supongamos que esta función hace una llamada a una base de datos externa
    //Pueden darnos algún error
}

//Todo esto se define atraves de las promesas
//promesas: Son funciones que puede o pueden no ejecutarse de forma exitosa.
//Asi se define una promesa:

const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2);
    //Si está todo correcto
    if (i !== 0) {
        resolve()
    } else {
        reject()
    }
})

miPromesa
    .then(() => console.log("Se ha ejecutado de forma correcta"))
    .catch(() => console.log("ERROR"))//Se utiliza para saber y gestionar esos errores dentro de esa promesa
    .finally(() => console.log("Yo me ejecuto siempre")) //Este siempre se ejecutara de forma correcta o erronea
    

