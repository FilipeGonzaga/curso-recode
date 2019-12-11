function resultado() {
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);
    var operacao = document.getElementById("op").value;

    if (operacao == 'soma') {
        var calc = n1 + n2;
    }


    else if (operacao == 'subtração') {
        var calc = n1 - n2;
    }



    else if (operacao == 'multiplicação') {
        var calc = n1 * n2;
    }



    else if(operacao == 'divisão') {
        var calc = n1 / n2;
    }

    document.getElementById("resultado").value = calc;
}

