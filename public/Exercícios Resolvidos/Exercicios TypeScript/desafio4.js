class ParOuImpar {
    numero: number[] = [];
    
    numeroMaior: number = 0;


    constructor() {
        this.numero = [];
        this.numeroMaior = 0;
    }
    determinarMaior(i: number) {
        for (var i = 0; i < 5; i++) {
            this.numero[i] = Number(prompt("Digite um numero:"));
            this.numero.sort();
            this.numeroMaior = this.numero[4];
        }
    }

    determinarParOuImpar() {
        if (this.numeroMaior % 2 == 0) {
            return "O numero " +this.numeroMaior+ " é par";
        }
        else {
            return "O numero " +this.numeroMaior+ " é impar";
        }
    }
}
let parimpar: ParOuImpar = new ParOuImpar();
parimpar.determinarMaior(0);
alert(parimpar.determinarParOuImpar());