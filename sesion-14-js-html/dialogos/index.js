const boton = document.querySelector("#btn")

//console.log(boton)

boton.addEventListener("click", () => {
    //alert("Se ha hecho click")
    //confirm("¿Estás de acuerdo?") && console.log("OK") --> De este modo solo podremos gestionar la respuesta afirmativa que nos dara en la pagina[&&].
    //confirm("¿Estás de acuerdo?") 
    //? console.log("OK") 
    //: console.log("NO!!") --> Y de este modo podremos recibir una respuesta al aceptar o denegar la resupuesta[? y :].
    const respuesta = confirm ("¿Seguro?") 
    if (respuesta) {
        console.log("Estás de acuerdo")
    } else {
        console.log("No estás de acuerdo")
    }//Y de este modo podriamos tener las mismas respuesta que el anterior metodo, solo que podemos editar la respuesta y la armamos en forma de función.
})

const botonInfo = document.querySelector("#info")
botonInfo.addEventListener("click", () => {
    const nombre = prompt("¿Cuál es tu nombre?")
    if (nombre) {
    console.log("Tu nombre es "+ nombre)
    } else {
        console.log("No has introducido nada")
    }
})

const lista = [{
    nombre: "sergio",
    edad: 20
},{
    nombre: "Juan",
    edad: 23
},{
    nombre: "Carla",
    edad: 30
}]

//console.log(lista)
//Podemos utilizar el console.table. Esta consola se utiliza para ver de otra forma la lista. Nos mostrara la lista en forma de tabla y sera mas agradable visualmente.
console.table(lista)
