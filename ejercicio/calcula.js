var texto = document.getElementById("nacido");
var eject = document.getElementById("boton");

eject.addEventListener("click", calc);

function calc()
{
  if (texto.value!="") 
  {
    var base = 2060
    var f = new Date();
    var ano = f.getFullYear();
    var edad = parseInt(texto.value);
    edadFinal = edad + base - ano;
    alert("En el 2060 tendrás " + edadFinal + " años.");
  }
  else
  {
    alert("Ingresa tu edad.");
  }
}