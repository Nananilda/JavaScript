// Função que mostre a hora atual
function HoraAtual(){
    let data = new Date;
    console.log(hoje.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds())
}

// Receber dois números
function DoisNúmeros(num1, num2){
    console.log("Média: ", (num1 + num2)/2);
    console.log("soma: ", num1 + num2);
}
let b1 = Number(prompt("Digite o n1: "));
let b2 = Number(prompt("Digite o n2: "));
DoisNúmeros(b1, b2);    

// Recebe nome
function nomenome(text){
    console.log("Tamanho: ", text.length);
    console.log("Maiúsculo: ", text.toUpperCase());
}
let nome = prompt("Digite um nome: ");
nomenome(nome);

// Recebe frase
function frasefrase(phrase){
    console.log(phrase.includes("HTML"));
}
let frase = prompt("Escreva uma frase: ");
frasefrase(frase)

