var	texto = document.getElementById("texto_lineas");
var	boton = document.getElementById("botoncito");

boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
  var l = 0;

  var yinicial, xfinal;
  var colorLineas = "#AAF";

  dibujarLinea(colorLineas, 0, 0, 0, 300);
  dibujarLinea(colorLineas, 0, 300, 300, 300);

  var ancho = d.width;
  var espacio = ancho / lineas;
  // console.log(espacio);

  for(l = 0; l < lineas; l++)
  {
    yinicial = espacio * l; 
    xfinal = espacio * (l + 1);
    dibujarLinea(colorLineas, 0, yinicial, xfinal, 300);
    console.log("linea " + l)
  }
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
