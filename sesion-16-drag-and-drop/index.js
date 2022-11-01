const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")
//Los eventos son situaciones que se dan, como por ejemplo: un click.

//dragstart se utiliza para avisarle a la persona que controla que se inicio un arrastre.
parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        //console.log("Inicio de arrastre")
        console.log("Estoy arrastrando el párrafo: " + parrafo.innerText)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id",parrafo.id) //Estas propiedades nos permite poder transferir información por medio de los propios eventos relacionados con el drag over.
        const elemento_fantasma = document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0)
    })

    //Y dragend se utiliza cuando terminamos de arrastrar algún objeto o texto, es decir que soltamos algo.
    parrafo.addEventListener("dragend", () => {
        console.log("He terminado de arrastrar")
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {//Tenemos que prevenir el comportamiento por defecto, por eso tenemos que poner event en lugar de parentesis y luego colocar event.preventDefault()
        event.preventDefault()
        event.dataTransfer.dropEffect= "copy"//Personaliza el puntero cuando mueve algo en la pagina --> copy defecto
        //console.log("Drag Over")
        //
    })
    seccion.addEventListener("drop", event => {
        console.log("Drop")
        const id_parrafo = event.dataTransfer.getData("id")
        console.log("Párrafo id:", id_parrafo)
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
})