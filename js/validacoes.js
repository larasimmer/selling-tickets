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
    validaSenhaVazia();
    validaConfirmarSenhaVazio();
    validaSenhasIguais();
    validaFormatoSenha();
}

//Validações de nome

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

//Validações de e-mail

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

//Validações de senha 

function validaSenhaVazia() {
    let valorSenha = inputSenha.value;
    let senhaVazia = false;

    if (valorSenha.length <= 0) {
        senhaVazia = true;
        erroSenhaVazia.style.display = "block";
    } else {
        erroSenhaVazia.style.display = "none";
        senhaVazia = false;
    }

    return senhaVazia;
}

function validaConfirmarSenhaVazio() {
    let valorConfirmarSenha = inputConfirmarSenha.value;
    let confirmarSenhaVazio = false;

    if (valorConfirmarSenha.length <= 0) {
        confirmarSenhaVazio = true;
        erroConfirmarSenhaVazio.style.display = "block";
    } else {
        erroConfirmarSenhaVazio.style.display = "none";
        confirmarSenhaVazio = false;
    }

    return confirmarSenhaVazio;
}

function validaSenhasIguais() {
    let valorSenha = inputSenha.value;
    let valorConfirmarSenha = inputConfirmarSenha.value;
    let senhasDiferentes = false;

    if (valorSenha != valorConfirmarSenha) {
        senhasDiferentes = true;
        erroSenhaDiferente.style.display = "block";
    } else {
        senhasDiferentes = false;
        erroSenhaDiferente.style.display = "none";
    }
}

function validaFormatoSenha() {
    let senhaFormatoInvalido = false;
    let senhaTamanhoInvalido = validaTamanhoSenha();
    console.log(senhaTamanhoInvalido);
    let senhaSemNumero = validaNumeroSenha();
    console.log(senhaSemNumero);
    let senhaSemLetraMaiuscula = validaLetraMaiusculaNaSenha();
    console.log(senhaSemLetraMaiuscula);
    let senhaSemLetraMinuscula = validaLetraMinusculaNaSenha();
    console.log(senhaSemLetraMinuscula);

    if (senhaTamanhoInvalido == true || senhaSemNumero == true || senhaSemLetraMaiuscula == true || senhaSemLetraMinuscula == true) {
        senhaFormatoInvalido = true;
        erroSenhaInvalida.style.display = "block";
    } else {
        senhaFormatoInvalido = false;
        erroSenhaInvalida.style.display = "none";
    }

    return senhaFormatoInvalido;
}

function validaTamanhoSenha() {
    let valorSenha = inputSenha.value;
    let senhaTamanhoInvalido = false;

    if ((valorSenha.length > 0 && valorSenha.length < 8) || valorSenha.length > 12) {
        senhaTamanhoInvalido = true;
    } else {
        senhaTamanhoInvalido = false;
    }

    return senhaTamanhoInvalido;
}

function validaNumeroSenha() {
    let valorSenha = inputSenha.value;
    let senhaSemNumero = false;

    let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    numeros.forEach(function(numero) {
        if (valorSenha.length > 0 && !valorSenha.includes(numero)) {
            senhaSemNumero = true;
        } else {
            senhaSemNumero = false;
        }
    });
    return senhaSemNumero;
}

function validaLetraMaiusculaNaSenha() {
    let valorSenha = inputSenha.value;
    let senhaSemLetraMaiuscula = false;

    let letrasMaiusculas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
"S", "T", "U", "V", "X", "Y", "W", "Z"];

    letrasMaiusculas.forEach(function(letraMaiuscula) {
        if (valorSenha.length > 0 && !valorSenha.includes(letraMaiuscula)) {
            senhaSemLetraMaiuscula = true;
        } else {
            senhaSemLetraMaiuscula = false;
        }
    });

    return senhaSemLetraMaiuscula;
}

function validaLetraMinusculaNaSenha() {
    let valorSenha = inputSenha.value;
    let senhaSemLetraMinuscula = false;

    let letrasMinusculas = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
"s", "t", "u", "v", "x", "y", "w", "z"];

    letrasMinusculas.forEach(function(letraMinuscula) {
        if (valorSenha.length > 0 && !valorSenha.includes(letraMinuscula)) {
            senhaSemLetraMinuscula = true;
        } else {
            senhaSemLetraMinuscula = false;
        }
    });

    return senhaSemLetraMinuscula;
}
