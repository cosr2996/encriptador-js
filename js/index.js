'use strict'
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
function encriptarTexto(){
    var message = document.getElementById("message").value;
    var cadena=[];

    for(var i=0 ; i<=message.length-1 ;i++){
        
        if(message.charAt(i) == 'a'){
               cadena.push('ai');
        }
        else if(message.charAt(i) == 'e'){
               cadena.push('enter');
        }
        else if(message.charAt(i) == 'i'){
               cadena.push('imes');
        }
        else if(message.charAt(i) == 'o'){
               cadena.push('ober');
        }
        else if(message.charAt(i) == 'u'){
               cadena.push('ufat');
        }else{
            cadena.push(message.charAt(i));
        }}
        cadena = cadena.join('')

        result.style.display ="block";
        image.style.display ="none";
        result.value=cadena;
        
    }

    //desencripta una cadena de texto encriptada
     function desencriptarTexto(){

     }



     //copia el texto en portapapeles
     async function copyText(){
        
        try{
           await navigator.clipboard.writeText(result.value)   
        }
        catch(err){
            console.log(err)
        }
        
        

     }

   
    
   