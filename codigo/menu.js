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
    }
}

/**Función que cambia las propiedades dependiendo del ancho de la ventana */
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