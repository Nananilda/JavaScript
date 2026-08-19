class Produto {
    constructor(nome, preco, categoria, desconto) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.desconto = desconto;

        this.precoOriginal = this.preco; 
    }

    aplicarDesconto() {
        this.preco = this.preco * (1 - (this.desconto / 100));
    }

    exibir() {
        const resultado = document.querySelector("#resultado");

        resultado.innerHTML += `
                <p>nome: ${this.nome}</p> 
                <p>categoria: ${this.categoria}</p>
                <p>desconto: ${this.desconto}</p>
                <p>preço original: ${this.precoOriginal}</p>
                <p>preço com desconto: ${this.preco}</p>
            `;
    }
}

const nome = document.querySelector("#nome");
const preco = document.querySelector("#preco");
const categoria = document.querySelector("#categoria");
const desconto = document.querySelector("#desconto");

const botaoCadastrar = document.querySelector("#botaoCadastrar");

botaoCadastrar.addEventListener("click", function () {
    const produto = new Produto(nome.value, preco.value, categoria.value, desconto.value);
    produto.aplicarDesconto();
    produto.exibir();
});
