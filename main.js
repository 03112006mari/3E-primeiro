const botoes = document.querySelectorAll(«.botao»);
console.log(botoes)
for(let i=0;i <botoes.length;i++){ botoes[i].onclick = function() {
for(let j=0;j<botoes.length;j++) { botoes[j].classList.remove(«ativo»);
}
botoes[i].classList.add(«ativo»);
   }
const textos = document.querySelectorAll(“.aba-conteudo”);
 textos[i].classList.add(“ativo”);
  textos[j].classList.remove(“ativo”);                                
}
const contadores = document.querySelectorAll(“.contador”);
contadores[0].textContent = “Contagem regressiva”;
const contadores = document.querySelectorAll(“.contador”);
const tempoObjetivo1 = new Date(“2024-10-05”);
let tempoAtual = new Date();
contadores[0].textContent = tempoObjetivo1-tempoAtual;
contadores[0].textContent = calculaTempo(tempoObjetivo1);
function calculaTempo(tempoObjetivo){
let tempoAtual = new Date();
   let tempoAtual = new Date();
let tempoFinal = tempoObjetivo - tempoAtual;
let segundos = tempoFinal / 1000;
let minutos = Math.floor(segundos / 60);
   let horas = Math.floor(minutos / 60);
let dias = Math.floor(horas / 24);
segundos %= 60;
minutos %= 60;
   horas %= 24;
return dias + “ dias “ + horas + “ horas “ + minutos + “
minutos “ + segundos + “ segundos”;
}
