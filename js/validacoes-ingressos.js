let listaDoResumo = document.getElementById("resumo");
let precoTotal = document.getElementById("total");
precoTotal = 0;

$("#inteira-angra").change(function(){
    let quantidade = $(this).val();
    let tipo = $(this).data("tipo");
    let nome = $(this).data("nome");
    adicionaLinhaNoResumo(quantidade, tipo, nome);
});

$("#meia-angra").change(function(){
    let quantidade = $(this).val();
    let tipo = $(this).data("tipo");
    let nome = $(this).data("nome");
    adicionaLinhaNoResumo(quantidade, tipo, nome);
});

$("#inteira-lana").change(function(){
    let quantidade = $(this).val();
    let tipo = $(this).data("tipo");
    let nome = $(this).data("nome");
    adicionaLinhaNoResumo(quantidade, tipo, nome);
});

$("#meia-lana").change(function(){
    let quantidade = $(this).val();
    let tipo = $(this).data("tipo");
    let nome = $(this).data("nome");
    adicionaLinhaNoResumo(quantidade, tipo, nome);
});

$("#inteira-ozzy").change(function(){
    let quantidade = $(this).val();
    let tipo = $(this).data("tipo");
    let nome = $(this).data("nome");
    adicionaLinhaNoResumo(quantidade, tipo, nome);
});

$("#meia-ozzy").change(function(){
    let quantidade = $(this).val();
    let tipo = $(this).data("tipo");
    let nome = $(this).data("nome");
    adicionaLinhaNoResumo(quantidade, tipo, nome);
});

$("#inteira-beyonce").change(function(){
    let quantidade = $(this).val();
    let tipo = $(this).data("tipo");
    let nome = $(this).data("nome");
    adicionaLinhaNoResumo(quantidade, tipo, nome);
});

$("#meia-beyonce").change(function(){
    let quantidade = $(this).val();
    let tipo = $(this).data("tipo");
    let nome = $(this).data("nome");
    adicionaLinhaNoResumo(quantidade, tipo, nome);
});

$("#inteira-theweeknd").change(function(){
    let quantidade = $(this).val();
    let tipo = $(this).data("tipo");
    let nome = $(this).data("nome");
    adicionaLinhaNoResumo(quantidade, tipo, nome);
});

$("#meia-theweeknd").change(function(){
    let quantidade = $(this).val();
    let tipo = $(this).data("tipo");
    let nome = $(this).data("nome");
    adicionaLinhaNoResumo(quantidade, tipo, nome);
});

$("#inteira-rammstein").change(function(){
    let quantidade = $(this).val();
    let tipo = $(this).data("tipo");
    let nome = $(this).data("nome");
    adicionaLinhaNoResumo(quantidade, tipo, nome);
});

$("#meia-rammstein").change(function(){
    let quantidade = $(this).val();
    let tipo = $(this).data("tipo");
    let nome = $(this).data("nome");
    adicionaLinhaNoResumo(quantidade, tipo, nome);
});

function adicionaLinhaNoResumo(quantidadeDeIngresso, tipoDeIngresso, nomeDoEvento) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(`${quantidadeDeIngresso} ingresso(s) ${tipoDeIngresso} para ${nomeDoEvento}`));
    listaDoResumo.appendChild(li);
    li.classList.add("resumo__lista-item");
}



