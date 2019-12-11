/*Crie uma classe que leia um vetor através de uma método e outros dois métodos que organize 
esse vetor em ordem crescente e decrescente, o quarto método terá o papel de mostrar esse 
vetor na sua ordem atual.*/

class Notas {
    numeros: number [];
    
    constructor() {
        this.numeros = [];
    }

    recebeVetor(x: Array<number>) { 
        this.numeros = x;
    }

    crescente() {
        this.numeros.sort();
    }

    decrescente() {
        this.numeros.sort();
        this.numeros.reverse();
    }

    exibir() :string{
        return this.numeros.join(" ")
    }
}

let aluno: Notas = new Notas();

let x: number[] = [0, 3, 0, 2, 5, 0, 0, 0, 1, 0,]

aluno.recebeVetor(x)
alert(aluno.exibir())
aluno.crescente()
alert(aluno.exibir())
aluno.decrescente()
alert(aluno.exibir())



