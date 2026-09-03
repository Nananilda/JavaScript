navigator.geolocation.getCurrentPosition(
// objeto.api        .método
    function (posicao) {
        console.log("latitude:", posicao.coords.latitude);
        console.log("longitude:", posicao.coords.longitude);
        console.log("precisão:", posicao.coords.accuracy);
    },
    function (erro) {
        console.log("não foi possivel obter a localização", erro)
    }
);