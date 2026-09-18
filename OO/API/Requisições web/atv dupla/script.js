// Seleciona os elementos HTML através dos seus IDs
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const produto = document.querySelector("#codigoProduto");
const botao = document.querySelector("#buscarDoacao");
const resultado = document.querySelector("#resultado");

botao.addEventListener("click", async () => { // Função assíncrona é executada, permitindo realizar a requisição à API sem bloquear a página
    const codigo = produto.value; // Captura o código de barras digitado no campo HTML.
    if (codigo === "") { // Verifica se o usuário deixou o campo vazio.
        resultado.innerHTML = "Digite um código";
        return;
    }

    try {
        const resposta = await fetch( // Realiza uma requisição HTTP GET utilizando fetch().
                                      // O await aguarda a resposta da API antes de continuar.
            `https://world.openfoodfacts.org/api/v2/product/${codigo}` // Realiza uma requisição HTTP GET utilizando fetch().
        );
        const dados = await resposta.json(); // Converte a resposta da API para o formato JSON.
                                             // O await aguarda a conversão dos dados.
        // O JSON organiza os dados do produto em uma estrutura que pode ser acessada pelo JavaScript.
        resultado.innerHTML = ` 
            <p>
                <strong>${nome.value}</strong><br>
                Email: ${email.value}<br>
                Produto: ${dados.product.product_name}<br>
                Ingredientes: ${dados.product.ingredients_text}<br>
                Nutrientes: ${dados.product.nutriments.energy_value} ${dados.product.nutriments.energy_unit}<br>
                <img src="${dados.product.image_url}" alt="Imagem do produto" width="20">
            </p>
            <hr>
        `;

        // Os valores são acessados através das propriedades do objeto "dados", retornado pela requisição.
            // dados.product: informações principais do produto.
            // product_name: nome do alimento.
            // ingredients_text: ingredientes cadastrados.
            // nutriments: informações nutricionais.
            // image_url: endereço da imagem do produto.
        // Os valores nome.value e email.value são obtidos
        // diretamente dos campos preenchidos pelo usuário.

    } catch (erro) {
        resultado.innerHTML = "Erro ao buscar produto."; // Caso ocorra um erro durante a requisição ou processamento, uma mensagem é exibida na área de resultados.
        console.log(erro); // O console.log() mostra os detalhes do erro no console do navegador, facilitando a identificação do problema.
    }

});
