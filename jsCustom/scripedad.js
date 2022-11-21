window.onload = iniciar;

    function iniciar(){
        document.querySelector(".emergente .menor").addEventListener("click",adios);
        document.querySelector(".emergente .mayor").addEventListener("click",hola);
    }
        
    function adios(){
        location.href="https://newcp.net/es/";
    }    
    function hola(){
        document.querySelector(".emergente").style.display="none";
        document.querySelector("#container").style.opacity="1";
    }

    