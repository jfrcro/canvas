var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
console.log(lienzo);


dibujarLinea(color, xinicial, yinicial, xfinal, yfinal);

lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(xinicial, yinicial);
lienzo.lineTo(xfinal, yfinal);
lienzo.stroke();
lienzo.colsePath();

