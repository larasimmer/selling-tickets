let listaDoResumo = document.getElementById("resumo");
let precoTotal = document.getElementById("total");
let total = 0;

$("#inteira-angra").change(function(){
    let quantidade = $(this).val();
    let tipo = $(this).data("tipo");
    let nome = $(this).data("nome");
    let preco = $(this).data("preco");
    adicionaLinhaNoResumo(quantidade, tipo, nome);
    adicionaPrecoAoTotal(quantidade, preco);
});

$("#meia-angra").change(function(){
    let quantidade = $(this).val();
    let tipo = $(this).data("tipo");
    let nome = $(this).data("nome");
    let preco = $(this).data("preco");
    adicionaLinhaNoResumo(quantidade, tipo, nome);
    adicionaPrecoAoTotal(quantidade, preco);
});

$("#inteira-lana").change(function(){
    let quantidade = $(this).val();
    let tipo = $(this).data("tipo");
    let nome = $(this).data("nome");
    let preco = $(this).data("preco");
    adicionaLinhaNoResumo(quantidade, tipo, nome);
    adicionaPrecoAoTotal(quantidade, preco);
});

$("#meia-lana").change(function(){
    let quantidade = $(this).val();
    let tipo = $(this).data("tipo");
    let nome = $(this).data("nome");
    let preco = $(this).data("preco");
    adicionaLinhaNoResumo(quantidade, tipo, nome);
    adicionaPrecoAoTotal(quantidade, preco);
});

$("#inteira-ozzy").change(function(){
    let quantidade = $(this).val();
    let tipo = $(this).data("tipo");
    let nome = $(this).data("nome");
    let preco = $(this).data("preco");
    adicionaLinhaNoResumo(quantidade, tipo, nome);
    adicionaPrecoAoTotal(quantidade, preco);
});

$("#meia-ozzy").change(function(){
    let quantidade = $(this).val();
    let tipo = $(this).data("tipo");
    let nome = $(this).data("nome");
    let preco = $(this).data("preco");
    adicionaLinhaNoResumo(quantidade, tipo, nome);
    adicionaPrecoAoTotal(quantidade, preco);
});

$("#inteira-beyonce").change(function(){
    let quantidade = $(this).val();
    let tipo = $(this).data("tipo");
    let nome = $(this).data("nome");
    let preco = $(this).data("preco");
    adicionaLinhaNoResumo(quantidade, tipo, nome);
    adicionaPrecoAoTotal(quantidade, preco);
});

$("#meia-beyonce").change(function(){
    let quantidade = $(this).val();
    let tipo = $(this).data("tipo");
    let nome = $(this).data("nome");
    let preco = $(this).data("preco");
    adicionaLinhaNoResumo(quantidade, tipo, nome);
    adicionaPrecoAoTotal(quantidade, preco);
});

$("#inteira-theweeknd").change(function(){
    let quantidade = $(this).val();
    let tipo = $(this).data("tipo");
    let nome = $(this).data("nome");
    let preco = $(this).data("preco");
    adicionaLinhaNoResumo(quantidade, tipo, nome);
    adicionaPrecoAoTotal(quantidade, preco);
});

$("#meia-theweeknd").change(function(){
    let quantidade = $(this).val();
    let tipo = $(this).data("tipo");
    let nome = $(this).data("nome");
    let preco = $(this).data("preco");
    adicionaLinhaNoResumo(quantidade, tipo, nome);
    adicionaPrecoAoTotal(quantidade, preco);
});

$("#inteira-rammstein").change(function(){
    let quantidade = $(this).val();
    let tipo = $(this).data("tipo");
    let nome = $(this).data("nome");
    let preco = $(this).data("preco");
    adicionaLinhaNoResumo(quantidade, tipo, nome);
    adicionaPrecoAoTotal(quantidade, preco);
});

$("#meia-rammstein").change(function(){
    let quantidade = $(this).val();
    let tipo = $(this).data("tipo");
    let nome = $(this).data("nome");
    let preco = $(this).data("preco");
    adicionaLinhaNoResumo(quantidade, tipo, nome);
    adicionaPrecoAoTotal(quantidade, preco);
});

function adicionaLinhaNoResumo(quantidadeDeIngresso, tipoDeIngresso, nomeDoEvento) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(`${quantidadeDeIngresso} ingresso(s) ${tipoDeIngresso} para ${nomeDoEvento}`));
    listaDoResumo.appendChild(li);
    li.classList.add("resumo__lista-item");
}

function adicionaPrecoAoTotal(quantidadeDeIngresso,precoDoIngresso) {
    let precoASerAdicionadoAoTotal = quantidadeDeIngresso*precoDoIngresso;
    total = total + precoASerAdicionadoAoTotal;
    precoTotal.innerHTML = `Total: R$ ${total},00`;
}



