//Carga y sobrecarga de funciones

//Carga de funciones
function saludar() {
    hola()
}

function hola() {
    console.log("Hola! Soy la función hola()")
}

saludar()

//Primero interpreta todo el codigo de arriba abajo
  // Carga la función 
//1. global()
  //Esta función "saludar()" esta por encima de la funcion global()
//2. Saludar() global()
  //En la tercera función cuando ya entra en la parte de saludar(), descubre que tiene que llamar a la funcion hola()
//3. hola() saludar() global()
  //Cuando termina la función hola(), esa se sale de la carga
//4. saludar() global()
  //Y luego esto sale de la función saludar() y por lo tanto se quedaria como en el principio
//5. global()
  //Todo esto se utiliza para optimizar la utilización de memoria por parte de javascript


/////Sobrecargas de funciones
//Si pasa esto es por un error de concepto, lo que hay que hacer es borrar o modificar la función para que esto no pase

/*function recursivo() {
    recursivo()
}
recursivo() */