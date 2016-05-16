$(document).ready(function(){
	function Opacidad(){
        if ($('#foco').hasClass('white')) {
             $('#foco').fadeTo('slow',0.3)
             $('#foco').removeClass('white');
        }
        else {
        	$('#foco').fadeTo('slow',0.8); 
            $('#foco').addClass('white');
        }
    }

    setInterval(Opacidad, 1000);


function maquina(contenedor,texto,intervalo){
   // Calculamos la longitud del texto
   longitud = texto.length;
   // Obtenemos referencia del div donde se va a alojar el texto.
   cnt = document.getElementById(contenedor);
   var i=0;
   // Creamos el timer
   timer = setInterval(function(){
      // Vamos añadiendo letra por letra y la _ al final.
      cnt.innerHTML = cnt.innerHTML.substr(0,cnt.innerHTML.length-1) + texto.charAt(i) + "_";
      // Si hemos llegado al final del texto..
      if(i >= longitud){
         // Salimos del Timer y quitamos la barra baja (_)
         clearInterval(timer);
         cnt.innerHTML = cnt.innerHTML.substr(0,longitud);
         return true;
      } else {
         // En caso contrario.. seguimos
         i++;
      }},intervalo);
};

var texto = "Hola mundo.. ";
var texto1 = "Mi nombre es Janet ";
var texto2 = "Quiero conocer el mundo del Front End y Back End ";
var texto3 ="Quiero ser una full-stack"
// 100 es el intervalo de minisegundos en el que se escribirá cada letra.
maquina("maquina",texto,100);
maquina("maquina",texto1,100);
});
});