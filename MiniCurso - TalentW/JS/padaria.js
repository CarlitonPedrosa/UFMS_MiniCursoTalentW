var inputPao = document.querySelector("#qtd-pao");
var inputQueijo = document.querySelector("#qtd-queijo");
var inputBolo = document.querySelector("#qtd-bolo");
var total = document.querySelector("#p-total");

inputPao.addEventListener("change", function() {
    if(inputPao.value < 0) {
        alert("Valor invalido!");
        inputPao.value = 0;
    }
})

inputQueijo.addEventListener("blur", function(){
    if(inputQueijo.value < 0) {
        alert("Erro..valor negativo!")
        inputQueijo.value = 0;
    } else if(isNaN(inputQueijo.value)) {
        alert("Valor invalido!");
        inputQueijo.value = 0;
    }
})

var btnCalcular = document.querySelector("#btn-calcular");

btnCalcular.addEventListener("click", function(){
    var totalPao, totalQueijo, totalBolo;

    if(inputPao == "") {
        totalPao = 0;
    }else{
        totalPao = parseInt(inputPao.value) * 0.30;
    }
    
    if(inputQueijo == "") {
        totalQueijo = 0;
    }else{
        totalQueijo = parseFloat(inputQueijo.value) * 20;
    }

    totalBolo = inputBolo.value * 6;

    total.innerHTML = "R$ "+ (totalPao + totalQueijo + totalBolo);

})