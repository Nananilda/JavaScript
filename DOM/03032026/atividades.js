// Atividade 1
let texto1 = document.querySelector(".texto1");
let azul = document.querySelector("#azul");
let vermelho = document.querySelector("#vermelho");

azul.addEventListener("click", function () {
    texto1.style.color = "blue";
});

vermelho.addEventListener("click", function () {
    texto1.style.color = "red";
});


// Atividade 2
let MoEs = document.getElementById("MoEs");
let texto2 = document.getElementById("texto2");

MoEs.addEventListener('click', function () {
    texto2.classList.toggle("esconder");
});


// Atividade 3
let texto3 = document.getElementById("texto3");
let contador = document.getElementById("contador")

texto3.addEventListener("input", function () {
    const quantidade = texto3.value.length;
    contador.innerText = quantidade;
});


// Atividade 4
let clicar = document.getElementById("clicar");
let contador2 = document.getElementById("contador2");
nclique = 0;

clicar.addEventListener("click", function () {
    nclique = nclique + 1;
    contador2.innerText = nclique;
})


// Atividade 5
let inserir = document.getElementById("inserir");
let botao = document.getElementById("botao");
let adicionar = document.getElementById("adicionar");

botao.addEventListener("click", function () {
    let novoItem = document.createElement("li");
    novoItem.textContent = inserir.value;
    adicionar.appendChild(novoItem);
});


// Atividade 6 + desafio extra
let inserir2 = document.getElementById("inserir2");
let botao2 = document.getElementById("botao2");
let adicionar2 = document.getElementById("adicionar2");

botao2.addEventListener("click", function () {
    let novoItem2 = document.createElement("li");
    novoItem2.textContent = inserir2.value;
    adicionar2.appendChild(novoItem2);
    novoItem2.addEventListener("click", function () {
        if (confirm("você quer MESMO apagar?")) {
            adicionar2.removeChild(novoItem2);
        };
    });
});

// Desafio HARD
let texto4 = document.getElementById("texto4");
let botao3 = document.getElementById("botao3");
let mensagem = document.getElementById("alerta");

botao3.addEventListener("click", function () {
    if (texto4.value.trim() === "") {
        mensagem.innerText = "o campo nome é obrigatório";
        mensagem.classList.add("vazio");
    } else {
        alerta.classList.toggle("preenchido");
        mensagem.innerText = "nome enviado com sucesso";
    }
})
