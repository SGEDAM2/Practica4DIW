/**
 * Funciones del formulario de altas del administrador
 * 
 * Autor: SusanaGE
 * Fecha:20-12-2020
 */
document.addEventListener("DOMContentLoaded",()=>{
    //Ocultar todos los modulos de cada ciclo
    let elementos=document.getElementsByClassName("fs");
    for(let i=0; i<elementos.length;i++)
        elementos[i].style.display="none";

    //Añadir evento click a todas los checkbox de cada ciclo
    elementos=document.getElementsByClassName("fs-label");
    for(let i=0; i<elementos.length;i++)
        elementos[i].addEventListener("click",mostrarOpciones);

    //Añadir evento click al profesor
    document.getElementById("profesor").addEventListener("click", ()=>{
        deshabilitar(false);
    });
    //Añadir evento click al alumno
    document.getElementById("alumno").addEventListener("click", ()=>{
        let elementos=document.getElementsByClassName("fs");
        for(let i=0; i<elementos.length;i++)
            elementos[i].style.display="none";
        elementos=document.getElementsByClassName("fs-label");
        for(let i=0; i<elementos.length;i++)
            elementos[i].checked=false;
    });

})
const mostrarOpciones = e =>{
    //Mostrar u ocultar opciones al pulsar en un fieldset
    let fieldset = document.getElementById("fs-"+e.target.id);
    if(e.target.checked){
        //Mostrar contenido
        fieldset.style.display="grid";
        //Si es alumno deshabilitar el resto de ciclos
        if(document.getElementById("alumno").checked)
            deshabilitar(true,e.target.id);
    }else{
        fieldset.style.display="none";
        //Si es alumno habitilar el resto de ciclos
        if(document.getElementById("alumno").checked)
            deshabilitar(false,e.target.id);
    }
}

//Habilitar o deshabilitar el resto de ciclos
const deshabilitar = (opcion,ciclo="") =>{
    
    elementos=document.getElementsByClassName("fs-label");
    for(const elemento of elementos){
        if(elemento.id !== ciclo)
            elemento.disabled=opcion;
    }

}