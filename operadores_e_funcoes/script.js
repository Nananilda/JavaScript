console.log("Olá, JavaScript!");

//----------------- Operadores aritiméticos -----------------
let a = 10;
let b = 3;
console.log("adição +:",a + b); //adição
console.log("subtração -:",a - b); //subtração
console.log("multiplicação *:",a * b); //multiplicação
console.log("divisão /:",a / b); //divisão
console.log("resto da divisão %:",a % b); //resto da divisão
console.log("exponenciação **:",a ** b); //exponenciação

let contador = 5; // incremento
contador ++;
console.log("incremento ++:",contador);

let contador2 = 6; //decremento
contador --;
console.log("decremento --:",contador);

// Média e resto
let c = 3;
let d = 6;
let e = 8;
console.log((c + d + e)/3);
console.log(c % d);

//----------------- Operadores relacionais -----------------
let x = 10;
let y = "10";
console.log("igual (valor) ==:",x == y); // igual (valor)
console.log("igual (valor e tipo) ===:",x === y); // igual (valor e tipo)
console.log("// diferente (valor) !=:",x != y); // diferente (valor)
console.log("diferente(valor e tipo) !==:",x !== y); // diferente(valor e tipo)

//Comparar idade
let idade = 6;
if (idade >= 18){
    console.log("é maior de idade");
}
else{
    console.log("é menor de idade");
}

//Maior número
let n1 = 3;
let n2 = 9;
let n3 = 6;
if (n1 > n2 && n1 > n2){
    console.log("o maior número é n1:", n1);
}else if (n2 > n1 && n2> n3){
    console.log("o maior número é n2:", n2);
}else if (n3 > n1 && n3 > n2){
    console.log("o maior número é n3:", n3);
}else {
    console.log("eles são iguais, número 1:", n1, " número 2:", n2, " número 3:", n3);
}

//----------------- Operadores lógicos -----------------
let idade2 = 20;
let temCarteira = true;
console.log(idade2 >= 18 && temCarteira); //e/and

let chovendo = false;
let guardaChuva = true;
console.log(chovendo || guardaChuva); //ou/or, precisa de apenas um verdadeiro

let ligado = false;
console.log(!ligado); //inverso

//Aluno aprovado
nota = 6;
frequencia = 55;
if (nota >= 7 && frequencia >= 75){
    console.log("aluno aprovado!");
} else{
    console.log("aluno reprovado");
}

// Verificar acesso com login ou token
login = 12344;
token = 56789;
if (login == 12345 || token == 56789){
    console.log("acesso aprovado");
} else{
    console.log("acesso negado");
}

