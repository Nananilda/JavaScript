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
}

class Produtos {
    constructor() {
        this.produtos = [];
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
    }

    // desafio extra
    excluirProduto(indice) {
        this.produtos.splice(indice, 1); // o splice vai remover um item a partir a posição (indice)
        this.exibir();
    }

    exibir() {
        const resultado = document.querySelector("#resultado");
        resultado.innerHTML = "";

        this.produtos.forEach((produto, index) => { // index = posição do produto
            resultado.innerHTML += `
                <br>
                <p>-----------------------------------</p>
                <p>nome: ${produto.nome}</p> 
                <p>categoria: ${produto.categoria}</p>
                <p>desconto: ${produto.desconto}</p>
                <p>preço original: ${produto.precoOriginal}</p>
                <p>preço com desconto: ${produto.preco}</p>
                    
                <button onclick="produtos.excluirProduto(${index})">Excluir</button>
            `;
        });
    }
}

const produtos = new Produtos();
const nome = document.querySelector("#nome");
const preco = document.querySelector("#preco");
const categoria = document.querySelector("#categoria");
const desconto = document.querySelector("#desconto");

const botaoCadastrar = document.querySelector("#botaoCadastrar");

botaoCadastrar.addEventListener("click", function () {
    const produto = new Produto(nome.value, preco.value, categoria.value, desconto.value);
    produto.aplicarDesconto();

    produtos.adicionarProduto(produto);
    produtos.exibir();
});
