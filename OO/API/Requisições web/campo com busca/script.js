const botao = document.querySelector("#buscarUsuarios");
const usuario = document.querySelector("#resultado");
const id = document.querySelector("#idUsuario");

botao.addEventListener("click", async () => {

    const id = idUsuario.value;

    if (id === "") {
        resultado.innerHTML = "Digite um ID"
        return;
    }

try {
    const resposta = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );

    const dados = await resposta.json();
    resultado.innerHTML += `
            <p>
                <strong>${dados.name}</strong><br>
                Email: ${dados.name}<br>
                Cidade: ${dados.email}<br>
                Telefone: ${dados.phone}
            </p>
            <hr>
        `;
    } catch (erro) {
        resultado.innerHTML ="erro"
        console.log(erro);
    }
});