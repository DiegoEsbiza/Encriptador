var textoIngresado = document.querySelector("#input-texto");
var botonEncriptar = document.querySelector("#btn-encriptar");
var botonDesencriptar = document.querySelector("#btn-desencriptar");
var cajaMensaje = document.querySelector("#msg");
var botonCopiar = document.querySelector("#btn-copy");

//validación de texto, permitienod unicamente el uso de minusculas
function validar(mensaje) {
  var caracteresAdmitidos = /^[a-z ]+$/g;
  mensaje = textoIngresado.value;
  if (mensaje.match(caracteresAdmitidos)) {
  } else {
    alert("Caracteres inválidos. ¡Ingrese SOLO minusuclas!");
    textoIngresado.value = "";
  }
}

//capturar el contenido del input texto para luego encriptarlo y mostrarlo en el input mensaje
botonEncriptar.addEventListener("click", function (event) {
  event.preventDefault();
  validar();
  texto = textoIngresado.value;
  textoEncriptado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  cajaMensaje.value = textoEncriptado;
  textoIngresado.value = "";
});
//desencriptar el mensaje capturado dentro del input texto
botonDesencriptar.addEventListener("click", function (event) {
  event.preventDefault();
  validar();
  texto = textoIngresado.value;
  textoEncriptado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  cajaMensaje.value = textoEncriptado;
  textoIngresado.value = "";
});

botonDesencriptar.addEventListener("click", function (event) {
  event.preventDefault();
  validar();
  texto = textoIngresado.value;
  textoEncriptado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  cajaMensaje.value = textoEncriptado;
  textoIngresado.value = "";
});

botonCopiar.addEventListener("click", function (event) {
  event.preventDefault();
  cajaMensaje.select();
  document.execCommand('cut');

  alert ("texto copiado")
  
});