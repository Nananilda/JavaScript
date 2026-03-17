let senha = document.querySelector('#senha');
let botaosenha = document.querySelector('#botaosenha');

botaosenha.addEventListener("click", function(){
    if (senha.type === "password"){
        senha.setAttribute('type', 'text');
        botaosenha.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
    } else {
        senha.setAttribute('type', 'password')
        botaosenha.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
    }
}); 