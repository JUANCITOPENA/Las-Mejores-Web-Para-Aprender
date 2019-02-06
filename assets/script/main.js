//Obtener los elementos de la clase .close

let links = document.querySelectorAll(".close");

//Recorremos 

links.forEach(function(link) {

    //Agregamos un evento click a cada uno de ellos (recordar case sensitive)
    links.addEventListenet("click", function(ev) {
        ev.preventDefault();
        let content = document.querySelector('content');

        //Quitale las clases de animacion que tiene
        content.classList.remove("bounceInLeft");
        content.classList.remove("animated");

        //Agregar clases para animar su salida fadeOutUp
        content.classList.add("fadeOutUp");
        content.classList.add("animated");

        setTimeout(function() {
            location.href = "/";
        }, 700);

        return false;


    });

});