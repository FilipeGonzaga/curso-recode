    var cliente = "";
    var cpf = "";
    var clientes = [];
   
     

function guardarCliente(){
    var pessoa = new Object();
    pessoa.nome = document.getElementById('nomeCliente').value;
    pessoa.documento = document.getElementById('cpf').value;

    clientes.push(pessoa);
    document.getElementById('nomeCliente').value = "";
    document.getElementById('cpf').value = "";
    atualizaListaCliente()
}

    var medico = "";
    var crm = "";
    var medicos = [];

function guardarMedico(){
    var doutor = new Object();
    doutor.nome = document.getElementById('nomeMedico').value;
    doutor.documento = document.getElementById('crm').value;
    medicos.push(doutor);
    document.getElementById('nomeMedico').value = "";
    document.getElementById('crm').value = "";
    atualizaListaMedico();
}

function agendarConsulta(){
    var consultar = new Object();
    consultar.nomeC = document.getElementById('selecaoCliente').value;
    consultar.nomeM = document.getElementById('selecaoMedico').value;
    consultar.data = document.getElementById('selecaoData').value;

    var tr = document.createElement("tr")
    
    var td1 = document.createElement("td")
    var infotd1 = document.createTextNode(consultar.nomeM)
    td1.appendChild(infotd1)


    var td2 = document.createElement("td")
    var infotd2 = document.createTextNode(consultar.nomeC)
    td2.appendChild(infotd2)

    var td3 = document.createElement("td")
    var infotd3 = document.createTextNode(consultar.data)
    td3.appendChild(infotd3)

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)

    var listamodal = document.getElementById("ylistadsdsds");
    listamodal.appendChild(tr);

}

function atualizaListaCliente(){
    document.getElementById("selecaoCliente").innerHTML = ""
    for (var i =  0; i <= clientes.length; i++) {
        var opcaoC = document.createElement('option');
        var cliente = document.createTextNode(clientes[i].nome);
        opcaoC.appendChild(cliente);
        opcaoC.setAttribute("value", clientes[i].nome)
        var selC = document.getElementById("selecaoCliente");
        selC.appendChild(opcaoC);
    }
}
function atualizaListaMedico(){
    document.getElementById("selecaoMedico").innerHTML = ""
    for (var b =  0; b <= medicos.length; b++) {
        var opcaoM = document.createElement('option');
        var medico = document.createTextNode(medicos[b].nome);
        opcaoM.appendChild(medico);
        opcaoM.setAttribute("value", medicos[b].nome)
        var selM = document.getElementById("selecaoMedico");
        selM.appendChild(opcaoM);
    }
}

function selecaoData(){
    var data = new Date();

    // Guarda cada pedaço em uma variável
    var dia     = data.getDate();

    for (var i = (dia+1); i <= 30; i++) {
        var opcaoD = document.createElement('option');
        if (i >= 10) {
            i = i;
        }else{
            i = "0"+i;
        }
        var dia = document.createTextNode(i);
        opcaoD.appendChild(dia);
        var dias = document.getElementById("selecaoData");
        dias.appendChild(opcaoD);
    }
}
selecaoData()



       















// "use strict";
// export class Medico {
//     constructor(cad, name) {
//         this.crm = cad;
//         this.nome = name;
//     }

//     getNome(){
//         return this.nome;
//     }
// }

// class Cliente {
//     constructor(cad, name) {
//         this.cpf = cad;
//         this.nome = name;
//     }
// }

// class Pacientes {
//     constructor() {
//         this.pacientes = [];
//     }
//     getPacientes() {
//         return this.pacientes;
//     }
//     setPacientes(n) {
//         this.pacientes = n;
//     }
//     cadastrar(nome) {
//         this.pacientes.push(nome);
//     }
// }

//  class Medicos {
//     constructor() {
//         this.medicos = [];
//     }
//     getMedicos() {
//         return this.medicos;
//     }
//     setMedicos(n) {
//         this.medicos = n;
//     }
//     cadastrar(n) {
//         //this.setMedicos(this.getMedicos().push(n));
//         this.medicos.push(n);
//     }

//     listar(){
//         this.medicos.join(" ");
//     }
// }

// class Consultas {
//     constructor() {
//         this.consultas = [];
//     }
//     registrar(m, k) {
//         let consulta = [k, m];
//         this.consultas.push(consulta);
//     }
// }


