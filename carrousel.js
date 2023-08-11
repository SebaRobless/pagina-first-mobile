const flechaDerecha = document.querySelector(".container-buton-right");
let indiceImagenActual = 0; // variable que indica el indice de la imagen en la que se encuentra el carrusel

const divCarrousel = document.querySelector(".carrousel-imgs");
const imagenesCarrousel = divCarrousel.querySelectorAll("img"); 
const arrayImagenes = Array.from(imagenesCarrousel); 
//seleccionamos el carrousel, luego sus hijos(imgs) y lo convertimos en un array de imagenes
console.log(arrayImagenes);


// let intervaloCarrusel = setInterval(siguienteImagen, 5000); 
//la funcion set interval permite llamar a una funcion automaticamente en un lapso de tiempo indicado en el segundo parametro


flechaDerecha.addEventListener("click",siguienteImagen);

function siguienteImagen(){
    

    if(indiceImagenActual<(arrayImagenes.length-1)){
        if(indiceImagenActual==0){
        arrayImagenes[indiceImagenActual+1].style.transform = "translateX(0)";
        arrayImagenes[indiceImagenActual+1].style.zIndex = "10";
        arrayImagenes[indiceImagenActual].style.transform = "translateX(-100%)";
        arrayImagenes[indiceImagenActual].style.zIndex = "10";
        arrayImagenes[arrayImagenes.length-1].style.transform = "translateX(100%)";
        arrayImagenes[arrayImagenes.length-1].style.zIndex = "5";
        indiceImagenActual++;
        }
        else{
            arrayImagenes[indiceImagenActual+1].style.transform = "translateX(0)";
            arrayImagenes[indiceImagenActual+1].style.zIndex = "10";
            arrayImagenes[indiceImagenActual].style.transform = "translateX(-100%)";
            arrayImagenes[indiceImagenActual].style.zIndex = "10";
            arrayImagenes[indiceImagenActual-1].style.transform = "translateX(100%)";
            arrayImagenes[indiceImagenActual-1].style.zIndex = "5";
            indiceImagenActual++;
        }
    }
    else if (indiceImagenActual==(arrayImagenes.length-1)){
        arrayImagenes[indiceImagenActual].style.transform = "translateX(-100%)";
        arrayImagenes[indiceImagenActual].style.zIndex = "10";
        arrayImagenes[indiceImagenActual-1].style.transform = "translateX(100%)";
        arrayImagenes[indiceImagenActual-1].style.zIndex = "5";
        indiceImagenActual=0;
        arrayImagenes[indiceImagenActual].style.transform = "translateX(0)"
        arrayImagenes[indiceImagenActual].style.zIndex = "10";


    }

    // clearInterval(intervaloCarrusel); 
    // intervaloCarrusel = setInterval(siguienteImagen, 5000); 
    //clearInterval para eliminar el intervalo generado con setInterval para que al presionar el boton se reinicie el temporizador de setInterval
}

const flechaIzquierda= document.querySelector(".container-buton-left");

flechaIzquierda.addEventListener("click",anteriorImagen);

function anteriorImagen(){
    if(indiceImagenActual !== 0){
        arrayImagenes[indiceImagenActual-1].style.transform = "translateX(0)"
        arrayImagenes[indiceImagenActual-1].style.zIndex = "10";
        arrayImagenes[indiceImagenActual].style.transform = "translateX(100%)"
        arrayImagenes[indiceImagenActual].style.zIndex = "auto";
        indiceImagenActual = indiceImagenActual-1;
    }
    else{
        arrayImagenes[indiceImagenActual].style.transform = "translateX(100%)"
        arrayImagenes[indiceImagenActual].style.zIndex = "auto";
        indiceImagenActual= (arrayImagenes.length-1);
        arrayImagenes[indiceImagenActual].style.transform = "translateX(0)"
        arrayImagenes[indiceImagenActual].style.zIndex = "10";
    } 

    // clearInterval(intervaloCarrusel);
    // intervaloCarrusel = setInterval(siguienteImagen, 5000);    
}