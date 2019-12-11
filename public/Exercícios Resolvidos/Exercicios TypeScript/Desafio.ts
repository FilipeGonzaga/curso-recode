class Calculo {
    resultado: number = 0;

    constructor(numero: number) {
        this.resultado= numero
    }

    soma (num: number){
        this.resultado += num
    }
    subtrair (num: number) {
       return this.resultado -= num
    }
    multiplicar (num: number) {
       return this.resultado *= num
    }
    dividir (num: number) {
       return this.resultado /= num
    }

    mostrarResultado() {
        alert(this.resultado)
    } 
}

let x: Calculo = new Calculo(3);

x.soma(5);
x.subtrair(2);
x.multiplicar(3);
x.dividir(2);
x.mostrarResultado();

