class Modificador {
    numero: number[] = [];

    constructor() {
        this.numero = [];
    }

    identificar(n: number) {
        this.numero.push(n)

    }

    retirar() {
        this.numero.shift();
        this.numero.pop();
    }

    inserir(x: number, z: number) {
        this.numero.push(x);
        this.numero.unshift(z);
    }

    final() {
        return this.numero.join(" ")
    }


}

let modificador: Modificador = new Modificador();
let x: number;
let z: number;

for (let i = 0; i < 5; i++) {
    let n = Number(prompt(`Digite o ${i} número`))
    modificador.identificar(n);
}
x = Number(prompt("Digite um numero de inicio"))
z = Number(prompt("Digite outro numero pro fim"))

modificador.retirar();
modificador.inserir(z, x);
alert(modificador.final());

