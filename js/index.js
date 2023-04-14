'use strict'
window.addEventListener('load', function() {
       //boton de encriptar
var encriptar = document.getElementById('btn-en');
encriptar.addEventListener("click", encriptarTexto);
//boton de desencriptar
var desencriptar = document.getElementById('btn-des');
desencriptar.addEventListener("click", desencriptarTexto);
// text area de entrada
var result = document.getElementById('message-result');
//imgagen de resultado
var image = document.getElementById('vacio');
//booton copiar
var copy = document.getElementById('copiar');
copy.addEventListener("click", copyText);


//eccnripta una cadena de texto 
function encriptarTexto() {
       var message = document.getElementById("message").value;
       var cadena = [];

       for (var i = 0; i <= message.length - 1; i++) {

              if (message.charAt(i) == 'a') {
                     cadena.push('ai');
              }
              else if (message.charAt(i) == 'e') {
                     cadena.push('enter');
              }
              else if (message.charAt(i) == 'i') {
                     cadena.push('imes');
              }
              else if (message.charAt(i) == 'o') {
                     cadena.push('ober');
              }
              else if (message.charAt(i) == 'u') {
                     cadena.push('ufat');
              } else {
                     cadena.push(message.charAt(i));
              }
       }
       var texto = cadena.join('')

       result.style.display = "block";
       image.style.display = "none";
       result.value = texto;

}

//desencripta una cadena de texto encriptada
function desencriptarTexto() {
       var texto = document.getElementById("message").value;

       var texto2 = texto.replaceAll("ober", 'o');
       var texto3 = texto2.replaceAll("enter", "e");
       var texto4 = texto3.replaceAll("ai", "a");
       var texto5 = texto4.replaceAll("ufat", "u");
       var texto6 = texto5.replaceAll("imes", "i");


       result.style.display = "block";
       image.style.display = "none";
       result.value = texto6;

}

//copia el texto en portapapeles
async function copyText() {
       try {
              await navigator.clipboard.writeText(result.value)
       }
       catch (err) {
              console.log(err)
       }
}
   });

