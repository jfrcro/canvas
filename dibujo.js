var d = document.getElementById("dibujito");  // metodo del documento que trae elemento mediante su id con un solo parametro "string"
var lienzo = d.getContext("2d");    //metodo del canvas que viene desde d. d es canvas
console.log(lienzo);

lienzo.beginPath();          //iniciar dibujo, arrancar un traso
lienzo.strokeStyle = "blue";  // variable, atributo o propiedad de lienzo que es el contexto 2d del canvas
lienzo.moveTo(50, 10);     // metodo o funcion del canvas para ubicar el lapiz donde arranca linea (parametros dobles)
lienzo.lineTo(250, 2);     //hacia donde se traza la linea
lienzo.stroke();             //hace el trazo
lienzo.colsePath();          //cierra dibujo, el trazo , permite reabrir la proxima linea

