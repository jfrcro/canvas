var texto = document.getElementById("nacido");
var eject = document.getElementById("boton");

eject.addEventListener("click", calc);

function calc()
{
  var edad = parseInt(texto.value);
  var f = new Date();
  var ano = f.getFullYear();
  var anoEnQueNacio = ano - edad;
  var aInicial = ano - 150;
  
  console.log(aInicial);
  if (anoEnQueNacio >= aInicial && anoEnQueNacio <= ano) 
  {
    alert("ok");
  }

}