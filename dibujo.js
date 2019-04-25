var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

var lineas = 30;
var l = 0;

dibujarLinea("#AAF", 0, 0, 0, 300);
dibujarLinea("#AAF", 0, 300, 300, 300);

while(l < lineas)
{
  var yinicial = 10 * l; 
  var xfinal = 10 * (l + 1);
  dibujarLinea("#AAF", 0, yinicial, xfinal, 300);
  console.log("linea " + l)
  l = l + 1;
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
  // lienzo.strokeWidht = "3px";
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}

