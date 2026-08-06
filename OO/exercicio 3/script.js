    // classe: Produto
    // atributos: nome, preço, estoque
    // métodos: vender, repor, alterarPreco

    class Produto {
        constructor(nome, preco, estoque) {
            this.nome = nome;
            this.preco = preco;
            this.estoque = estoque;
        }

        vender() {
            console.log(`O produto ${this.nome} de prço ${this.preco} foi vendido`);
        }

        repor() {
            console.log(`O produto ${this.nome} foi reposto no estoque`);
        }

        alterarPreco() {
            console.log(`O preço do produto ${this.nome} foi alterado com sucesso`);
        }
    }

    console.log("----------------------");

    const produto1 = new Produto("Bolo de chocolate", 13.98, 3);
    console.log("Produto 1: ", produto1);

    const produto2 = new Produto("Bolo de cenoura", 24.59, 5);
    console.log("Produto 2: ", produto2);

    const produto3 = new Produto("Bolo cuca", 15.96, 4);
    console.log("Produto 3: ", produto3);


    console.log("----------------------");

    console.log("atributos do produto 1:");
    console.log("O nome do produto é: ", produto1.nome);  
    console.log("O preço do produto é: ", produto1.preco);  
    console.log("A quantidade em estoque do produto é: ", produto1.estoque);  

    console.log("----------------------");

    console.log("atributos do produto 2:");
    console.log("O nome do produto é: ", produto2.nome);  
    console.log("O preço do produto é: ", produto2.preco);  
    console.log("A quantidade em estoque do produto é: ", produto2.estoque);  

    console.log("----------------------");

    console.log("atributos do produto 3:");
    console.log("O nome do produto é: ", produto3.nome);  
    console.log("O preço do produto é: ", produto3.preco);  
    console.log("A quantidade em estoque do produto é: ", produto3.estoque);  

    console.log("----------------------");

    produto1.vender();
    produto1.repor();
    produto1.alterarPreco();

    console.log("----------------------");

    produto2.vender();
    produto2.repor();
    produto2.alterarPreco();

    console.log("----------------------");

    produto3.vender();
    produto3.repor();
    produto3.alterarPreco();
