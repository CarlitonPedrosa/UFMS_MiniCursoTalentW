var x, y;
var sinal;

function add(valor) {
    visor.value += valor;
}

function limpar() {
    visor.value = "";
}

function funcao(f) {
    if(sinal == null){
        x = visor.value;
    }
    sinal = f;
    limpar();
}

function clearConsole() {
    x = null;
    y = null;
    sinal = null;
    limpar();
    
}

function consoleVisor() {
    y = visor.value;
    switch (sinal) {
        case "+":
            x = visor.value =
                parseInt(x) + parseInt(y);
            break;

        case "-":
            x = visor.value =
                parseInt(x) - parseInt(y);
            break;

        case "*":
            x = visor.value =
                parseInt(x) * parseInt(y);
            break;

        case "/":
            x = visor.value =
                parseInt(x) / parseInt(y);
    }
}