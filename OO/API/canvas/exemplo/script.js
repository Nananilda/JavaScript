const canvas = document.querySelector("#canvas");
const contexto = canvas.getContext("2d"); //fornece as ferramentas para desenhar

// ------ desenha uma linha ------
contexto.beginPath(); //comando de inicio para não se perder
contexto.moveTo(10, 0); //define onde a linha começa       (x, y)
contexto.lineTo(50, 20);  //define onde a linha acaba

contexto.moveTo(10, 50); 
contexto.lineTo(50, 10);  
contexto.stroke(); //desenha a linha

// ------ desenha um retângulo preenchido ------
contexto.fillRect(50, 50, 150, 100); // (x, y, altura, largura);

// ------ desenha a borda do retângulo ------
contexto.strokeRect(250, 50, 150, 100);

// ------ desenha a borda do círculo ------
contexto.beginPath();
contexto.arc(100, 225, 50, 0, Math.PI * 2); // (x, y, raio, anguloiicial * anlgunofinal), está em radianos
                                            // true faz inverter
                                            // * 2 a bolinha inteira
contexto.stroke();
