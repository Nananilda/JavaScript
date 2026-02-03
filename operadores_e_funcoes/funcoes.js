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
    if (numero/2 = 0){
        console.log("o número é par");
    } else{
        console.log("o número é ímpar");
    }
}