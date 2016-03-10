/*global window */
/*global alert */
/*jslint browser: true, for:true */

/**JavaScript Document
 * Curso: HMTL5 - Pildoras Informáticas - Geolocation III
 * Origin: Capitulo47.html ==> Asignar posición en mapa
 */

// "use strict";


//1. Definición de Objetos y Variables
var miUbicacion;
var dameUbicacion;



//1.1 Extracción de elementos desde HTML
miUbicacion = document.getElementById("ubicacion");
dameUbicacion = document.getElementById("dame-ubicacion");

//2. Definición de Funciones
function mostrarPosicion(posicion) {

    'use strict';

    var latitud;
    var longitud;
//    var exactitud;
//    var ubicacion;
    var mapaApi;
    var ubicacionMapa;
    var parametrosMapaApi;
    var mimapa;

    latitud = posicion.coords.latitude;
    longitud = posicion.coords.longitude;

/*    exactitud = posicion.coords.accuracy";
    ubicacion = "Latitud: " + latitud + "<br />";
    ubicacion += "Longitud: " +longitud + "<br />";
    ubicacion += "Exactitud: " + exactitud + "<br />";
*/
    mapaApi = "http://maps.google.com/maps/api/staticmap?center=";
    ubicacionMapa = latitud + "," + longitud;
    parametrosMapaApi = "&zoom=14&size=400x400&sensor=false&markers=";

    mimapa = mapaApi + ubicacionMapa + "," + parametrosMapaApi + ubicacionMapa;
//    mimapa = "http://maps.google.com/maps/api/staticmap?center=" + posicion.coords.latitude + "," + posicion.coords.longitude + "," + "&zoom=12&size=400x400&sensor=false&markers=" + posicion.coords.latitude + "," + posicion.coords.longitude;

    miUbicacion.innerHTML = "<img src = '" + mimapa + "' />";
}

function gestionErrores(error) {

    'use strict';

//    alert("Ha habido un error: " + "error " + error.code + " " + error.message);

//    if (error.message == "User denied Geolocation") {
//        alert("Por favor, activa la ubicación en tu navegador");
//    }

    if (error.code === 1) {
        alert("Por favor, activa la ubicación en tu navegador");
    }
}


function obtenerUbicacion() {

    'use strict';

// definimos el objeto parametros como tercer argumento del métodx getCurrentPosition.
    var parametros;

    parametros = {enableHighAccuracy: true, timeout: 10000, maximumAge: 60000};

// Llamamos al métodx getCurrentPosition perteneciente al API geolocation que
// pertenece al objetoJS navigator y guarda como evento el objeto position que
// devuelve

//Usando getCurrentPosition(), el significado de maximumAge:60000 es que si tiene almacenada una posición en la cache hace menos de un segundo, que la use en vez de buscarla de nuevo.
    navigator.geolocation.getCurrentPosition(mostrarPosicion, gestionErrores, parametros);

//Usando watchPosition(), el significado de maximumAge:60000 es que actualice la posición cada 60 segundos.
//    navigator.geolocation.watchPosition(mostrarPosicion, gestionErrores, parametros);
}

function comenzar() {

    'use strict';

    dameUbicacion.addEventListener("click", obtenerUbicacion, false);
}


//3. Asignación de Eventos
document.addEventListener("DOMContentLoaded", comenzar, false);
