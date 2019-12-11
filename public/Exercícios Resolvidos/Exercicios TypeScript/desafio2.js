class ParImpar {
    numero: number[] = [];
    par: number[] = [];
    impar: number[] = [];

    constructor(num: number, num1: number) {
        this.numero[0] = num;
        this.numero[1] = num1;
        this.par;
        this.impar;
    }
    determinar() {
        let menor: number = 0;
        let maior: number = 0;

        if (this.numero[0] > this.numero[1]) {
            maior = this.numero[0];
            menor = this.numero[1];
        } else {
            maior = this.numero[1];
            menor = this.numero[0];
        }

        for (var i = menor; i <= maior; i++) {
            if (i % 2 == 0) {
                this.par.push(i);
            } else {
                this.impar.push(i);
            }

        }
    }
    impares() {
        return "Entre os dois numeros tem " + this.impar.length + " numeros impares são "+ this.impar.join(" ")+" !";
    }
    pares() {
        return "Entre os dois numeros tem " + this.par.length + " numeros pares são "+ this.par.join(" ")+" !";
    }
}
let x = Number(prompt("Digite um numero:"));
let y = Number(prompt("Digite outro numero:"));

let parimpar: ParImpar = new ParImpar(x, y);
parimpar.determinar()
alert(parimpar.impares());
alert(parimpar.pares());