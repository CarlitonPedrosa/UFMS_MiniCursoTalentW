function calcularIMC() {
    var trsPacientes = document.getElementsByClassName("paciente");

    for (var posiAtual = 0; posiAtual <= trsPacientes.length; posiAtual++) {
        var pacienteTr = trsPacientes[posiAtual];

        var tdNome = pacienteTr.getElementsByClassName("info_nome")[0];
        var tdPeso = pacienteTr.getElementsByClassName("info_peso")[0];
        var tdAltura = pacienteTr.getElementsByClassName("info_altura")[0];
        var tdSituacao = pacienteTr.getElementsByClassName("info_situacao")[0];

        var pacienteAtual = {
            nome: tdNome.textContent,
            peso: tdPeso.textContent,
            altura: tdAltura.textContent,
            calcIMC: function () {
                var imc1 = this.peso / (this.altura * this.altura);
                return imc1.toFixed(0);
            },
            situacao: function () {
                if (pacienteAtual.calcIMC() <= 18.5) {
                    return "Abaixo do peso";
                } else if (pacienteAtual.calcIMC() >= 18.6 && pacienteAtual.calcIMC() <= 24.6) {
                    return "Peso ideal";
                } else if (pacienteAtual.calcIMC() >= 25 && pacienteAtual.calcIMC() <= 29.9) {
                    return "Levemente acima do peso";
                } else if (pacienteAtual.calcIMC() >= 30 && pacienteAtual.calcIMC() <= 24.9) {
                    return "Obesidade grau I";
                } else if (pacienteAtual.calcIMC() >= 35 && pacienteAtual.calcIMC() <= 39.9) {
                    return "Obesidade grau II (severa)";
                } else if (pacienteAtual.calcIMC() >= 40) {
                    return "Obesidade grau III (Mórbida)";
                }
            }
        };

        var imc = pacienteAtual.calcIMC();
        var situ = pacienteAtual.situacao();

        var tdIMC = pacienteTr.getElementsByClassName("info_imc")[0];
        tdIMC.textContent = imc;

        var tdSitu = pacienteTr.getElementsByClassName("info_situacao")[0];
        tdSitu.textContent = situ;
    }
}

var btnNovoPaciente = document.querySelector("#addPaciente");

btnNovoPaciente.addEventListener("click", function () {

    var campo_nome = document.querySelector("#campo_nome");
    var campo_peso = document.querySelector("#campo_peso");
    var campo_altura = document.querySelector("#campo_altura");

    var pacienteNovo = "<tr class='paciente'>" +
        "<td class='info_nome'>" + campo_nome.value + "</td>" +
        "<td class='info_peso'>" + campo_peso.value + "</td>" +
        "<td class='info_altura'>" + campo_altura.value + "</td>" +
        "<td class='info_imc'></td>" +
        "<td class='info_situacao'></td>" +
        "</tr>";

    if (campo_nome.value == "" || campo_peso.value == "" || campo_altura.value <= 0) {
        alert("Favor, preecher todos os campos");
    } else {
        var tabela = document.querySelector("table");
        tabela.innerHTML += pacienteNovo;

        campo_nome.value = "";
        campo_peso.value = "";
        campo_altura.value = "";
    }

});

function remPaciente() {
    var elemento = document.querySelectorAll('tr');
    var ultimo = elemento[elemento.length - 1];
    var quant = elemento.length;

    if (quant == 1) {
        alert("Tabela Vazia");
        return;
    } else {
        ultimo.parentNode.removeChild(ultimo);
    }
}