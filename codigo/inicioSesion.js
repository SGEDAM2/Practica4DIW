/**
 * Acceso a la página principal del adminitrador más pulsar el botón de inicio
 * 
 * Autor:SusanaGE
 * Fecha:04-02-2021
 */

document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("iniciar").addEventListener("click",acceder);
});

const acceder = e =>{
    e.preventDefault();
    window.location.assign("paginas/administrador/administrador.html");
}