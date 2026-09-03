navigator.geolocation.getCurrentPosition(
    function (posicao) {
        const latitude = document.querySelector("#latitude");
        latitude.add = posicao.coords.latitude;

        const longitude = document.querySelector("#longitude");
        longitude.add = posicao.coords.longitude;

        const precisao = document.querySelector("#precisao");
        precisao.add = posicao.coords.accuracy;
    },
);

navigator.mediaDevices.getUserMedia({
    video: true
})
.then(function(stream){
    const video = document.querySelector("#camera");
    video.srcObject = stream;
})
