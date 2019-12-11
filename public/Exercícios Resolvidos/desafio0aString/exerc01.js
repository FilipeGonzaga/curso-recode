function formatacao(){

    var texto = [];

    texto.push(document.getElementById("autor").value);
    texto.push(document.getElementById("titulo").value);
    texto.push(document.getElementById("numero").value);
    texto.push(document.getElementById("local").value);
    texto.push(document.getElementById("editora").value);
    texto.push(document.getElementById("Ano").value);

    // NOME
    var nome = texto[0].substr( 0, 1);
    nomeCorte = nome.toUpperCase();

    var sobrenome = texto[0].substr( 6, 13);
    sobrenomeM = sobrenome.toUpperCase();

    // TITULO
    var titulo = texto[2].substr(0, 1);
    var titulo2 = titulo.toUpperCase();

    var titulo3 = texto[2].substr(1, 2);
    var titulo4 = titulo3.toUpperCase();

    var titulo5 = texto[2].substr(3, 5);

    var titulo6 = texto[2].substr(8, 1);
    var titulo7 = titulo6.toUpperCase();

    var titulo8 = texto[2].substr( 9, 13);

    var total = titulo2 + titulo4 + titulo5 + titulo7 + titulo8;

    // LOCAL
    var local = texto[4].substr(0, 1);
    var local2 = local.toUpperCase();

    var local5 = texto[4].substr(1, 6);

    var local7 = texto[4].substr(7, 1);
    var local8 = local7.toUpperCase();

    var local9 = texto[4].substr(8, 1);

    var localCompleto = local2 + local5 + local8 + local9;


    // EDITORA

    var editora = texto[5].substr(0, 1);
    var editora1 = editora.toUpperCase();

    var editora2 = texto[5].substr(1, 7);

    var editoraFim = editora1 + editora2;

    
    

    
    

    document.getElementById("resultado").value = sobrenomeM + ", " + nomeCorte +". " + total + ": " + texto[3] + ". " + localCompleto + ": " + editoraFim + "," + texto[6];

}
