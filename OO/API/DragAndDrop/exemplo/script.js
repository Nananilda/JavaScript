const produto = document.querySelector("#produto");
const carrinho = document.querySelector("#carrinho");

// event = objeto fornecido pelo navegador que tem informações sobre o evento que aconteceu
// dataTransfer = objeto para armazenar e tarnsportar dads surante a operação de arrastar e soltar
produto.addEventListener("dragstart", function(event){
    event.dataTransfer.setData("text", event.target.id);
});

// mudar o parão
carrinho.addEventListener("dragover", function(event){
    event.preventDefault();
    console.log("pode soltar aqui no carrinho")
});

// soltar
carrinho.addEventListener("drop", function(event){
    event.preventDefault();
    const id = event.dataTransfer.getData("text");
    const elemento = document.querySelector("#" + id);

    carrinho.appendChild(elemento); // a div do produto passa a ser filho da div carrinho
});