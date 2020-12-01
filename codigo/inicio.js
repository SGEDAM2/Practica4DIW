let indice=0;
function mostrarSeccion(){
    let elemento=document.getElementsByTagName("section");

    //Mostrar
    if(indice == 0){
        elemento[elemento.length-1].style.display="none";
        elemento[indice].style.display="block";
    }else{
        elemento[indice-1].style.display="none";
        elemento[indice].style.display="block";
    }

    //Incrementar
    if(indice == elemento.length - 1 )
        indice = 0;
    else
        indice++;
}
window.setInterval(mostrarSeccion,5000);
mostrarSeccion();
//var slideIndex = 1;
//showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}