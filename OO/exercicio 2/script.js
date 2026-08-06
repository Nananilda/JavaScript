// Objetos: aluno1, aluno2, aluno3
// Atributos: nome, idade, curso, matricula
// Métodos: aprender, estudar, apresenta

class Aluno {
    constructor(nome, idade, curso, matricula) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.matricula = matricula;
    }

    aprender() {
        console.log(`O aluno ${this.nome} com a matrícula ${this.matricula} do curso ${this.curso} está aprendendo`);
    }

    estudar() {
        console.log(`O aluno ${this.nome} com a matrícula ${this.matricula} do curso ${this.curso} está estudando`);
    }

    apresentar() {
        console.log(`O aluno ${this.nome} com a matrícula ${this.matricula} do curso ${this.curso} está apresentando`);
    }
}

console.log("----------------------");

const aluno1 = new Aluno("Anna Hilda", 17, "arquitetura", 5184);
console.log("aluno 1: ", aluno1);

const aluno2 = new Aluno("Lara Domingos", 17, "ads", 5302)
console.log("aluno 2: ", aluno2);

const aluno3 = new Aluno("Gabi Moura", 17, "pedagogia", 4658);
console.log("aluno 3: ", aluno3);


console.log("----------------------");

console.log("atributos do aluno 1:");
console.log("O nome do aluno é: ", aluno1.nome);  
console.log("A idade do aluno é", aluno1.idade);  
console.log("O curso do aluno é:", aluno1.curso);  
console.log("A matrícula (RM) do aluno é:", aluno1.matricula);  

console.log("----------------------");

console.log("atributos do aluno 2");
console.log("O nome do aluno é: ", aluno2.nome);  
console.log("A idade do aluno é", aluno2.idade);  
console.log("O curso do aluno é:", aluno2.curso);  
console.log("A matrícula (RM) do aluno é:", aluno2.matricula);  

console.log("----------------------");

console.log("atributos do aluno 1:");
console.log("O nome do aluno é: ", aluno2.nome);  
console.log("A idade do aluno é", aluno2.idade);  
console.log("O curso do aluno é:", aluno2.curso);  
console.log("A matrícula (RM) do aluno é:", aluno2.matricula);  

console.log("----------------------");

aluno1.aprender();
aluno1.estudar();
aluno1.apresentar();

console.log("----------------------");

aluno2.aprender();
aluno2.estudar();
aluno2.apresentar();

console.log("----------------------");
aluno3.aprender();
aluno3.estudar();
aluno3.apresentar();
