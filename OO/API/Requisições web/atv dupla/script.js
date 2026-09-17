const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const produto = document.querySelector("#codigoProduto");
const botao = document.querySelector("#buscarDoacao");
const resultado = document.querySelector("#resultado");

botao.addEventListener("click", async () => {

    const codigo = produto.value;

    if (codigo === "") {
        resultado.innerHTML = "Digite um código";
        return;
    }

    try {

        const resposta = await fetch(
            `https://world.openfoodfacts.org/api/v2/product/${codigo}`
        );

        const dados = await resposta.json();

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

    } catch (erro) {

        resultado.innerHTML = "Erro ao buscar produto.";
        console.log(erro);

    }

});