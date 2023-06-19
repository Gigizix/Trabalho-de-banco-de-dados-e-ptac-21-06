const NUM_MOEDAS = 43;
const TEMPO_INICIAL = 10;
let pontos = 0;
let tempo = 0;
let timer = null;

function iniciaJogo(){
    pontos = 0;
    tempo = TEMPO_INICIAL;
    let tela = document.getElementById("tela");
    tela.innerHTML ="";

    for (let i = 0; i < NUM_MOEDAS; ++i) {
        let moeda = document.createElement("img");
        moeda.src = "amougus.png";
        moeda.id = "c" +i;
        moeda.onclick = function(){
        pegaMoeda(this);
        }
        tela.appendChild(moeda);
    }
    timer = setInterval(contaTempo,1000);
}
function pegaMoeda(moeda) {
    moeda
    moeda.src = "amougus.jpg"
    ++pontos;
      
    let contadorPontos = document.getElementById("pontos");
    contadorPontos.innerText =pontos;
}
function contaTempo (){
  if(tempo > 0){
    --tempo;
  
    let contadorTempo = document.getElementById("tempo");
    contadorTempo.innerText = tempo;
    return contaTempo = null;
  }

    if(tempo <= 0){
        clearInterval(timer);
        alert("Parabéns você fez" + pontos + "pontos!");
        iniciaJogo();
    }
}
