let mascaraNome = /^[a-zA-Z]+[^0-9$*&@#]$/;
//  (?=.*\d)              // deve conter ao menos um dígito
//   (?=.*[a-z])           // deve conter ao menos uma letra minúscula
//   (?=.*[A-Z])           // deve conter ao menos uma letra maiúscula
//   (?=.*[$*&@#])         // deve conter ao menos um caractere especial
//   [0-9a-zA-Z$*&@#]{8,}  // deve conter ao menos 8 dos caracteres mencionados

// Validar nome
let nome = document.getElementById("nome");
let mensagemNome = document.getElementById("mensagemNome");

nome.addEventListener("keyup", function () {
    if (!mascaraNome.test(nome.value)) {
        mensagemNome.textContent = "nome inválido!";
        mensagemNome.classList.add("erro");
        return;
    } else {
        mensagemNome.textContent = "ok";
        mensagemNome.classList.add("certo");
    }
});

// Validar e-mail
let email = document.getElementById("email");
let mensagemEmail = document.getElementById("mensagemEmail");

email.addEventListener("keyup", function () {
    if (LetraMaiuscula.test(email.value)) {
        mensagemEmail.innerText("o e-mail não pode ter letras maiúsculas");
        mensagem.classList.toggle("erro");
    } else if (email.includes("@") && email.includes(".")) { //erro
        mensagemNome.innerText("e-mail válido!");
        mensagem.classList.toggle("certo");
    }
})

// Validar senha
let senha = document.getElementById("senha");
let botaosenha = document.getElementById("botaosenha")
let mensageSenha = document.getElementById("mensagemSenha");

// Mostrar esconder
botaosenha.addEventListener("click", function () {
    if (senha.type === "password") {
        senha.setAttribute('type', 'text');
        botaosenha.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
    } else {
        senha.setAttribute('type', 'password')
        botaosenha.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
    }
});

// Validar componentes
senha.addEventListener("keyup", function () {
    if (senha <= 1) {
        mensageSenha.innerText("a senha precisa ter mais de um dígito");
        mensagem.classList.toggle("erro");
        return;
    } else if (senha != indlcudes(LetraMaiuscula)) {
        mensageSenha.innerText("a senha precisa ao menos uma letra maiuscula");
        mensagem.classList.toggle("erro");
        return;
    } else if (senha != indlcudes(LetraMinuscula)) {
        mensageSenha.innerText("a senha precisa ao menos uma letra minúscula");
        mensagem.classList.toggle("erro");
        return;
    } else if (senha != indlcudes(CaractereEspecial)) {
        mensageSenha.innerText("a senha precisa ao menos um caractere especial");
        mensagem.classList.toggle("erro");
        return;
    } else {
        mensageSenha.innerText("a senha é válida!");
        mensagem.classList.toggle("certo");
    }
})


// validar endereço
let endereco = document.getElementById("endereco");
let mensagemEndereco = document.getElementById("mensagemEndereco");

endereco.addEventListener("keyup", function () {
    if (endereco.indlcudes(",", ",", ",")) {
        mensagemEndereco.innerText("endereço válido!");
        mensagem.classList.toggle("certo");
    } else {
        mensagemEndereco.innerText("o endereço precisa ser separado por trÊs vírgulas!");
        mensagem.classList.toggle("erro");
    }
})


// Validar telefone
let telefone = document.getElementById("telefone");
let adicionartelefone = document.getElementById("adicionartelefone");
let novotelefone = document.getElementById("novotelefone");
let mensagemTelefone = document.getAnimations("mensagemTelefone");

// Validar componentes
telefone.addEventListener("keyup", function () {
    if (trim(telefone.indlcudes("()")) && telefone === 13) {
        mensagemTelefone.innerText("telefone válido!");
        mensagem.classList.toggle("certo");
    } else if (telefone > 13) {
        mensagemTelefone.innerText("o telefone só pode ter 11 dígitos + ()");
        mensagem.classList.toggle("erro");
    } else if (telefone.includes(LetraMaiuscula) && telefone.includes(LetraMinuscula)) {
        mensagemTelefone.innerText("o telefone não pode conter letras, apenas números")
    } else {
        mensagemTelefone.innerText("o telefone precisa conter ()");
        mensagem.classList.toggle("erro");
    }
})

// Adicionar novos telefones
adicionartelefone.addEventListener("click", function () {
    let novotelefone1 = document.createElement("input");
    novotelefone1.textContent = novotelefone.value;
    novotelefone.appendChild(novotelefone1);
});


//mensagem cadastrado