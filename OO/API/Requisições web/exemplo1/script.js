//let - usar para variaveis
//const - quando nao vai mudar as variaveis

const botao = document.querySelector("#buscarUsuarios");
const usuario = document.querySelector("#resultado");

botao.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/users")

    .then(resposta => resposta.json())
    .then(dados => {
        console.log(dados);

        resultado.innerHTML = "";
        dados.forEach(usuario => {
            resultado.innerHTML += `
                <p> 
                <strong>${usuario.name}</strong><br>
                ${usuario.email}
                </p>
                <hr>`
        })
    })
            .catch(erro => {
                resultado.innerHTML = "erro ao buscar usuario"
                console.log(erro);
            });
        });