'use strict'

var encriptar = document.getElementById('btn-en');
encriptar.addEventListener("click", encriptarTexto);

var desencriptar = document.getElementById('btn-des');
desencriptar.addEventListener("click", desencriptarTexto);




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
        console.log(cadena);
    }


    // function desencriptarTexto(){
    //     var message = document.getElementById("message").value;
    // var cadena=[];

    // for(var i=0 ; i<=message.length-1 ;i++){
        
    //     if(message.charAt(i) == 'ai'){
    //            cadena.push('a');
    //     }
    //     else if(message.charAt(i) == 'enter'){
    //            cadena.push('e');
    //     }
    //     else if(message.charAt(i) == 'imes'){
    //            cadena.push('i');
    //     }
    //     else if(message.charAt(i) == 'ober'){
    //            cadena.push('o');
    //     }
    //     else if(message.charAt(i) == 'ufat'){
    //            cadena.push('u');
    //     }else{
    //         cadena.push(message.charAt(i));
    //     }}
    //     cadena = cadena.join('')
    //     console.log(cadena);
    // }

   
    
