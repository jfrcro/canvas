var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

var lineas = 30;
var l = 0;

var yinicial, xfinal;
var colorLineas = "#AAF";

dibujarLinea(colorLineas, 0, 0, 300, 0);
dibujarLinea(colorLineas, 300, 0, 300, 300);


for(l = 0; l < lineas; l++)
{
  xinicial = 10 * l; 
  yfinal = 10 * (l + 1);
  dibujarLinea(colorLineas, xinicial, 0, 300, yfinal);
  console.log("linea " + l)
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

