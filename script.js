console.log("script carregou")
let tempoinicial = 25 * 60;
let tempo = tempoinicial


let numcontador = 0
const timer = document.getElementById("timer");
const contador = document.getElementById("contador")

let intervalo

function atualizarcontador() {

    contador.textContent = numcontador+"/5 Pomodoro"
}

function atualizarTimer() {
    let minutos = Math.floor(tempo / 60);
    let segundos = tempo % 60;

    timer.textContent = `${minutos}:${String(segundos).padStart(2, "0")}`;
};
atualizarTimer()

function timerzero(){
    if (tempo ===0) {
        clearInterval(intervalo)
        tempo = tempoinicial
        numcontador = numcontador + 1
        atualizarcontador()
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


