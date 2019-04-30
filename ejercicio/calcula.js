var texto = document.getElementById("nacido");
var eject = document.getElementById("boton");

eject.addEventListener("click", calc);

function calc()
{
  if (texto.value!="" && texto.value!="0") 
  {
    var base = 2050
    var f = new Date();
    var ano = f.getFullYear();
    var edad = parseInt(texto.value);
 
    if (texto.value <= 122) 
    {
      edadFinal = edad + base - ano;
       alert("En el 2050 tendrás " + edadFinal + " años.");
    }
    else if (texto.value > 122)
    {
      edadFinal = edad + base - ano; 
       alert("Record! en el 2050 tendrás " + edadFinal + " años.");
    }
  }
  else
  {
    alert("no recibí tu edad.");
  }
}