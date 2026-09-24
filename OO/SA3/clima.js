/* previsão do tempo */
// https://open-meteo.com/

let buscarTempo = document.getElementById("buscarTempo");
let mensagemTempo = document.getElementById("mensagemTempo");

buscarTempo.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(
        async function (posicao) {
            let latitude = posicao.coords.latitude;
            let longitude = posicao.coords.longitude;

            try {
                let resposta = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`);
                let dado = await resposta.json();
                let temperatura = dado.current.temperature_2m;

                mensagemTempo.innerText = `temperatura local: ${temperatura}°C`;

            } catch (erro) {
                mensagemTempo.textContent = "erro ao buscar clima";
            }
        },

        function () {
            mensagemTempo.textContent = "não foi possível obter sua localização";
        }
    );
});