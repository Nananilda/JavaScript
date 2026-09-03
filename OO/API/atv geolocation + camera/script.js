navigator.geolocation.getCurrentPosition(
    function (posicao) {
        const latitude = document.querySelector("#latitude");
        latitude.innerHTML = "&nbsp;" + posicao.coords.latitude;

        const longitude = document.querySelector("#longitude");
        longitude.innerHTML = "&nbsp;" + posicao.coords.longitude;

        const precisao = document.querySelector("#precisao");
        precisao.innerHTML = "&nbsp;" + posicao.coords.accuracy;
    },
);

navigator.mediaDevices.getUserMedia({
    video: true
})
    .then(function (stream) {
        const video = document.querySelector("#camera");
        video.srcObject = stream;
    })

const botao = document.getElementById('botao');
botao.addEventListener('click', function () {
    alert("foto enviada!");
});