var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

var lineas = 30;
var l = 0;

var colorLineas = "#AAF";

dibujarLinea(colorLineas, 0, 0, 300, 0);
dibujarLinea(colorLineas, 300, 0, 300, 300);


for(l = 0; l < lineas; l++)
{
  baseCero = 10 * l; 
  baseDiez = 10 * (l + 1);
  dibujarLinea(colorLineas, baseCero, 0, 300, baseDiez);
  dibujarLinea(colorLineas, 0, baseCero, baseDiez, 300);
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

