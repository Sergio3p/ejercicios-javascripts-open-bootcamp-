//De esta manera se puede acceder a la información del local storage:

//localStorage.setItem("nombre", "sergio")
//localStorage.setItem("nombre", "miguel")

  //console.log(localStorage.getItem("nombre"))

//JSON.stringify --> Convierte un objeto/array en string.
localStorage.setItem("persona", JSON.stringify ({ nombre: "sergio", edad: 20}))

//JSON.parse --> Convierte un objeto/array convertido a través de stringify en un objeto de Javascript.
  //console.log(JSON.parse(localStorage.getItem("persona")))

//Asi se elimina un item del local storage:

localStorage.removeItem("nombre")

//SESION STORAGE (es practicamente igual al local storage)

sessionStorage.setItem("nombre-sesion", "Sergio")

/* Cookies */
//Las cookies tienen diferentes metodos de trabajo que las local y sesion storage.

document.cookie = "nombreCookie=SergioCookie"

//De este modo se le puede dar caducidad a una cookie

document.cookie = "nombreCaducidad=Nombre;expires=" + new Date(2023, 0, 1).toUTCString()

console.log(document.cookie)

//De este modo se le puede dar caducidad a una cookie