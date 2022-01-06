let inputNumeroDoCartao = document.getElementById("numero-cartao");
let erroNumeroDoCartaoVazio = document.getElementById("numero-cartao-vazio");
let inputAnoDeValidade= document.getElementById("ano-validade");
let erroAnoDeValidadeVazio = document.getElementById("ano-validade-vazio");
let inputCodigoDeSeguranca = document.getElementById("codigo-seguranca");
let erroCodigoDeSegurancaVazio = document.getElementById("codigo-seguranca-vazio");
let inputNomeDoTitular = document.getElementById("nome-titular");
let erroNomeDoTitularVazio = document.getElementById("nome-titular-vazio");
let inputDataDeNascimento = document.getElementById("data-nascimento");
let erroDataDeNascimentoVazio = document.getElementById("nascimento-vazio");
let erroDataDeNascimentoInvalida = document.getElementById("nascimento-invalido");
let inputCpf = document.getElementById("cpf");
let erroCpfVazio = document.getElementById("cpf-vazio");
let erroCpfInvalido = document.getElementById("cpf-invalido");
let inputTelefone = document.getElementById("telefone");
let erroTelefoneVazio = document.getElementById("telefone-vazio");
let inputCep = document.getElementById("cep");
let erroCepVazio = document.getElementById("cep-vazio");
let inputLogradouro = document.getElementById("logradouro");
let erroLogradouroVazio = document.getElementById("logradouro-vazio");
let inputBairro = document.getElementById("bairro");
let erroBairroVazio = document.getElementById("bairro-vazio");
let inputCidade = document.getElementById("cidade");
let erroCidadeVazia = document.getElementById("cidade-vazio");

let formularioDePagamento = document.getElementById("form-pagamento");
let botaoFinalizar = document.getElementById("botao-finalizar");

botaoFinalizar.onclick = realizaValidacoes;

function realizaValidacoes() {
    validaNumeroDoCartaoVazio();
}

function validaNumeroDoCartaoVazio() {
    let valorNumeroDoCartao = inputNumeroDoCartao.value;
    let numeroDoCartaoVazio = false;

    if (valorNumeroDoCartao.length <= 0) {
        numeroDoCartaoVazio = true;
        erroNumeroDoCartaoVazio.style.display = "block";
    } else {
        erroNumeroDoCartaoVazio.style.display = "none";
        numeroDoCartaoVazio = false;
    }

    return numeroDoCartaoVazio;
}

function validaAnoDeValidadeVazio() {
    let valorAnoDeValidade = inputAnoDeValidade.value;
    let anoDeValidadeVazio = false;

    if (valorAnoDeValidade.length <= 0) {
        anoDeValidadeVazio = true;
        erroAnoDeValidadeVazio.style.display = "block";
    } else {
        erroAnoDeValidadeVazio.style.display = "none";
        anoDeValidadeVazio = false;
    }

    return anoDeValidadeVazio;
}

