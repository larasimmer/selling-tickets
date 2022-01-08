let inputNumeroDoCartao = document.getElementById("numero-cartao");
let erroNumeroDoCartaoVazio = document.getElementById("numero-cartao-vazio");
let inputMesDeValidade = document.getElementById("mes-validade");
let inputAnoDeValidade= document.getElementById("ano-validade");
let erroAnoDeValidadeVazio = document.getElementById("ano-validade-vazio");
let erroCartaoInvalido = document.getElementById("cartao-invalido");
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
let inputNumero = document.getElementById("numero");
let inputLogradouro = document.getElementById("logradouro");
let erroLogradouroVazio = document.getElementById("logradouro-vazio");
let inputBairro = document.getElementById("bairro");
let erroBairroVazio = document.getElementById("bairro-vazio");
let inputCidade = document.getElementById("cidade");
let erroCidadeVazio = document.getElementById("cidade-vazio");
let inputEstado = document.getElementById("estado");

let formularioDePagamento = document.getElementById("form-pagamento");

formularioDePagamento.onsubmit = realizaValidacoes;

function realizaValidacoes(event) {
    event.preventDefault();
    let numeroDoCartaoVazio = validaNumeroDoCartaoVazio();
    let anoDeValidadeVazio = validaAnoDeValidadeVazio();
    let cartaoInvalido = validaTempoDeValidadeDoCartao();
    let codigoDeSegurancaVazio = validaCodigoDeSegurancaVazio();
    let nomeDoTitularVazio = validaNomeDoTitularVazio();
    let dataDeNascimentoVazio = validaDataDeNascimentoVazio();
    let menorDeIdade = validaMaioridadeDoTitular();
    let cpfVazio = validaCpfVazio();
    let cpfInvalido = validaCalculoCpf();
    let telefoneVazio = validaTelefoneVazio();
    let cepVazio = validaCepVazio();
    let logradouroVazio = validaLogradouroVazio();
    let bairroVazio = validaBairroVazio();
    let cidadeVazio = validaCidadeVazio();

    if (numeroDoCartaoVazio == true || anoDeValidadeVazio == true || cartaoInvalido == true || codigoDeSegurancaVazio == true || nomeDoTitularVazio == true ||
        dataDeNascimentoVazio == true || menorDeIdade == true || cpfVazio == true || cpfInvalido == true || telefoneVazio == true || cepVazio == true || 
        logradouroVazio == true || bairroVazio == true || cidadeVazio == true) {
            return false;
            } else {
                formularioDePagamento.submit();
                alert("Sua compra foi realizada com sucesso");
                location.replace("index.html");
            }
        
}

//Validações de cartão de crédito

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

function validaTempoDeValidadeDoCartao() {
    let valorAnoDeValidade = inputAnoDeValidade.value;
    let valorMesDeValidade = inputMesDeValidade.value;
    let dataAtual = new Date();
    let validadeDoCartaoMenos6Meses = new Date();
    validadeDoCartaoMenos6Meses.setFullYear(valorAnoDeValidade, valorMesDeValidade - 6, 1);
    let cartaoInvalido = false;

    if(validadeDoCartaoMenos6Meses < dataAtual) {
        cartaoInvalido = true;
        erroCartaoInvalido.style.display = "block";
    } else {
        cartaoInvalido = false;
        erroCartaoInvalido.style.display = "none";
    }
}
  
function validaCodigoDeSegurancaVazio() {
    let valorCodigoDeSeguranca = inputCodigoDeSeguranca.value;
    let codigoDeSegurancaVazio = false;

    if (valorCodigoDeSeguranca.length <= 0) {
        codigoDeSegurancaVazio = true;
        erroCodigoDeSegurancaVazio.style.display = "block";
    } else {
        erroCodigoDeSegurancaVazio.style.display = "none";
        codigoDeSegurancaVazio = false;
    }

    return codigoDeSegurancaVazio;
}

//Validações de dados do titular

function validaNomeDoTitularVazio() {
    let valorNomeDoTitular = inputNomeDoTitular.value;
    let nomeDoTitularVazio = false;

    if (valorNomeDoTitular.length <= 0) {
        nomeDoTitularVazio = true;
        erroNomeDoTitularVazio.style.display = "block";
    } else {
        erroNomeDoTitularVazio.style.display = "none";
        nomeDoTitularVazio = false;
    }

    return nomeDoTitularVazio;
}

//Validações de data de nascimento do titular

function validaDataDeNascimentoVazio() {
    let valorDataDeNascimento = inputDataDeNascimento.value;
    let dataDeNascimentoVazio = false;

    if (valorDataDeNascimento.length <= 0) {
        dataDeNascimentoVazio = true;
        erroDataDeNascimentoVazio.style.display = "block";
    } else {
        erroDataDeNascimentoVazio.style.display = "none";
        dataDeNascimentoVazio = false;
    }

    return dataDeNascimentoVazio;
}

function validaMaioridadeDoTitular() {
    let valorDataDeNascimento = new Date(inputDataDeNascimento.value);
    let dataDeNascimentoInvalida = false;
    
    if (calculaDataDeNascimentoMais18(valorDataDeNascimento) == true) {
        dataDeNascimentoInvalida = true;
        erroDataDeNascimentoInvalida.style.display = "block";
    } else {
        erroDataDeNascimentoInvalida.style.display = "none";
        dataDeNascimentoInvalida = false;
    }

    return dataDeNascimentoInvalida;
}

