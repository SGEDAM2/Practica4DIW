/**
 * Autor: SusanaGE
 * Fecha:04-02-2021
 */

document.addEventListener("DOMContentLoaded",()=>{
    let elementos=document.getElementsByClassName("borrar");
    for(const elemento of elementos)
        elemento.addEventListener("click",borrarUsuario);
});

/*Borrar un usuario*/
const borrarUsuario = e =>{
    //console.log(e.target.tagName);
    if(confirm("¿Seguro que desea eliminar al usuario?")){
        if(e.target.tagName === "BUTTON")
            e.target.parentElement.parentElement.remove();
        else if(e.target.tagName === "svg" || e.target.tagName === "HTMLFontElement")
            e.target.parentElement.parentElement.parentElement.remove();
        else
            e.target.parentElement.remove();
    }
}