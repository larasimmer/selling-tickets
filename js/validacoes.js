let inputPrimeiroNome = document.getElementById("primeiro-nome");
let valorPrimeiroNome = inputPrimeiroNome.value;
let erroPrimeiroNomeVazio = document.getElementById("primeiro-nome-vazio");
let inputUltimoNome = document.getElementById("ultimo-nome");
let valorUltimoNome = inputUltimoNome.value;
let erroUltimoNomeVazio = document.getElementById("ultimo-nome-vazio");
let inputEmail = document.getElementById("email");
let valorEmail = inputEmail.value;
let erroEmailVazio = document.getElementById("email-vazio");
let erroEmailInvalido = document.getElementById("email-invalido");
let inputSenha = document.getElementById("senha");
let valorSenha = inputSenha.value;
let erroSenhaVazia = document.getElementById("senha-vazio");
let erroSenhaInvalida = document.getElementById("senha-invalida");
let erroSenhaDiferente = document.getElementById("senha-diferente");
let inputConfirmarSenha = document.getElementById("confirmar-senha");
let valorConfirmarSenha = inputConfirmarSenha.value;
let erroConfirmarSenhaVazio = document.getElementById("confirmar-senha-vazio");
let botaoAvancarParaPagamento = document.getElementById("botao-avancar");

botaoAvancarParaPagamento.onclick = validaPrimeiroNome;

function validaPrimeiroNome() {
    let primeiroNomeVazio = false;

    if (valorPrimeiroNome.length <= 0) {
        erroPrimeiroNomeVazio.style.display = "block";
        primeiroNomeVazio = true;
    } else {
        erroPrimeiroNomeVazio.style.display = "none";
    }
}