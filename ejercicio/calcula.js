var botonClick = document.getElementById("boton");
var tNacido = document.getElementById("nacido");
botonClick.addEventListener("click", calculaEdad);

function calculaEdad()
{
  var base = 2080;
  var vNacido = parseInt(tNacido.value);
	var edadFinal = base - vNacido;
	// document.write(edadFinal);
  alert("Para entonces, tendrás " + edadFinal + " Años.");
// console.log(edadFinal);
}
