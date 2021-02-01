const comptador = document.getElementById("comptador");
const barraComptador = document.getElementById("barraComptador");

let temps = 0;
const tempsMaxim = 10; // 10s
const ampleBarra = 150; // 150px
const barraPlena = ampleBarra / tempsMaxim;
let TEMPORITZADOR;

TEMPORITZADOR = setInterval(dibuxaComptador,1000); // 1000ms = 1s

function dibuxaComptador(){
    if(temps <= tempsMaxim){
        comptador.innerHTML = temps;
        barraComptador.style.width = temps * barraPlena + "px";
        temps++
    }
}  // dibuxaComptador(){