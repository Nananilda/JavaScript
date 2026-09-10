const canvas = document.querySelector("#canvas");
const contexto = canvas.getContext("2d"); 

// fofinho
contexto.lineWidth = 2;
contexto.lineCap = 'round';
contexto.lineJoin = 'round';

// cabeça
contexto.beginPath();
contexto.arc(150, 110, 20, 0, Math.PI * 2);
contexto.stroke();

// tronco
contexto.beginPath(); 
contexto.moveTo(150, 130); 
contexto.lineTo(150, 185);
contexto.stroke();

// braço direito
contexto.beginPath(); 
contexto.moveTo(150, 130); 
contexto.lineTo(130, 160);
contexto.stroke();

contexto.beginPath(); 
contexto.moveTo(130, 160); 
contexto.lineTo(160, 170);
contexto.stroke();

// braço eaquerdo
contexto.beginPath(); 
contexto.moveTo(150, 130); 
contexto.lineTo(175, 160);
contexto.stroke();

contexto.beginPath(); 
contexto.moveTo(175, 160); 
contexto.lineTo(190, 130);
contexto.stroke();

//perna direita
contexto.beginPath(); 
contexto.moveTo(150, 185); 
contexto.lineTo(135, 220);
contexto.stroke();

contexto.beginPath(); 
contexto.moveTo(135, 220); 
contexto.lineTo(130, 270);
contexto.stroke();

//perna esquerda
contexto.beginPath(); 
contexto.moveTo(150, 185); 
contexto.lineTo(170, 220);
contexto.stroke();

contexto.beginPath(); 
contexto.moveTo(170, 220); 
contexto.lineTo(175, 270);
contexto.stroke();

// coração
contexto.beginPath();
contexto.arc(210, 100, 10, 0, Math.PI, true);
contexto.stroke();

contexto.beginPath();
contexto.arc(230, 100, 10, 0, Math.PI, true);
contexto.stroke();

contexto.beginPath(); 
contexto.moveTo(200, 100); 
contexto.lineTo(220, 125);
contexto.stroke();

contexto.beginPath(); 
contexto.moveTo(240, 100); 
contexto.lineTo(220, 125);
contexto.stroke();