function calculaDataDeNascimentoMais18(data) {
    let menorDeIdade = false;
    let dataAtual = new Date();
    let dataDeNascimentoMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    if (dataDeNascimentoMais18 > dataAtual) {
        menorDeIdade = true;
    } else {
        menorDeIdade = false;
    }

    return menorDeIdade;
}

//Validações de cpf do titular

function validaCpfVazio() {
    let valorCpf = inputCpf.value;
    let cpfVazio = false;

    if (valorCpf.length <= 0) {
        cpfVazio = true;
        erroCpfVazio.style.display = "block";
    } else {
        erroCpfVazio.style.display = "none";
        cpfVazio = false;
    }

    return cpfVazio;
}

function validaCalculoCpf() {
    let cpfInvalido = false;
    let digitoVerificador1Invalido = comparaDigitoVerificador1();
    let digitoVerificador2Invalido = comparaDigitoVerificador2();

    if (digitoVerificador1Invalido == true || digitoVerificador2Invalido == true) {
        cpfInvalido = true;
        erroCpfInvalido.style.display = "block";
    } else {
        erroCpfInvalido.style.display = "none";
        cpfInvalido = false;
    }

    return cpfInvalido;
}

function somaDigitoVerificador1Cpf() {
    let valorCpf = inputCpf.value;
    let cpfSemDigitosVerificadores = valorCpf.substr(0,9);
    let soma = 0
    let multiplicador = 10;

    for(let i=0; multiplicador > 1; multiplicador--) {
        soma = soma + cpfSemDigitosVerificadores[i]*multiplicador;
        i++;
    }

    return soma;
}

function comparaDigitoVerificador1() {
    let valorCpf = inputCpf.value;
    let digitoVerificador1 = valorCpf.substr(9,1);
    let digitoVerificador1Invalido = false;
    soma = somaDigitoVerificador1Cpf();

    if (11 - (soma % 11) != digitoVerificador1) {
        digitoVerificador1Invalido = true;
    } else {
        digitoVerificador1Invalido = false;
    }

    return digitoVerificador1Invalido;
}

function somaDigitoVerificador2Cpf() {
    let valorCpf = inputCpf.value;
    let cpfSemUltimoDigito = valorCpf.substr(0,10);
    let soma = 0
    let multiplicador = 11;

    for(let i=0; multiplicador > 1; multiplicador--) {
        soma = soma + cpfSemUltimoDigito[i]*multiplicador;
        i++;
    }

    return soma;
}

function comparaDigitoVerificador2() {
    let valorCpf = inputCpf.value;
    let digitoVerificador2 = valorCpf.substr(10,1);
    let digitoVerificador2Invalido = false;
    soma = somaDigitoVerificador2Cpf();

    if (11 - (soma % 11) != digitoVerificador2) {
        digitoVerificador2Invalido = true;
    } else {
        digitoVerificador2Invalido = false;
    }

    return digitoVerificador2Invalido;
}

function validaTelefoneVazio() {
    let valorTelefone = inputTelefone.value;
    let telefoneVazio = false;

    if (valorTelefone.length <= 0) {
        telefoneVazio = true;
        erroTelefoneVazio.style.display = "block";
    } else {
        erroTelefoneVazio.style.display = "none";
        telefoneVazio = false;
    }

    return telefoneVazio;
}

//Validações de endereço do titular

function validaCepVazio() {
    let valorCep = inputCep.value;
    let cepVazio = false;

    if (valorCep.length <= 0) {
        cepVazio = true;
        erroCepVazio.style.display = "block";
    } else {
        erroCepVazio.style.display = "none";
        cepVazio = false;
    }

    return cepVazio;
}

$("#cep").blur(function() {
    let valorCep = inputCep.value;
    const url = `https://viacep.com.br/ws/${valorCep}/json/`;
    const options = {
        method: "GET",
        mode: "cors",
        headers: {
            "content-type": "application/json;charset=UTF-8"
        }
    }

    fetch(url, options).then((response) => response.json()).then(data => {
                completaEndereçoViaApi(data);
            }
        );
});

function completaEndereçoViaApi(data) {
    inputLogradouro.value = data.logradouro;
    erroLogradouroVazio.style.display = "none";

    inputBairro.value = data.bairro;
    erroBairroVazio.style.display = "none";

    inputCidade.value = data.localidade;
    erroCidadeVazio.style.display = "none";

    inputEstado.value = data.uf;
}

function validaLogradouroVazio() {
    let valorLogradouro = inputLogradouro.value;
    let logradouroVazio = false;

    if (valorLogradouro.length <= 0) {
        logradouroVazio = true;
        erroLogradouroVazio.style.display = "block";
    } else {
        erroLogradouroVazio.style.display = "none";
        logradouroVazio = false;
    }

    return logradouroVazio;
}

function validaBairroVazio() {
    let valorBairro = inputBairro.value;
    let bairroVazio = false;

    if (valorBairro.length <= 0) {
        bairroVazio = true;
        erroBairroVazio.style.display = "block";
    } else {
        erroBairroVazio.style.display = "none";
        bairroVazio = false;
    }

    return bairroVazio;
}

function validaCidadeVazio() {
    let valorCidade = inputCidade.value;
    let cidadeVazio = false;

    if (valorCidade.length <= 0) {
        cidadeVazio = true;
        erroCidadeVazio.style.display = "block";
    } else {
        erroCidadeVazio.style.display = "none";
        cidadeVazio = false;
    }

    return cidadeVazio;
}

