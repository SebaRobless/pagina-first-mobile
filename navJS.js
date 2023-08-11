const button = document.querySelector(".nav_button");
const menu = document.querySelector(".nav_links_active");
console.log(button);

button.addEventListener("click", abrirMenu);

function abrirMenu(){
    const menuHeight = menu.scrollHeight + "px"; // Obtener la altura real del contenido del menú. menu.scrollHeight para obtener la altura real del contenido del menú (se define automaticamente el valor maximo del height segun el contenido), y luego concatenando "px" para asegurarnos de que el valor sea una cadena de píxeles válida para la propiedad max-height.
   
   // Cambiar la altura máxima para mostrar u ocultar el menú
    if(menu.style.maxHeight === "0px"){
        return (menu.style.maxHeight = menuHeight);
    }
    else{
        return (menu.style.maxHeight = "0px");
    }
}



