// ---------- validar nome ----------
let nome = document.getElementById("nome"); // relebe o elemento nome por id (input)
let mensagemNome = document.getElementById("mensagemNome"); // recebe o elemento da mensagem do nome por id

let mascaraNome = /^[A-Za-zçÇÀ-ÿ\s]+$/;
    // A-Za-z = letras de A a Z maiúscula e minúscula
    // çÇ = inclui especificamente o cedilha
    // \s = permite espaços
    // À-ÿ = permite digitos com acento

nome.addEventListener("keyup", function(){ // evento para validação do nome
    if (!mascaraNome.test(nome.value)) { // valida por meio da máscara
        mensagemNome.textContent = "nome inválido";
        mensagemNome.classList.add("erro"); // cor vermelha na mensagem
        return;
    } else if (nome.value.length <= 3){ // valida por meio de tamanho mínimo
        mensagemNome.textContent = "nome inválido";
        mensagemNome.classList.add("erro");
        return;
    } else{ // retorna válido se todas forem verdadeiras
        mensagemNome.textContent = "nome válido!";
        mensagemNome.classList.remove("erro");
        mensagemNome.classList.add("certo"); // cor verde na mensagem
    }
});


// ---------- validar e-mail ----------
let email = document.getElementById("email"); // recebe o elemento email por id
let mensagemEmail = document.getElementById("mensagemEmail"); // recebe o elemento da mensagem do email por id

