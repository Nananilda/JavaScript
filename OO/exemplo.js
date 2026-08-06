// classe = modelo
class Carro {
    // constructor = É a função especial que é executado automaticamente quando 
    // criamos um novo objeto daquela classe. É nele que definimos os valores iniciais do objeto.
    constructor(marca, modelo, ano, cor) {
        // atributos = propriedades da classe 
        this.marca = marca;
        // this = este objeto, serve para dizer que o atributo pertence 
        // ao objeto que está sendo criado, guarda os dados dentro do objeto
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }

    // método 
    ligar() {
        console.log(`${this.modelo} carro ligado`);
    }

    acelerar() {
        console.log(`${this.modelo} acelerando`);
    }

    frear() {
        console.log(`${this.modelo} freiou`)
    }
}
// obejto 
const carro1 = new Carro("Volkswagen", "gol", 2022, "branco"); // parametros que agora são os atributos
console.log("Carro 1: ", carro1);
// só cria o objeto com um molde

const carro2 = new Carro("Toyota", "corolla", 2025, "preto");
console.log("Carro 2: ", carro2);

const carro3 = new Carro("Volkswagen", "parati", 1982, "grafite");
console.log("Carro 3: ", carro3);

console.log("----------------------");

console.log("atributos do carro 1:");
console.log("-", carro1.marca);
console.log("-", carro1.modelo);
console.log("-", carro1.ano);
console.log("-", carro1.cor);

console.log("----------------------");

console.log("atributos do carro 2:");
console.log("-", carro2.marca);
console.log("-", carro2.modelo);
console.log("-", carro2.ano);
console.log("-", carro2.cor);

console.log("----------------------");

console.log("atributos do carro 3:");
console.log("-", carro3.marca);
console.log("-", carro3.modelo);
console.log("-", carro3.ano);
console.log("-", carro3.cor);

console.log("----------------------");

// método
carro1.ligar();
carro1.acelerar();
carro1.frear();

console.log("----------------------");

carro2.ligar();
carro2.acelerar();
carro2.frear();

console.log("----------------------");

carro3.ligar();
carro3.acelerar();
carro3.frear();