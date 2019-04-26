var texto = document.getElementById("nacido");
var eject = document.getElementById("boton");

eject.addEventListener("click", calc);

function calc()
{
  var edad = parseInt(texto.value);
  var f = new Date();
  var ano = f.getFullYear();
  var anoEnQueNacio = ano - edad;
  // console.log(anoEnQueNacio);
  if (anoEnQueNacio >= 1896 && anoEnQueNacio <= ano) 
  {
    alert("ok");
  }

}