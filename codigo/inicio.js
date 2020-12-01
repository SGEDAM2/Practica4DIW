/**
 * Autor: SusanaGE
 * Fecha:01-12-2020
 */
//VARIABLES
//Variable que indica que sección se tiene que mostrar
let indice = 0;

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
}

//Ocultar todas las secciones
ocultarSecciones();

//Para que se ejecute la primera vez el carrusel
mostrarSeccion();

//Que las secciones cambien cada 5 segundos
window.setInterval(mostrarSeccion, 3000);

