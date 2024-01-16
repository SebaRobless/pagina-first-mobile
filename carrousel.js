const flechaDerecha = document.querySelector(".container-buton-right");
let indiceImagenActual = 0; // variable que indica el indice de la imagen en la que se encuentra el carrusel
let transitionButton=false;// se usara para que el boton que permite cambiar imagenes no sea clickeable mientras ocurre una transicion
const divCarrousel = document.querySelector(".carrousel-imgs");
const imagenesCarrousel = divCarrousel.querySelectorAll("img"); 
const arrayImagenes = Array.from(imagenesCarrousel); 
//seleccionamos el carrousel, luego sus hijos(imgs) y lo convertimos en un array de imagenes
console.log(arrayImagenes);


// Manejar evento de visibilidad
document.addEventListener("visibilitychange", function() {
    if (document.visibilityState === "hidden") {
        clearInterval(intervaloCarrusel); // Pausar el carrusel cuando la pestaña esté en segundo plano
    } else if (document.visibilityState === "visible") {
        // Reanudar el carrusel cuando la pestaña vuelva a estar en primer plano
        intervaloCarrusel = setInterval(siguienteImagen, 5000);
    }
});




 let intervaloCarrusel = setInterval(siguienteImagen, 5000); 
//la funcion set interval permite llamar a una funcion automaticamente en un lapso de tiempo indicado en el segundo parametro


flechaDerecha.addEventListener("click",siguienteImagen);

function siguienteImagen(){
    if(!transitionButton){
        transitionButton = true;
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
    
        setTimeout(function() {
            transitionButton = false;
        }, 700);
    }
     clearInterval(intervaloCarrusel); 
     intervaloCarrusel = setInterval(siguienteImagen, 5000); 
    //clearInterval para eliminar el intervalo generado con setInterval para que al presionar el boton se reinicie el temporizador de setInterval
}

const flechaIzquierda= document.querySelector(".container-buton-left");

flechaIzquierda.addEventListener("click",anteriorImagen);

function anteriorImagen(){
    if(!transitionButton){
        transitionButton = true;
        if(indiceImagenActual !== 0){ 
            if(indiceImagenActual==arrayImagenes.length-1){ //para el maximo
                arrayImagenes[indiceImagenActual-1].style.transform = "translateX(0)";
                arrayImagenes[indiceImagenActual-1].style.zIndex = "10";
                arrayImagenes[indiceImagenActual].style.transform = "translateX(100%)";
                arrayImagenes[indiceImagenActual].style.zIndex = "10";
                arrayImagenes[0].style.transform = "translateX(-100%)";
                arrayImagenes[0].style.zIndex = "5";
                indiceImagenActual= indiceImagenActual -1;
            }
            else{ //entre el 0 y el maximo
                arrayImagenes[indiceImagenActual-1].style.transform = "translateX(0)";
                arrayImagenes[indiceImagenActual-1].style.zIndex = "10";
                arrayImagenes[indiceImagenActual].style.transform = "translateX(100%)";
                arrayImagenes[indiceImagenActual].style.zIndex = "10";
                arrayImagenes[indiceImagenActual+1].style.transform = "translateX(-100%)";
                arrayImagenes[indiceImagenActual+1].style.zIndex = "5";
                indiceImagenActual= indiceImagenActual -1;
            }
        }
        else{ //para el 0
            arrayImagenes[arrayImagenes.length-1].style.transform = "translateX(-100%)"
            arrayImagenes[arrayImagenes.length-1].style.zIndex = "5";
            arrayImagenes[indiceImagenActual].style.transform = "translateX(100%)";
            arrayImagenes[indiceImagenActual].style.zIndex = "10";
            indiceImagenActual=arrayImagenes.length-1;
            arrayImagenes[indiceImagenActual].style.transform = "translateX(0)"
            arrayImagenes[indiceImagenActual].style.zIndex = "10";
            arrayImagenes[indiceImagenActual-1].style.transform = "translateX(-100%)";
            arrayImagenes[indiceImagenActual-1].style.zIndex = "5";

        }
        setTimeout(function() {
            transitionButton = false;
        }, 700);
    }
    clearInterval(intervaloCarrusel);
     intervaloCarrusel = setInterval(siguienteImagen, 5000);    
}