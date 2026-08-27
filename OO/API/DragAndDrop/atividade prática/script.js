const listaGrupos = [];
const listaPessoas = [];

class Grupo {
    constructor(nomeGrupo, botaoGrupo, resultadoGrupo) {
        this.nomeGrupo = nomeGrupo;
        this.botaoGrupo = botaoGrupo;
        this.resultadoGrupo = resultadoGrupo;
        this.pessoasDoGrupo = [];
        this.id = "grupo-" + Date.now();
    }

    mostrarGrupo() {
        const exibirGrupo = document.querySelector("#resultadoGrupo");

        exibirGrupo.innerHTML += `
            <div class="grupo" id="${this.id}">
                <h4>${this.nomeGrupo}</h4>
                <div class="pessoasGrupo"></div>
            </div>
        `;
    }
}

class Pessoa {
    constructor(nomePessoa) {
        this.nomePessoa = nomePessoa;
        this.id = "pessoa-" + Date.now();
    }

    mostrarPessoa() {
        const exibirPessoa = document.querySelector("#resultadoPessoa");

        exibirPessoa.innerHTML += `
            <p id="${this.id}" draggable="true">
                ${this.nomePessoa}
            </p>
        `;

        const pessoa = document.querySelector("#" + this.id);

        pessoa.addEventListener("dragstart", function (event) {
            event.dataTransfer.setData("text", event.target.id);
        });
    }
}

const nomeGrupo = document.querySelector("#nomeGrupo");
const nomePessoa = document.querySelector("#nomePessoa");
const botaoPessoa = document.querySelector("#botaoPessoa");
const botaoGrupo = document.querySelector("#botaoGrupo");
const resultadoGrupo = document.querySelector("#resultadoGrupo");
const resultadoPessoa = document.querySelector("#resultadoPessoa");


botaoGrupo.addEventListener("click", function () {

    if (nomeGrupo.value.trim() === "") {
        return;
    }

    const grupao = new Grupo(
        nomeGrupo.value,
        botaoGrupo,
        resultadoGrupo
    );

    listaGrupos.push(grupao);
    grupao.mostrarGrupo();

    nomeGrupo.value = "";
});


botaoPessoa.addEventListener("click", function () {

    if (nomePessoa.value.trim() === "") {
        return;
    }

    const pessoa = new Pessoa(nomePessoa.value);

    listaPessoas.push(pessoa);
    pessoa.mostrarPessoa();

    nomePessoa.value = "";
});


resultadoGrupo.addEventListener("dragover", function (event) {
    event.preventDefault();
});


resultadoGrupo.addEventListener("drop", function (event) {
    event.preventDefault();

    const idPessoa = event.dataTransfer.getData("text");
    const pessoa = document.querySelector("#" + idPessoa);

    if (!pessoa) {
        return;
    }

    // Procura o grupo que recebeu a pessoa
    const grupo = event.target.closest(".grupo");

    if (!grupo) {
        return;
    }

    const areaPessoas = grupo.querySelector(".pessoasGrupo");

    areaPessoas.appendChild(pessoa);
});