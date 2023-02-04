var canvas = document.querySelector('canvas');
var pencil = canvas.getContext('2d');

pencil.fillStyle = 'black'
pencil.fillRect(0, 0, 1000, 500);

var circleColor = ['red', 'green', 'blue'];
pencil.fillStyle = 'white'

var index = 0;

function changeColor() {

  if(index > circleColor.length - 1) {
    index = 0;
  }

  pencil.fillStyle = circleColor[index];

  index++;
  return false;

}

function mouseDraw(data) {
  var mouseX = data.pageX - canvas.offsetLeft;
  var mouseY = data.pageY - canvas.offsetTop;

  pencil.beginPath();
  pencil.arc(mouseX, mouseY, 25, 0, 2 * 3.14);
  pencil.fill();

}

canvas.onclick = mouseDraw;
canvas.oncontextmenu = changeColor; // Parecido com o comando .onclick, porém esse se dá a partir do click do botão direito do mouse. OBS: Use "return false;" na função para não aparecer o menu direito do navegador.
