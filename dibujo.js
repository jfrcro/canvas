var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

var lineas = 30;
var l = 0;

var yinicial, xfinal;
var colorLineas = "#AAF";

dibujarLinea(colorLineas, 0, 0, 0, 300);
dibujarLinea(colorLineas, 0, 300, 300, 300);


while(l < lineas)
{
  yinicial = 10 * l; 
  xfinal = 10 * (l + 1);
  dibujarLinea(colorLineas, 0, yinicial, xfinal, 300);
  console.log("linea " + l)
  l++;
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

