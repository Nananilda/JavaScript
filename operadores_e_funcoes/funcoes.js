//Função sem parâmetros
function saudacao(){
    console.log("olá, javascript!");
}
saudacao();

//Função com retorno
//usado geralmente para calculos
function somar(a,b){
    return a + b;
}
console.log(somar(5,3));

//Funçao sem retorno
function saudacao1(nome){
    console.log("Olá, ", nome);
}
console.log(saudacao1("anna"));

//MMC
function imc(peso, altura){
    let imc = peso/(altura*altura);
    return imc;
}

let peso = 51.3;
let altura = 1.64;
console.log("o imc de peso: ", peso, " e altura: ", altura, " é:", imc(peso, altura));

//Par ou ímpar
function imparpar(numero){
    if (numero % 2 == 0){
        console.log("o número é par");
    } else{
        console.log("o número é ímpar");
    }
}
console.log(imparpar(3));

//Funções nativas
console.log("Funções Nativas");

//Data e hora
let agora = new Date();
console.log(agora)

function mostrarDataHora(){
    let data = new Date;

    console.log("Dia: ", data.getDate());
    console.log("Mês: ", data.getMonth() +1);
    console.log("Ano: ", data.getFullYear());
    console.log("Hora: ", data.getHours());
    console.log("Minutos: ", data.getMinutes());
    console.log("Segundos: ", data.getSeconds());
}

mostrarDataHora();

function dia(){
    let hoje = new Date();
    console.log(hoje.getDate() + "/" + hoje.getMonth() + "/" + hoje.getFullYear() + " _ " + hoje.getHours() + ":" + hoje.getMinutes() + ":" + hoje.getSeconds() + ":" + hoje.getMilliseconds());
}

dia();

//Funções matemáticas
console.log("Funções matemáticas");

console.log(Math.PI);

function calcularOperacoes(numero){
    console.log("Raiz: ", Math.sqrt(numero));
    console.log("Arredondado: ", Math.round(numero));
    console.log("Para cima: ", Math.ceil(numero));
    console.log("Para baixo: ", Math.floor(numero));
    console.log("Quadrado: ", Math.pow(numero, 2));
    console.log("Valor absoluto: ", Math.abs(numero));
}

calcularOperacoes(7.8);

function calcularOperacoes2(n1, n2){
    console.log("Quadrado: ", Math.pow(n1, n2));
}

calcularOperacoes2(7, 8);

//Funções de string
console.log("Funções de string");

function analisarTexto(texto){
    console.log("Tamanho: ", texto.length);
    console.log("Maiúsculo: ", texto.toUpperCase());
    console.log("Minúsculo: ", texto.toLowerCase());
}

analisarTexto("JavaScript");


function verificaIgualdade(frase){
    console.log(frase.includes("JavaScript"));
}

verificaIgualdade("JavaScript")


function completa(nome, curso){
    console.log("Aluno: " + nome + " | Curso: " + curso);
}
completa("José", "Front-end")

