let temporizador;
let segundos = 0;
let enEjecucion = false;

function iniciarCronometro() {
    if (!enEjecucion) {
        temporizador = setInterval(actualizarCronometro, 1000);
        enEjecucion = true;
    }
}

function pausarCronometro() {
    clearInterval(temporizador);
    enEjecucion = false;
}

function resetearCronometro() {
    clearInterval(temporizador);
    segundos = 0;
    actualizarDisplay();
    enEjecucion = false;
}

function actualizarCronometro() {
    segundos++;
    actualizarDisplay();
}

function actualizarDisplay() {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;
    const tiempoFormateado = `${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
    document.getElementById('cronometro').innerText = tiempoFormateado;
}