class Identificador {
    numero: number[] = [];
    vet1: number[] = [];
    numA: number = 0;

    constructor() {
        this.numero = [];
        this.numA = 0;
    }

    coleta(k: Array<number>) {
        this.numero = k;
    }

    identificar(n: number): string {
        this.numA = this.numero.indexOf(n);
        if (this.numA >= 0) {
            return `O elemento ${this.numero[this.numA]} está na posição ${this.numA}`
        } else {
            return `Não existe elemento na lista`
        }
    }

}

let identificador: Identificador = new Identificador();

let y: number[] = []
let x: number;

for (let i = 0; i < 10; i++) {
    let k = Number(prompt(`Digite o ${i} numero`))
    y.push(k);
}

x = Number(prompt(`Procure um numero : `));


identificador.coleta(y);

alert(identificador.identificar(x));