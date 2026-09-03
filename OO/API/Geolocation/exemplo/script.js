navigator.geolocation.getCurrentPosition(
// objeto.api        .método
    function (posicao) {
        console.log("latitude:", posicao.coords.latitude);
        console.log("longitude:", posicao.coords.longitude);
        console.log("precisão:", posicao.coords.accuracy);

        const resulatdo = document.querySelector("#resultado");
        resulatdo.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy_27UkYpZCzo-5BO19IXPP9QLjCO0s-_r_NLdWm4t8w&s=10";
    },
    function (erro) {
        console.log("não foi possivel obter a localização", erro)

        const resulatdo = document.querySelector("#resultado");
        resulatdo.src = "https://cdn-icons-png.flaticon.com/512/2951/2951965.png";
    }
);