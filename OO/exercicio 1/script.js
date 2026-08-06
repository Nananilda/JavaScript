// Objeto: casa 1, casa2, casa 3, casa 4.
// Atributos: parede, telhado, chão, janela, cor, número, teto.
// Métodos: eletricidade, água, gás, vender, alugar.

class Casa {
    constructor(localidade, parede, telhado, chao, janela, cor, teto, numero) {
        this.localidade = localidade;
        this.parede = parede;
        this.telhado = telhado;
        this.chao = chao;
        this.janela = janela;
        this.cor = cor;
        this.teto = teto;
        this.numero = numero;
    }

    eletricidade() {
        console.log(`A casa localizada em ${this.localidade} está com eletricidade`);
    }

    agua() {
        console.log(`A casa localizada em ${this.localidade} está com agua`);
    }

    gas() {
        console.log(`A casa localizada em ${this.localidade} e ela tem gás`);
    }

    alugar() {
        console.log(`A casa localizada em ${this.localidade} para alugar`);
    }

    vender() {
        console.log(`A casa localizada em ${this.localidade} para a venda`);
    }
}

console.log("----------------------");

const casa1 = new Casa("Mococa", "tijolo", "telha cerâmica", "piso liquído", "metal", "papel picado suvinil", "gesso", "2201");
console.log("casa 1: ", casa1);

const casa2 = new Casa("São João", "mdf", "pvc", "cerâmica", "alumínio", "branco", "gesso texturizado", "3006")
console.log("casa 2: ", casa2);

const casa3 = new Casa("EUA", "madeira", "telha taubilha", "carpete", "metal", "marrom", "madeira", "0512");
console.log("casa 3: ", casa3);

const casa4 = new Casa("México", "painel de pvc", "fibro cimento", "piso adesivo", "correr pvc", "chumbo", "placa pvc", "2307");
console.log("casa 4: ", casa4);

console.log("----------------------");

console.log("atributos da casa 1:");
console.log("+", casa1.parede);  
console.log("+", casa1.telhado);  
console.log("+", casa1.chao);  
console.log("+", casa1.janela);  
console.log("+", casa1.cor); 
console.log("+", casa1.teto); 
console.log("+", casa1.numero); 

console.log("----------------------");

console.log("atributos da casa 2:");
console.log("+", casa2.parede);
console.log("+", casa2.telhado);
console.log("+", casa2.chao);
console.log("+", casa2.janela);
console.log("+", casa2.cor);
console.log("+", casa2.teto);
console.log("+", casa2.numero);

console.log("----------------------");

console.log("atributos da casa 3:");
console.log("+", casa3.parede);
console.log("+", casa3.telhado);
console.log("+", casa3.chao);
console.log("+", casa3.janela);
console.log("+", casa3.cor);
console.log("+", casa3.teto);
console.log("+", casa3.numero);

console.log("----------------------");

console.log("atributos da casa 4:");
console.log("+", casa4.parede);
console.log("+", casa4.telhado);
console.log("+", casa4.chao);
console.log("+", casa4.janela);
console.log("+", casa4.cor);
console.log("+", casa4.teto);
console.log("+", casa4.numero);

console.log("----------------------");

casa1.eletricidade();
casa1.agua();
casa1.gas();
casa1.alugar();
casa1.vender();

console.log("----------------------");

casa2.eletricidade();
casa2.agua();
casa2.gas();
casa2.alugar();
casa2.vender();

console.log("----------------------");

casa3.eletricidade();
casa3.agua();
casa3.gas();
casa3.alugar();
casa3.vender();

console.log("----------------------");

casa4.eletricidade();
casa4.agua();
casa4.gas();
casa4.alugar();
casa4.vender();