/*1 – Crie uma classe para a seguinte solução: ler 10 número e todos os números lidos com valor inferior a 40 devem ser
somados. Mostre o valor final da soma efetuada em um método com retorno do tipo number.*/

class Numeros {
    valores: number[] = [];
    soma: number = 0;


    constructor() {
        this.valores = []
    }

    somaMenor40() {
        for (let i = 0; i < 10; i++){
            this.valoresDigitados(this.valores)
            if (this.valores[i] < 40) { 
                this.soma += this.valores[i]
            }
        }
    }

    valoresDigitados(x : Array<number>) {
           x.push(Number(prompt("Digite os valores")));     
    }
    
    resultado() {
        return this.soma
    }    
}

let somaTotal: Numeros = new Numeros();
somaTotal.somaMenor40();
alert(somaTotal.resultado());






