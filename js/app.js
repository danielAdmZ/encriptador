
// console.log(resultado);
// FUNCIONES PRINCIPALES 
function encriptar(){
    hiddenT();
    let palabra = document.getElementById('text-encrip').value;
    let resultado = newStr(palabra, 1);
    cambiarTexto(resultado);
}
function desencriptar(){
    hiddenT();
    let palabra = document.getElementById('text-encrip').value;
    let resultado = newStr(palabra, 0);
    cambiarTexto(resultado);
}
function copiarTexto(){
    let texto = document.getElementById('text').innerHTML;
    navigator.clipboard.writeText(texto);
}

// FUNCIONES PARA COMPLEMENTAR 

function newStr(texto, mode){
    switch (mode) {
     case 1:
         texto=texto.toLowerCase();
         texto = texto.replaceAll("e", 'enter');
         texto = texto.replaceAll("i", 'imes');
         texto =texto.replaceAll("a",'ai');
         texto= texto.replaceAll("o", 'ober');
         texto= texto.replaceAll("u", 'ufat');
         break;
     case 0:
         texto = texto.replaceAll("enter", 'e');
         texto = texto.replaceAll("imes", 'i');
         texto =texto.replaceAll("ai",'a');
         texto= texto.replaceAll("ober", 'o');
         texto= texto.replaceAll("ufat", 'u');
         break;
     default:
         break;
    }
     
      
     return texto
 }

function hiddenT() {
    let hiden= document.querySelectorAll(".copy");
    hiden.item(0).setAttribute("id","invisible")
    hiden.item(1).setAttribute("id","invisible");
    hiden = document.querySelector(".copy-button");
    hiden.setAttribute("id", "visible");
}

function cambiarTexto(texto){
    let h4T = document.getElementById('text');
    h4T.innerHTML = texto;
}