<<<<<<< HEAD
/**
 * Funciones de la barra de navegación
 * 
 * Autor: SusanaGE
 * Fecha:16-12-2020
 */
document.addEventListener("DOMContentLoaded", () => {
    //Obtener el ancho de la sección segun el tamaño de la ventana
    window.addEventListener("resize", cambiarAncho);
    //Obtener el ancho la primera vez
    cambiarAncho();
    document.getElementById("menu").addEventListener("click", mostrarOcultar)
})

let mostrar = true;
const mostrarOcultar = (e) => {
    let nav = document.getElementById("navegacion");
    let lista = document.getElementById("lista");
    let menu = document.getElementById("menu");

    let cabecera = document.getElementsByTagName("header")[0];
    if (mostrar) {
        nav.style.display = "block";
        lista.style.flexDirection = "column";
        menu.style.backgroundColor="#FFC756";
        mostrar = false;
    } else {
        nav.style.display = "none";
        lista.style.flexDirection = "row";
        menu.style.backgroundColor="#6897DE";
        mostrar = true;
=======

document.addEventListener("DOMContentLoaded",()=>{
/*     //Obtener el ancho de la sección segun el tamaño de la ventana
    window.addEventListener("resize",cambiarAncho);
    //Obtener el ancho la primera vez
    cambiarAncho(); */
    document.getElementById("menu").addEventListener("click",mostrarOcultar)
})

let mostrar=true;
const mostrarOcultar = (e)=>{
    let contenedor=document.getElementById("lista");
    let elementos=document.getElementsByClassName("opcion");
    let cabecera=document.getElementsByTagName("header")[0];
    if(mostrar){
        contenedor.style.flexDirection="column";
        cabecera.style.height="250px";
        for(let i=0; i< elementos.length; i++)
            elementos[i].style.display="block";
        /* cabecera.classList.add("menuMostrar");
        cabecera.classList.remove("menuOcultar");
        for(let i=0; i< elementos.length; i++){
            elementos[i].classList.add("opcionMostrar");
            elementos[i].classList.remove("opcionOcultar");
        } */
            
        mostrar=false;
    }else{
        contenedor.style.flexDirection="row";
        cabecera.style.height="150px";
        for(let i=0; i< elementos.length; i++)
            elementos[i].style.display="none";
        /* cabecera.classList.add("menuOcultar");
        cabecera.classList.remove("menuMostrar");
        for(let i=0; i< elementos.length; i++){
            elementos[i].classList.add("opcionOcultar");
            elementos[i].classList.remove("opcionMostrar");
        } */
        mostrar=true; 
>>>>>>> 60dc1576187a7f9c98acdfce4cd95864eca30e5d
    }
}

/**Función que cambia las propiedades dependiendo del ancho de la ventana */
<<<<<<< HEAD
function cambiarAncho() {
    let nav = document.getElementById("navegacion");
    let lista = document.getElementById("lista");
    if (window.innerWidth < 576) {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
        lista.style.flexDirection = "row";
    }
}
=======
/* function cambiarAncho(){
    let contenedor=document.getElementById("lista");
    let cabecera=document.getElementsByTagName("header")[0];
    if(window.innerWidth < 576){
        contenedor.style.flexDirection="column";
    }
    else{
        contenedor.style.flexDirection="row";
        cabecera.style.height="150px";
        console.log("aqui");
    }
} */
>>>>>>> 60dc1576187a7f9c98acdfce4cd95864eca30e5d