let mascaraMaiuscula = /[A-Z]/; // = letras de A a Z maiúsucla
let mascaraEspaco = /\s/; // = \s permite espaço
let mascaraEspecial1 = /[!#$%&'*\/=?^_`{|}~]/; // = valida todos os caracteres especiais exceto @ . _ e -
let mascaraEstrutura = /.+@.+\..+/; // = verifica se tem algo @ algo . algo
let mascaraMinuscula = /[a-z]/;
// apenas máscaras de estrutura completa precisam de ^ e $, como pode haver repetição não deve ter

email.addEventListener("keyup", function(){ // evento para valização do email
    if (mascaraEspaco.test(email.value)){  // valida se tem espaço
        mensagemEmail.textContent = "o e-mail não pode conter espaços";
        mensagemEmail.classList.add("erro");
    } else if (mascaraMaiuscula.test(email.value)){ // valida se tem letras maiúsculas
        mensagemEmail.textContent = "o e-mail não pode ter letras maiúsculas";
        mensagemEmail.classList.add("erro");
    } else if (mascaraEspecial1.test(email.value)){ // valida se tem caracteres especiais, com exceção de @ . _ e -
        mensagemEmail.textContent = "o e-mail não pode ter caracteres especiais, exceto @ .  _ -";
        mensagemEmail.classList.add("erro");
    } else if (!mascaraEstrutura.test(email.value)){ // verifica se NÃO tem o @ e .
        mensagemEmail.innerHTML = "o e-mail precisa ter um @ e um .";
        mensagemEmail.classList.add("erro");
    } else{ // retorna válido se todas forem verdadeiras
        mensagemEmail.textContent = "e-mail válido!";
        mensagemEmail.classList.remove("erro"); // impedir erro de classe
        mensagemEmail.classList.add("certo");
    }
});


// ---------- validar senha ----------
let senha = document.getElementById("senha"); // recebe o elemento senha por id
let botaosenha = document.getElementById("botaosenha") // relebe o elemento do botão da senha por id
let mensagemSenha = document.getElementById("mensagemSenha"); // relebe o elemento mensagem da senha por id

let mascaraEspecial2 = /[^a-zA-Z0-9]/; // = base que procura qualquer caractere especial
let mascaraNumero = /[0-9]/; // = números de 0 a 9

senha.addEventListener("keyup", function(){ // evento para validação de senha
    if (!mascaraMinuscula.test(senha.value)){ // valida se não tem minúscula
        mensagemSenha.textContent = "a senha precisa ter pelo menos uma letra minúscula";
        mensagemSenha.classList.add("erro");
    } else if (!mascaraMaiuscula.test(senha.value)){ // veriica se tem maiúscula
        mensagemSenha.textContent = "a senha precisa ter pelo menos uma letra maiúscula";
        mensagemSenha.classList.add("erro");
    } else if (!mascaraNumero.test(senha.value)){ // verifica se tem número
        mensagemSenha.textContent = "a senha precisa ter pelo menos um número";
        mensagemSenha.classList.add("erro");
    } else if (!mascaraEspecial2.test(senha.value)){ // verifica se tem caractere especial
        mensagemSenha.textContent = "a senha precisa ter pelo menos um caractere especial";
        mensagemSenha.classList.add("erro");
    } else if (senha.value.length < 8 || senha.value.length >= 20){ // verifica se o tamanho da senha está entre 8 e 20 números
        mensagemSenha.textContent = "a senha precisa ter entre 8 e 20 dígitos";
        mensagemSenha.classList.add("erro");
    } else{ // retorna se todos os valores forem corretos
        mensagemSenha.textContent = "senha válida";
        mensagemSenha.classList.remove("erro");
        mensagemSenha.classList.add("certo");
    }
});

    // mostrar esconder senha (<i>)
botaosenha.addEventListener("click", function(){ // evento para mostrar e esconder a senha com olinho
    if (senha.type === "password"){ // verifica se a senha está como password
        senha.setAttribute('type', 'text'); // muda a senha para text (visível)
        botaosenha.classList.replace('bi-eye-fill', 'bi-eye-slash-fill'); // substitui o olinho
    } else{ // retorna
        senha.setAttribute('type', 'password') // muda a senha para password (pontinhos)
        botaosenha.classList.replace('bi-eye-slash-fill', 'bi-eye-fill'); // e resubstitui o olinho
    }
});


// ---------- validar endereço ----------
let endereco = document.getElementById("endereco"); // recebe o endereço telefone por id
let mensagemEndereco = document.getElementById("mensagemEndereco"); // recebe o mensagem do endereço por id

let mascaraEndereco = /^\d{5}-\d{3}$/ // verifica se tem 5 números, um traço e 3 números

endereco.addEventListener("keyup", function() { // valida o endereço
    if (mascaraEndereco.test(endereco.value)){ // verifica se o endereço está conorme a máscara
        mensagemEndereco.textContent = "CEP válido!";
        mensagemEndereco.classList.remove("erro"); 
        mensagemEndereco.classList.add("certo"); 
    } else{ // retorna se a máscara estiver incorreta
        mensagemEndereco.textContent = "CEP inválido";
        mensagemEndereco.classList.add("erro");
    }
});


// ---------- validar telefone ----------
let telefone = document.getElementById("telefone"); // recebe o elemento telefone por id
let mensagemTelefone = document.getElementById("mensagemTelefone"); // recebe o elemento mensagem do telefone por id

let mascaraLetra = /[a-zA-Z]/;
    // | funciona como ou
let mascaraTelefone = /^\(\d{2}\)\d{9}$/;
    // \()  = exige parênteses com 2 números dentro.
    // \d = equivalência
    // {número} = quantidade númerica a ser inserida
let mascaraEspecial3 = /[^0-9()\-\s]/;
// \- é o hífen (com barra para não confundir)
// \s permite espaços (opcional)
// ^ é negação

telefone.addEventListener("keyup", function(){ // evento para validação de telefone
    if (mascaraLetra.test(telefone.value)){ // verifica se contém letras
        mensagemTelefone.textContent = "o telefone não pode conter letras";
        mensagemTelefone.classList.add("erro");
    } else if (mascaraLetra.test(telefone.value)){ // verifica se contém letras
        mensagemTelefone.textContent = "o telefone não pode conter letras";
        mensagemTelefone.classList.add("erro");
    } else if (mascaraEspecial3.test(telefone.value)){
        mensagemTelefone.textContent = "o telefone não pode conter caracteres especiais";
        mensagemTelefone.classList.add("erro");
    } else if (!mascaraTelefone.test(telefone.value)){ // verifica se o telefone segue os parâmetros
        mensagemTelefone.textContent = "use o formato! (xx)xxxxxxxxx";
        mensagemTelefone.classList.add("erro");
    } else{ // retorna válido se todas forem verdadeiras
        mensagemTelefone.textContent = "telefone válido!";
        mensagemTelefone.classList.remove("erro");
        mensagemTelefone.classList.add("certo");
    }
});

    // adicionar novos telefones
let adicionartelefone = document.getElementById("adicionartelefone"); // recebe o elemento telefone por id
let novotelefone = document.getElementById("novotelefone");

adicionartelefone.addEventListener("click", function(){ // evento para adicionar campos de telefone
    let inputnovotelefone = document.createElement("input"); // cria o elemento inputnovotelefone
    let removetelefone = document.createElement("button"); // cria o elemento removetelefone
    removetelefone.textContent = " - "; // adiciona "-" no botão adicionado (do removeteleone)
    novotelefone.appendChild(inputnovotelefone); // cria um novo campo para telefone
    novotelefone.appendChild(removetelefone); // cria um novo botão para remover telefone

    removetelefone.addEventListener("click", function(){ // evento para remover campos de telefone
        inputnovotelefone.remove(); // remove o input criado quando pressionado
        removetelefone.remove(); // remove o botão criado quando pressionado
    });
});


// ---------- mensagem cadastrado ----------
let mensagem = document.getElementById("mensagem"); // recebe o elemento mensagem por id
let botaoCadastrar = document.getElementById("cadastrar"); // recebe o elemento botão cadastrar por id


botaoCadastrar.addEventListener("click", function() {
    // verifica se todas as mensagens estão com a classe "certo"
    let nomeCerto = mensagemNome.classList.contains("certo");
    let emailCerto = mensagemEmail.classList.contains("certo");
    let senhaCerta = mensagemSenha.classList.contains("certo");
    let telefoneCerto = mensagemTelefone.classList.contains("certo");
    let enderecoCerto = mensagemEndereco.classList.contains("certo"); // a ser corrigido

    if (nomeCerto && emailCerto && senhaCerta && telefoneCerto && enderecoCerto){
        mensagem.textContent = "cadastro realizado com sucesso!"; // se todas as mensagens estiverem na classe "certo" o cadastro é realizado
        mensagem.classList.remove("erro");
        mensagem.classList.add("certo");
    } else{
        mensagem.textContent = "existem campos a serem corrigidos.";
        mensagem.classList.add("erro"); // se não, ainda haverá campos a serem corrigidos
    }
}); 