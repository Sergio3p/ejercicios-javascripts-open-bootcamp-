//.hide() --> Este cumple la función de ocultar strings, titulos, textos, etc. ".show()" seria lo contrario.

// $(selector).acción

// $("h1").hide()

//Esta función se tiene que utilizar si o si, ya que, en el caso de que no se utilice, la pagina podria tener problemas como undefined u otros problemas que nos podrian dar un gran dolor de cabeza.

//Se puede utilizar este metodo.
/*$(document).ready(() => {

})*/

//o esta forma simplificada

/*$(() => {

})*/

/*$(() => {
    //Selectores:
    //id="el-1" => "#el-1"
    //class="el-1" => ".el-1"
    $("#el-1").hide()//Con la almohadilla(#) hacemos referencía a los id.

    $(".hide-btn").click(() => {
        console.log("Ocultando...")
        $("h1").hide()
    })
    $(".show-btn").click(() => {
        console.log("Ocultando...")
        $("h1").show()
    })
}) 
*/

$(() => {

    $(".hide-btn").click(() => {
        $("h1").fadeOut()//(fadeOut): Se utiliza para que el elemento no desaparezca tan bruscamente.
    })
    $(".show-btn").click(() => {
        $("h1").fadeIn()//(fadeIn): Se utiliza para que el elemento no aparezca tan bruscamente.
    })

    $("li").dblclick(() => {
        $("h1").css({ color: "red" }) //Asi le podriamos cambiar el color al Titulo
    })
    $(".new-element").click(() => {
       // $("ul").append("<li>New Element</li>") --> De esta manera se agregara al ultimo el elemento
        $("ul").prepend("<li>New Element</li>")
    }) //Utilizando "prepend" nos pondra el nuevo elemento al inicio.

    /*$("li").mouseenter((elem) => {
            console.log("Ha entrado el ratón (hover)")
        })*/
    //De esta manera se puede cambiar un elemento sobre el que estoy haciendo "hover"
    $("li").mouseenter((elem) => {
        elem.target.style.color = "blue"
    })
    $("li").mouseleave(elem => {
        elem.target.style.color ="black"
    })
})