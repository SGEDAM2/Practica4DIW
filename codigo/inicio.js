/**
 * Carrusel de imagenes
 * 
 * Autor: SusanaGE
 * Fecha:01-12-2020
 */
//VARIABLES
//Variable que indica que sección se tiene que mostrar
let indice = 0;
<<<<<<< HEAD
let ancho ="60%";

document.addEventListener("DOMContentLoaded", () => {
=======
let ancho ="50%";

document.addEventListener("DOMContentLoaded", () => {
  //Obtener el ancho de la sección segun el tamaño de la ventana
  window.addEventListener("resize",cambiarAncho);
  //Obtener el ancho la primera vez
  cambiarAncho();

>>>>>>> 60dc1576187a7f9c98acdfce4cd95864eca30e5d
  //CARRUSEL
  //Ocultar todas las secciones
  ocultarSecciones();
  //Para que se ejecute la primera vez el carrusel
  mostrarSeccion();
  //Que las secciones cambien cada 5 segundos
  window.setInterval(mostrarSeccion, 3000);
})

//FUNCIONES
/**Función que realiza el funcionamiento de "carrusel" de las secciones.
 * Dependiendo el indice muestra una sección u otra.
 */
function mostrarSeccion() {
  let elemento = document.getElementsByTagName("section");

  //Mostrar
  if (indice == 0) {
    elemento[elemento.length - 1].style.display = "none";
    elemento[indice].style.display = "flex";
  } else {
    elemento[indice - 1].style.display = "none";
    elemento[indice].style.display = "flex";
  }

  //Incrementar
  if (indice == elemento.length - 1)
    indice = 0;
  else
    indice++;
}

/**Función que oculta todas las secciones */
function ocultarSecciones() {
  let elementos = document.getElementsByTagName("section");
  for (let i = 0; i < elementos.length; i++) {
    elementos[i].style.display = "none";
  }
<<<<<<< HEAD
}
=======
}

/**Función que según el ancho de la ventana cambia el menú y las secciones */
function cambiarAncho(){
  let contenedor=document.getElementById("lista");
  let cabecera=document.getElementsByTagName("header")[0];
  let elementos=document.getElementsByClassName("opcion");

  if(window.innerWidth < 576){
    ancho="80%"; //Sección

    //Menu
    for(let i=0; i< elementos.length; i++)
      elementos[i].style.display="none";

    //contenedor.style.flexDirection="column";
  }else{
    ancho="50%" //Sección

    //menu
    contenedor.style.flexDirection="row";
    cabecera.style.height="150px";
    for(let i=0; i< elementos.length; i++)
      elementos[i].style.display="block";
  }
  //Sección
  elementos = document.getElementsByTagName("section");
  for (let i = 0; i < elementos.length; i++) {
    elementos[i].style.width = ancho;
  }
}
>>>>>>> 60dc1576187a7f9c98acdfce4cd95864eca30e5d
