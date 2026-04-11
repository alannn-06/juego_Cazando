let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");



let gatoX = 0;
let gatoY = 0;
const ANCHOGATO = 50;
const ALTURAGATO = 50;
 

 
function graficar(x, y, ancho, alto, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
}
 
function graficarGato() {
    gatoX = (canvas.width/2) - (ANCHOGATO/2);
    gatoY = (canvas.height/2) - (ALTURAGATO/2);
    graficar(gatoX, gatoY, ANCHOGATO, ALTURAGATO, "#000000");
}


graficarGato();
   






