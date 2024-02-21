// FUNCIONES PRINCIPALES 
const letras = [
    ["e","i","a","o","u"],
    ["enter","imes","ai","ober","ufat"]
];

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
         for (let index = 0; index < letras[0].length; index++) {
            texto = texto.replaceAll(letras[0][index],letras[1][index]);
         }
         break;
     case 0:
        for (let index = 0; index < letras[0].length; index++) {
            texto = texto.replaceAll(letras[1][index],letras[0][index]);
         }
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