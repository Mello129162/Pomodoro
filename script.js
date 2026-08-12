console.log("script carregou")
let tempoinicial = 25 * 60;
let tempo = tempoinicial

const timer = document.getElementById("timer");

let intervalo

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


