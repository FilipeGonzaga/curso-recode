var cliente = {
    nome: "",
    rg: "",
    cpf: "",
    email: "",
    total: 0,
    notas: [],
    media: 0,
    situacao: "",

    construtor : function (nome, rg, cpf, email) {
        this.nome = nome;
        this.rg = rg;
        this.cpf = cpf;
        this.email = email;
    },

    adicionarNotas: function (nota) {
        this.notas.push(nota);
        this.total += nota;
    },

    calcularMedia: function () {
        cliente.adicionarNotas(Number(document.getElementById("notas1").value));
        cliente.adicionarNotas(Number(document.getElementById("notas2").value));
        cliente.adicionarNotas(Number(document.getElementById("notas3").value));

        this.media = this.total / this.notas.length;

        return document.getElementById("media").value = (this.media);
    },

    situacao: function () {
        this.construtor(document.getElementById("n1").value, document.getElementById("n2").value,
            document.getElementById("n3").value, document.getElementById("n4").value);

        cliente.calcularMedia();
        document.getElementById("media").value = this.media;

        if (this.calcularMedia() <= 5) {
            this.situacao = "Reprovado";
        } else if (this.calcularMedia() > 7) {
            this.situacao = "Aprovado";
        } else {
            this.situacao = "Recuperação";
        }

        return document.getElementById("situacao").value = this.situacao;
    },

    relatorio: function () {
        document.getElementById("n").innerHTML = this.nome;
        document.getElementById("r").innerHTML = this.rg;
        document.getElementById("c").innerHTML = this.cpf;
        document.getElementById("e").innerHTML = this.email;
        document.getElementById("m").innerHTML = this.media;
        document.getElementById("s").innerHTML = this.situacao;
    }



}