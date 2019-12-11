/*3 - Uma loja está levantando o valor total de todas as mercadorias em estoque. Crie uma classe que permita através de
um método a entrada das seguintes informações: a) o número total de mercadorias no estoque; b) o valor de cada
mercadoria. Em um segundo método mostrar o valor total em estoque e a média de valor das mercadorias.*/


class Estoque {
    totalMercadorias: number;
    valorMercadoria: number;
    media: number = 0

    constructor() {
        this.totalMercadorias= 0;
        this.valorMercadoria = 0;
        
    }


    entradaEstoque(numM: number, valorM: number) {
        this.totalMercadorias = numM * valorM
        this.valorMercadoria = valorM
        this.media = this.totalMercadorias / valorM 
    }


    mostrarResultado() {
        return `O valor total de marcadorias é: ${this.totalMercadorias}, com a media de de valor: ${this.media.toFixed(2)} `

    }
}


let mercadoriaEstoque: Estoque = new Estoque();
let x = Number(prompt("Digite o total de mercadorias em estoque: "));
let y = Number(prompt("Digite o valor de cada mercadoria: "));
mercadoriaEstoque.entradaEstoque(x, y);
alert(mercadoriaEstoque.mostrarResultado());



