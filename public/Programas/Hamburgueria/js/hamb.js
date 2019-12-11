   
function Continuar(){
    
	var valor1 = Number(document.getElementById("quantidade1").value);
    var valor2 = Number(document.getElementById("quantidade2").value);
    var valor3 = Number(document.getElementById("quantidade3").value);
    var valor4 = Number(document.getElementById("quantidade4").value);
    var valor5 = Number(document.getElementById("quantidade5").value);
    var ham = valor1 * 8;
    var bat = valor2 * 7;
    var refri = valor3 * 7;
    var sal = valor4 * 8;
    var suc = valor5 * 7;  
    var total = 0;
	
    switch (document.getElementById("calcular1").value) {
        case "1":
            Number(document.getElementById("resultado1").value = ham + "R$");
            break;
        case "2":
            Number(document.getElementById("resultado2").value = bat + "R$");
            break;
        case "3":
            Number(document.getElementById("resultado3").value = refri + "R$");
            break;
        case "4":
            Number(document.getElementById("resultado4").value = sal + "R$");
            break;
        case "5":
            Number(document.getElementById("resultado5").value = suc + "R$");
            break;
        case "6":
            total = ham + bat + refri + sal + suc;
            Number(document.getElementById("resultadoFinal").value = total + "R$");
            break;
    }
}