'use strict'

//boton de encriptar
var btn_encriptar = document.getElementById('btn-en');
btn_encriptar.addEventListener("click", encriptarTexto);
//boton de desencriptar
var btn_desencriptar = document.getElementById('btn-des');
btn_desencriptar.addEventListener("click", desencriptarTexto);
// text area de entrada
var area_result = document.getElementById('message-result');
//imgagen de resultado
var image = document.getElementById('vacio');
//booton copiar
var btn_copy = document.getElementById('copiar');
btn_copy.addEventListener("click", copyText);

var logo = document.getElementById('logo');
logo.addEventListener('click', clear);


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

       area_result.style.display = "block";
       btn_copy.style.display = "block";
       image.style.display = "none";
       area_result.value = texto;


       if (screen.width < 923) {
              area_result.style.height = `${area_result.scrollHeight}px`
       }

}

//desencripta una cadena de texto encriptada
function desencriptarTexto() {

       var texto = document.getElementById("message").value;

       texto = texto.replaceAll("ober", 'o');
       texto = texto.replaceAll("enter", "e");
       texto = texto.replaceAll("ai", "a");
       texto = texto.replaceAll("ufat", "u");
       texto = texto.replaceAll("imes", "i");

       area_result.style.display = "block";
       image.style.display = "none";
       btn_copy.style.display = "block";
       area_result.value = texto;

       if (screen.width < 923) {
              area_result.style.height = `${area_result.scrollHeight}px`
       }

}

//copia el texto en portapapeles
async function copyText() {
       try {
              await navigator.clipboard.writeText(area_result.value)
       }
       catch (err) {
              console.log(err)
       }
}

function clear() {
       area_result.value = "";
       document.getElementById("message").value = "";

       if (screen.width <= 925) {
              btn_copy.style.display = "none";
              area_result.style.height = `100px`
       }

}

