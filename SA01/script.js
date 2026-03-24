let nome = document.getElementById("nome")
let email = document.getElementById("email")
let senha = document.getElementById("senha")
let endereco = document.getElementById("endereco")
let telefone = document.getElementById("telefone")
let botao = document.getElementById("cadastrar")
let mensagem = document.querySelector("#mensagem");

botao.addEventListener("keyup", function(){
    if (!email.value.includes("@") && !email.value.includes(".")){
        mensagemEmail.innerText = "é obrigatório conter @ e .";
        mensagemEmail.classList.add("erro");
    } else {
        mensagemEmail.innerText = "e-mail válido";
        mensagemEmail.classList.add("correto");
    }
})

senha.addEventListener("keyup", function(){
    if (senha.value.length < 6){
        mensagemSenha.innerText = "Senha fraca";
    } else if (senha.value.length >= 6 && senha.value.length < 10){
        mensagemSenha.innerText = "Senha aceitável";
    } else if (senha.value.length >= 10 && senha.value.length <= 15){
        mensagemSenha.innerText = "Senha forte";
    }
})

//validação em tempo real formato de e-mail, força da senha, campos obrigatórios),
// indicar sucesso e erro
// + de um telefone e endereço
//Mensagem de aviso de cadastro