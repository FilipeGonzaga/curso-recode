"use strict";
class Calculo {
    constructor(numero) {
        this.resultado = 0;
        this.resultado = numero;
    }
    soma(num) {
        this.resultado += num;
    }
    subtrair(num) {
        return this.resultado -= num;
    }
    multiplicar(num) {
        return this.resultado *= num;
    }
    dividir(num) {
        return this.resultado /= num;
    }
    mostrarResultado() {
        alert(this.resultado);
    }
}
let x = new Calculo(3);
x.soma(5);
x.subtrair(2);
x.multiplicar(3);
x.dividir(2);
x.mostrarResultado();
