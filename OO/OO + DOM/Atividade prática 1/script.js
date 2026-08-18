class Produto {
    constructor(nome, preco, categoria, desconto) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.desconto = desconto;
    }

    aplicarDesconto() {
        const precoOriginal = this.preco;
        this.preco = this.preco * (1 - (this.desconto / 100));
    }

    exibir() {
        const resultado = document.querySelector("#resultado");

        resultado.innerHTML += `
                <p>Nome: ${this.nome}</p> 
                <p>Preço original: ${this.precoOriginal}</p>
                <p>Categoria: ${this.categoria}</p>
                <p>Desconto: ${this.desconto}</p>
                <p>Preço com desconto: ${this.preco}</p>
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

})