/* previsão do tempo */
class PrevisaoTempo {
    constructor(botao, mensagem) {
        this.botao = botao;
        this.mensagem = mensagem;
        this.botao.addEventListener("click", () => {
            this.buscarClima();
        });
    }

    buscarClima() {
        navigator.geolocation.getCurrentPosition(
            async (posicao) => {
                let latitude = posicao.coords.latitude;
                let longitude = posicao.coords.longitude;

                try {
                    let resposta = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`);
                    let dado = await resposta.json();
                    let temperatura = dado.current.temperature_2m;
                    this.mensagem.innerText = `Temperatura local: ${temperatura}°C`;
                
                } catch (erro) {
                    this.mensagem.textContent ="Erro ao buscar clima";
                }
            },

            () => { this.mensagem.textContent = "Não foi possível obter sua localização";
            }
        );
    }
}

/* criação do objeto */
let previsao = new PrevisaoTempo(
    document.getElementById("buscarTempo"),
    document.getElementById("mensagemTempo")
 );

// colcoar o if de emojis