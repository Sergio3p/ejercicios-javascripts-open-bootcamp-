// Casos muy específicos - break, continue
let lista = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < lista.length; i++) {

    if (lista[i] === 3) {
        continue;
    }
    console.log(lista[i])

    if (lista[i] > 5) {
        break;
    }
}

//Cuál es el ámbito de un bucle
/*Es mas recomendable usar "let" que "var", por el hecho de que una variable se declara
en todas las variables, ya que es un poco generica, en cambio "let" es más 
es mas manipulable, ya que lo usaremos como variable contador y no nos interrumpira
si abrimos otro bucle(ya que este "let" se encontrara dentro de las llaves)*/
