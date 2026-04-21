let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");
let btnArriba = document.getElementById("btnArriba");
let btnIzquierda = document.getElementById("btnIzquierda");
let btnAbajo = document.getElementById("btnAbajo");
let btnDerecha = document.getElementById("btnDerecha");
let puntaje = 0;
let tiempo = 15;
let intervalo;

const VELOCIDAD = 15;
// Gato
let gatoX = 0;
let gatoY = 0;
const ANCHOGATO = 50;
const ALTURAGATO = 50;

const LIMITE_X = canvas.width - ANCHOGATO;
const LIMITE_Y = canvas.height - ALTURAGATO;

// Comida
let comidaX = 0;
let comidaY = 0;
const ANCHOCOMIDA = 30;
const ALTURACOMIDA = 30;


function graficarGato() {
    graficarRectangulo(gatoX, gatoY, ANCHOGATO, ALTURAGATO, "#000000");

};

function graficarComida() {
    graficarRectangulo(comidaX, comidaY, ANCHOCOMIDA, ALTURACOMIDA, "#ff0000");
};
    // INICIAR JUEGO
function iniciarJuego() {
    //GATO CENTRADO
    gatoX = (canvas.width / 2) - (ANCHOGATO / 2);
    gatoY = (canvas.height / 2) - (ALTURAGATO / 2);

    //COMIDA ESQUINA INFERIOR DERECHA
    comidaX = canvas.width - ANCHOCOMIDA;
    comidaY = canvas.height - ALTURACOMIDA;
    intervalo = setInterval(restarTiempo, 1000);

    graficarGato();
    graficarComida();
}
function graficarRectangulo(x,y,ancho,alto,color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
}
    //DIBUJAR TODO
function dibujarTodo(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    graficarGato()
    graficarComida();
}

function limpiarCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function moverIzquierda(){
    if (gatoX > 0) {
        gatoX -= 10;

        limpiarCanvas();
        graficarGato();
        graficarComida();
        detectarColision();
    }
}

function moverDerecha(){
    gatoX += 10;
    limpiarCanvas();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverArriba(){
    gatoY -= 10;
    limpiarCanvas();
    graficarGato();
    graficarComida();
    detectarColision();
}


function moverAbajo(){
    gatoY += 10;
    limpiarCanvas();
    graficarGato();
    graficarComida();
    detectarColision();
}

function detectarColision(){
    if(
        gatoX < comidaX + ANCHOCOMIDA &&
        gatoX + ANCHOGATO > comidaX &&
        gatoY < comidaY + ALTURACOMIDA &&
        gatoY + ALTURAGATO > comidaY
    ){
        puntaje++;
        tiempo = 15;
        
        mostrarEnSpan("puntos", puntaje);

        comidaX = generarAleatorio(0, canvas.width - ANCHOCOMIDA);
        comidaY = generarAleatorio(0, canvas.height - ALTURACOMIDA);

        dibujarTodo();
    }
    if (puntaje >= 6) {
    clearInterval(intervalo);
    alert("Haz ganado");
    }



    
}

function restarTiempo (){
    tiempo --;
    mostrarEnSpan("tiempo", tiempo);
    if (tiempo <= 0) {
        clearInterval(intervalo); 
        alert("Game Over");
    }
}

function reiniciarJuego() {
    clearInterval(intervalo);
    puntaje = 0;
    tiempo = 10;

    mostrarEnSpan("puntos", puntaje);
    mostrarEnSpan("tiempo", tiempo);
    
    iniciarJuego();
}



document.getElementById("btnArriba").onclick = () => moverArriba();
document.getElementById("btnAbajo").onclick = () => moverAbajo();
document.getElementById("btnIzquierda").onclick = () => moverIzquierda();
document.getElementById("btnDerecha").onclick = () => moverDerecha();
document.getElementById("btnReiniciar").onclick = () => reiniciarJuego();
