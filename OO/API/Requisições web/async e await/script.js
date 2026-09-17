const botao = document.querySelector("#buscarUsuarios");
const usuario = document.querySelector("#resultado");

botao.addEventListener("click", async () => {
    try {
        const resposta = await fetch (
            "https://jsonplaceholder.typicode.com/users" //o Await faz a função assíncrona aguardar aquela PROMISE, enquanto o js pode continuar tratando outras coisas da aplicação
        );

        const dados = await resposta.json();
        resultado.innerHTML = "";
        dados.forEach(usuario => {
            resultado.innerHTML += `
            <p>
                <strong>${usuario.name}</strong><br>
                ${usuario.email}
            </p>
            <hr>
        `;
        });
    } catch (erro) {
        resultado.innerHTML = "Erro ao buscar usuário.";
        console.log(erro);
    }
});