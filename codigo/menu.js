
document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("menu").addEventListener("click",mostrarOcultar)
})

let mostrar=true;
const mostrarOcultar = (e)=>{
    console.log("aqui")
    if(mostrar){
        let elementos=document.getElementsByClassName("opcion");
        for(let i=0; i< elementos.length; i++)
            elementos[i].style.display="block";
        console.log("aqui")
    }
}