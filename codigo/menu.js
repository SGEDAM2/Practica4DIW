
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
    }
}

/**Función que cambia las propiedades dependiendo del ancho de la ventana */
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