let email = document.getElementById("email");
let senha = document.getElementById("senha");
let enviar = document.getElementById("enviar");
let mensagemEmail = document.getElementById("mensagemEmail");
let mensagemSenha = document.getElementById("mensagemSenha");
let mensagemEnviar = document.getElementById("mensagemEnviar");

enviar.addEventListener("click", function(){
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
        mensagemSenha.innerText = "senha fraca";
        mensagemSenha.classList.add("erro");
    } else if (senha.value.length >= 6 && senha.value.length < 10){
        mensagemSenha.innerText = "senha aceitável";
        mensagemSenha.classList.add("maisoumenos");
    } else if (senha.value.length >= 10){
        mensagemSenha.innerText = "senha forte";
        mensagemSenha.classList.add("teste");
    }
})
