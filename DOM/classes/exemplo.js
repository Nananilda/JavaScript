// element.innerHTML - define ou retorna o conteudo HTML de um elemento
document.getElementById("conteudo").innerHTML = "<p>Olá mundo DOM! (código HTML = innerhtml) </p>";

// element.textContent - 
document.getElementById("mensagem").textContent = "texto simples, sem HTML ( = textcontent)";

// element.setAttribute(name,value) - define o valor de um atributo de um projeto
document.getElementById("foto").setAttribute("src", "https://i.pinimg.com/736x/cc/0d/37/cc0d3781240d0fbfe57194dd56898c88.jpg");

// ellement.getAttribute(name) - retorna o valor de um atributo de um elemento
let url = document.getElementById("link").getAttribute("href");
console.log(url); // https://example.com

// element.style.property - define o valor de uma propriedade CSS de um elemento
document.getElementById("caixa").style.backgroundColor = "lightblue";

// element.classList.add(className) - adicioa uma classe css a um elemento
document.getElementById("alerta").classList.add("destaque");

// element.classList.remove(className) - remove uma classe CSS de um elemento
document.getElementById("alert").classList.remove("oculto");

// document.createElement(tagName) - cria um novo elemento HTML dinamicamente atraves do JS
let novoParagrafo = document.createElement("p"); // qualquer elemento (p, h1, h2)
novoParagrafo.textContent = "Esse elemento foi criado pelo JavaScript";
document.getElementById("container").appendChild(novoParagrafo);

// element.appendChild(child) - adiciona um novo elemento como um filho de um elemento existente
let novoItem = document.createElement("li");
novoItem.textContent = "Item novo";
document.getElementById("lista").appendChild(novoItem);

// element.removeChild(Child) - remove um elemento filho de um elemento existete
let item = document.getElementById("item1");
document.getElementById("list").removeChild(item);