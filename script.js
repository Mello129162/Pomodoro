console.log("script carregou");
let tempoinicial = 25 * 60;
let tempo = tempoinicial;
let descansotimer = 5 * 60;

let contadorinicial = 0
let numcontador = contadorinicial;
const timer = document.getElementById("timer");
const contador = document.getElementById("contador");
const indicador = document.getElementById("WorknBreak")


let intervalo;

function atualizarcontador() {

    contador.textContent = numcontador+"/5 Pomodoro"
}

function atualizarTimer() {
    let minutos = Math.floor(tempo / 60);
    let segundos = tempo % 60;

    timer.textContent = `${minutos}:${String(segundos).padStart(2, "0")}`;
};
atualizarTimer()

function descanso(){
    if (indicador.textContent == "Trabalhar"){
        tempo = descansotimer
        indicador.textContent = "Intervalo"
    } 
    else{
        tempo = tempoinicial
        indicador.textContent = "Trabalhar"
        numcontador = numcontador - 1
        atualizarcontador()
    }
}


function timerzero(){
    if (tempo ===0) {
        clearInterval(intervalo)
        tempo = tempoinicial
        numcontador = numcontador + 1
        iniciar.textContent = "Iniciar"
        atualizarcontador()
        descanso()
        atualizarTimer()
    }
}
function iniciarTimer() {
    intervalo = setInterval(() => {
        tempo--;
        atualizarTimer();
        timerzero()
    }, 1000);
}

function resettimer() {
    clearInterval(intervalo)
    tempo = tempoinicial
    atualizarTimer()
}


function pause() {
    clearInterval(intervalo)
    atualizarTimer() 
    iniciar.textContent = "Iniciar"
}

function resetall(){
    clearInterval(intervalo)
    tempo = tempoinicial
    numcontador = contadorinicial
    atualizarTimer()
    atualizarcontador()
    iniciar.textContent = "Iniciar"
}

function pula(){
    clearInterval(intervalo)
    atualizarTimer()
    iniciar.textContent = "Iniciar"
    if (indicador.textContent == "Trabalhar"){
        descanso()
    }
    else {
        indicador.textContent = "Trabalhar"
        numcontador = numcontador + 1
        tempo = tempoinicial
        atualizarcontador()
    }
    atualizarTimer()
}

const iniciar = document.getElementById("iniciar");

iniciar.addEventListener("click", () => {
    console.log("iniciar timer");
    if (iniciar.textContent == "Iniciar"){
        iniciarTimer()
        iniciar.textContent = "Pausar"
    }
    else {
        pause()
    }
});

const reset = document.getElementById("reset")

reset.addEventListener ("click" , () => {
    console.log("reiniciando timer")
    resettimer()
})

const skip = document.getElementById("skip")

skip.addEventListener("click",() => {
    pula()
})
