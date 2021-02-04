/**
 * Autor: SusanaGE
 * Fecha:04-02-2021
 */

document.addEventListener("DOMContentLoaded",()=>{
    let elementos=document.getElementsByClassName("borrar");
    for(const elemento of elementos)
        elemento.addEventListener("click",borrarUsuario);
});

const borrarUsuario = e =>{
    console.log(e.target);
    if(e.target.tagName === "svg")
        e.target.parentElement.parentElement.parentElement.remove();
    else
        e.target.parentElement.remove();
}