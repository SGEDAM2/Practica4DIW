/**
 * Funciones del formulario de altas del administrador
 * 
 * Autor: SusanaGE
 * Fecha:20-12-2020
 */
document.addEventListener("DOMContentLoaded",()=>{
    let elementos=document.getElementsByClassName("fs");
    for(let i=0; i<elementos.length;i++){
        elementos[i].style.display="none";
    }
})
function mostrarOpciones(elemento){
    //console.log(elemento.id);
    let fieldset = document.getElementById("fs-"+elemento.id);
    if(elemento.checked)
        fieldset.style.display="grid";
    else
        fieldset.style.display="none";
    //console.log(fieldset);
}