const video = document.querySelector("#camera");
const canvas = document.querySelector("#canvas");
const botao = document.querySelector("#botao");
const foto = document.querySelector("#foto")

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
        video.srcObject = stream;
    })

botao.addEventListener('click', function () {
    canvas.width = video.clientWidth;
    canvas.height = video.clientHeight;

    const contexto = canvas.getContext("2d");

    contexto.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height,
    );
    
    foto.src = canvas.toDataURL("image/png");

    alert("foto enviada!");
});

