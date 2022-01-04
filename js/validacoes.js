let inputPrimeiroNome = document.getElementById("primeiro-nome");
let erroPrimeiroNomeVazio = document.getElementById("primeiro-nome-vazio");
let inputUltimoNome = document.getElementById("ultimo-nome");
let erroUltimoNomeVazio = document.getElementById("ultimo-nome-vazio");
let inputEmail = document.getElementById("email");
let erroEmailVazio = document.getElementById("email-vazio");
let erroEmailInvalido = document.getElementById("email-invalido");
let inputSenha = document.getElementById("senha");
let erroSenhaVazia = document.getElementById("senha-vazio");
let erroSenhaInvalida = document.getElementById("senha-invalida");
let erroSenhaDiferente = document.getElementById("senha-diferente");
let inputConfirmarSenha = document.getElementById("confirmar-senha");
let erroConfirmarSenhaVazio = document.getElementById("confirmar-senha-vazio");
let botaoAvancarParaPagamento = document.getElementById("botao-avancar");

botaoAvancarParaPagamento.onclick = realizaValidacoes;

function realizaValidacoes() {
    validaPrimeiroNome();
    validaUltimoNome();
    validaEmailVazio();
    validaFormatoEmail();
}

function validaPrimeiroNome() {
    let valorPrimeiroNome = inputPrimeiroNome.value;
    let primeiroNomeVazio = false;

    if (valorPrimeiroNome.length <= 0) {
        primeiroNomeVazio = true;
        erroPrimeiroNomeVazio.style.display = "block";
    } else {
        primeiroNomeVazio = false;
        erroPrimeiroNomeVazio.style.display = "none";
    }
    return primeiroNomeVazio;
}

function validaUltimoNome() {
    let valorUltimoNome = inputUltimoNome.value;
    let ultimoNomeVazio = false;

    if (valorUltimoNome.length <= 0) {
        ultimoNomeVazio = true;
        erroUltimoNomeVazio.style.display = "block";
    } else {
        erroUltimoNomeVazio.style.display = "none";
        ultimoNomeVazio = false;
    }

    return ultimoNomeVazio;
}

function validaEmailVazio() {
    let valorEmail = inputEmail.value;
    let emailVazio = false;

    if (valorEmail.length <= 0) {
        emailVazio = true;
        erroEmailVazio.style.display = "block";
    } else {
        erroEmailVazio.style.display = "none";
        emailVazio = false;
    }

    return emailVazio;
}

function validaFormatoEmail() {
    let valorEmail = inputEmail.value;
    let emailInvalido = false;

    if (valorEmail.length > 0 && !valorEmail.includes("@")) {
        emailInvalido = true;
        erroEmailInvalido.style.display = "block";
    } else {
        erroEmailInvalido.style.display = "none";
        emailInvalido = false;
    }

    return emailInvalido;
}
