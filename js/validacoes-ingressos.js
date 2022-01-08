let selectIngressosAngraInteira = document.getElementById("inteira-angra");
let selectIngressosAngraMeia = document.getElementById("meia-angra");
let selectIngressosLanaInteira = document.getElementById("inteira-lana");
let selectIngressosLanaMeia = document.getElementById("meia-lana");
let selectIngressosOzzyInteira = document.getElementById("inteira-ozzy");
let selectIngressosOzzyMeia = document.getElementById("meia-ozzy");
let selectIngressosBeyonceInteira = document.getElementById("inteira-beyonce");
let selectIngressosBeyonceMeia = document.getElementById("meia-beyonce");
let selectIngressosTheWeekndInteira = document.getElementById("inteira-theweeknd");
let selectIngressosTheWeekndMeia = document.getElementById("meia-theweeknd")
let selectIngressosRammsteinInteira = document.getElementById("inteira-rammstein");
let selectIngressosRammsteinMeia = document.getElementById("meia-rammstein");
let listaDoResumo = getElementById = document.getElementById("resumo");
let nomeDoEventoAngra = "Angra Ømni Tour";
let nomeDoEventoLana = "Lana del Rey: The endless summer tour";
let nomeDoEventoOzzy = "Ozzy Osbourne: The prince of darkness...Live!";
let nomeDoEventoBeyonce = "Beyoncé: OTR II Tour";
let nomeDoEventoTheWeeknd = "The Weeknd: The fall Tour";
let nomeDoEventoRammstein = "Rammstein: Mutter Tour";

$("#inteira-angra").change(function(){
    let valor = $(this).val();
    let tipo = $(this).data("tipo");
    let nome = $(this).data("nome");
    adicionaLinhaNoResumo(valor, tipo, nome);
});

$("#meia-angra").change(function(){
    let valor = $(this).val();
    let tipo = $(this).data("tipo");
    let nome = $(this).data("nome");
    adicionaLinhaNoResumo(valor, tipo, nome);
});

$("#inteira-lana").change(function(){
    let valor = $(this).val();
    let tipo = $(this).data("tipo");
    let nome = $(this).data("nome");
    adicionaLinhaNoResumo(valor, tipo, nome);
});

$("#meia-lana").change(function(){
    let valor = $(this).val();
    let tipo = $(this).data("tipo");
    let nome = $(this).data("nome");
    adicionaLinhaNoResumo(valor, tipo, nome);
});

$("#inteira-ozzy").change(function(){
    let valor = $(this).val();
    let tipo = $(this).data("tipo");
    let nome = $(this).data("nome");
    adicionaLinhaNoResumo(valor, tipo, nome);
});

$("#meia-ozzy").change(function(){
    let valor = $(this).val();
    let tipo = $(this).data("tipo");
    let nome = $(this).data("nome");
    adicionaLinhaNoResumo(valor, tipo, nome);
});

$("#inteira-beyonce").change(function(){
    let valor = $(this).val();
    let tipo = $(this).data("tipo");
    let nome = $(this).data("nome");
    adicionaLinhaNoResumo(valor, tipo, nome);
});

$("#meia-beyonce").change(function(){
    let valor = $(this).val();
    let tipo = $(this).data("tipo");
    let nome = $(this).data("nome");
    adicionaLinhaNoResumo(valor, tipo, nome);
});

$("#inteira-theweeknd").change(function(){
    let valor = $(this).val();
    let tipo = $(this).data("tipo");
    let nome = $(this).data("nome");
    adicionaLinhaNoResumo(valor, tipo, nome);
});

$("#meia-theweeknd").change(function(){
    let valor = $(this).val();
    let tipo = $(this).data("tipo");
    let nome = $(this).data("nome");
    adicionaLinhaNoResumo(valor, tipo, nome);
});

$("#inteira-rammstein").change(function(){
    let valor = $(this).val();
    let tipo = $(this).data("tipo");
    let nome = $(this).data("nome");
    adicionaLinhaNoResumo(valor, tipo, nome);
});

$("#meia-rammstein").change(function(){
    let valor = $(this).val();
    let tipo = $(this).data("tipo");
    let nome = $(this).data("nome");
    adicionaLinhaNoResumo(valor, tipo, nome);
});

function adicionaLinhaNoResumo(valor, tipoDeIngresso, nomeDoEvento) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(`${valor} ingresso(s) ${tipoDeIngresso} para ${nomeDoEvento}`));
    listaDoResumo.appendChild(li);
    li.classList.add("resumo__lista-item");
}


