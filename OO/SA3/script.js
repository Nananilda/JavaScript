class FormularioContato {
    constructor() {
        this.nome = document.getElementById("nome");
        this.email = document.getElementById("email");
        this.telefone = document.getElementById("telefone");
        this.cep = document.getElementById("cep");

        this.mensagemNome = document.getElementById("mensagemNome");
        this.mensagemEmail = document.getElementById("mensagemEmail");
        this.mensagemTelefone = document.getElementById("mensagemTelefone");
        this.mensagemCep = document.getElementById("mensagemCep");

        this.buscarCep = document.getElementById("buscarcep");
        this.form = document.querySelector("form");

        this.configurarEventos();
    }

    configurarEventos() {
        this.nome.addEventListener("keyup", () => {
            this.validarNome();
        });

        this.email.addEventListener("keyup", () => {
            this.validarEmail();
        });

        this.telefone.addEventListener("keyup", () => {
            this.validarTelefone();
        });

        this.buscarCep.addEventListener("click", () => {
            this.consultarCep();
        });

        this.form.addEventListener("submit", (evento) => {
            this.enviar(evento);
        });
    }

    validarNome() {
        let mascaraNome = /^[A-Za-zçÇÀ-ÿ\s]+$/;

        if (!mascaraNome.test(this.nome.value)) {
            this.mensagemNome.textContent = "Nome inválido";
            this.mensagemNome.classList.add("erro");
            this.mensagemNome.classList.remove("certo");
        } else if (this.nome.value.length <= 3) {
            this.mensagemNome.textContent = "O nome deve ter mais de 3 caracteres";
            this.mensagemNome.classList.add("erro");
            this.mensagemNome.classList.remove("certo");
        } else {
            this.mensagemNome.textContent = "Nome válido!";
            this.mensagemNome.classList.remove("erro");
            this.mensagemNome.classList.add("certo");
        }
    }

    validarEmail() {
        let mascaraMaiuscula = /[A-Z]/;
        let mascaraEspaco = /\s/;
        let mascaraEspecial = /[!#$%&'*\/=?^`{|}~]/;
        let mascaraEstrutura = /.+@.+\..+/;

        if (mascaraEspaco.test(this.email.value)) {
            this.mensagemEmail.textContent = "O e-mail não pode conter espaços";
            this.mensagemEmail.classList.add("erro");
            this.mensagemEmail.classList.remove("certo");
        } else if (mascaraMaiuscula.test(this.email.value)) {
            this.mensagemEmail.textContent = "O e-mail não pode ter letras maiúsculas";
            this.mensagemEmail.classList.add("erro");
            this.mensagemEmail.classList.remove("certo");
        } else if (mascaraEspecial.test(this.email.value)) {
            this.mensagemEmail.textContent = "Use apenas @ . _ -";
            this.mensagemEmail.classList.add("erro");
            this.mensagemEmail.classList.remove("certo");
        } else if (!mascaraEstrutura.test(this.email.value)) {
            this.mensagemEmail.textContent = "O e-mail precisa conter @ e .";
            this.mensagemEmail.classList.add("erro");
            this.mensagemEmail.classList.remove("certo");
        } else {
            this.mensagemEmail.textContent = "E-mail válido!";
            this.mensagemEmail.classList.remove("erro");
            this.mensagemEmail.classList.add("certo");
        }
    }

    validarTelefone() {
        let mascaraLetra = /[a-zA-Z]/;
        let mascaraTelefone = /^\(\d{2}\)\d{9}$/;
        let mascaraEspecialTelefone = /[^0-9()\s]/;

        if (mascaraLetra.test(this.telefone.value)) {
            this.mensagemTelefone.textContent = "O telefone não pode conter letras";
            this.mensagemTelefone.classList.add("erro");
            this.mensagemTelefone.classList.remove("certo");
        } else if (mascaraEspecialTelefone.test(this.telefone.value)) {
            this.mensagemTelefone.textContent = "Telefone inválido";
            this.mensagemTelefone.classList.add("erro");
            this.mensagemTelefone.classList.remove("certo");
        } else if (!mascaraTelefone.test(this.telefone.value)) {
            this.mensagemTelefone.textContent = "Use o formato: (19)999999999";
            this.mensagemTelefone.classList.add("erro");
            this.mensagemTelefone.classList.remove("certo");
        } else {
            this.mensagemTelefone.textContent = "Telefone válido!";
            this.mensagemTelefone.classList.remove("erro");
            this.mensagemTelefone.classList.add("certo");
        }
    }

    async consultarCep() {
        let cep = this.cep.value;
        if (cep === "") {
            this.mensagemCep.textContent = "Digite um CEP";
            this.mensagemCep.classList.add("erro");
            this.mensagemCep.classList.remove("certo");
            return;
        }

        try {
            let resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            let dado = await resposta.json();

            if (dado.erro) {
                this.mensagemCep.textContent = "CEP não encontrado";
                this.mensagemCep.classList.add("erro");
                this.mensagemCep.classList.remove("certo");
                return;
            }
            this.mensagemCep.innerText =
            `Rua: ${dado.logradouro}
            Bairro: ${dado.bairro}
            Cidade: ${dado.localidade} - ${dado.uf}`;
            this.mensagemCep.classList.remove("erro");
            this.mensagemCep.classList.add("certo");

        } catch {
            this.mensagemCep.textContent = "Erro ao consultar o CEP";
            this.mensagemCep.classList.add("erro");
            this.mensagemCep.classList.remove("certo");
        }
    }

    enviar(evento) {
        evento.preventDefault();
        let nomeOk = this.mensagemNome.classList.contains("certo");
        let emailOk = this.mensagemEmail.classList.contains("certo");
        let telefoneOk = this.mensagemTelefone.classList.contains("certo");
        let cepOk = this.mensagemCep.classList.contains("certo");

        if (!nomeOk || !emailOk || !telefoneOk || !cepOk) {
            alert("Por favor, corrija os campos antes de enviar.");
            return;
        }
        alert("Mensagem enviada com sucesso!");
        
        this.form.reset();
        this.mensagemNome.textContent = "";
        this.mensagemEmail.textContent = "";
        this.mensagemTelefone.textContent = "";
        this.mensagemCep.textContent = "";
    }
}


/* criação do objeto */

let formulario = new FormularioContato();