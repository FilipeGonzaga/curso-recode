/*5 – Crie uma classe com 3 métodos: o primeiro vai ler um vetor com 5 notas de 5 alunos, o segundo vai receber o Array
lido como parâmetro e vai calcular a média das notas e retornar essa média, o terceiro vai receber o array e a media como
parâmetro e mostrar quantos alunos ficaram com a sua nota acima da média.*/

class Notas {
    notasAlunos: number [];
    mediasNotas: number = 0
    acimaMedia: number = 0

    constructor() {
        this.notasAlunos = [];
    
    }


    media() {
        for (let i = 0; i < 5; i++) {
            this.notasDigitadas(this.notasAlunos)
            this.mediasNotas += this.notasAlunos[i]
        }
        this.mediasNotas = this.mediasNotas / this.notasAlunos.length;
    }

    notasDigitadas(x: Array <number>) {
        x.push(Number(prompt("Digite as notas dos alunos: ")));
    }

    alunosAcima() {
        for (let c = 0; c < 5; c++) {
            if (this.notasAlunos[c] > this.mediasNotas)
            this.acimaMedia += 1 
        }
        return `${this.acimaMedia} alunos ficaram acima da média`
    }
}

let alunosNotas: Notas = new Notas();

alunosNotas.media();
alert(alunosNotas.alunosAcima());



