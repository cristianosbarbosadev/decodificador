const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");


function btnEncriptar() {
    const textoEncriptado = encriptar (inputTexto.value);
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage="none"
}

function encriptar (stringEncriptada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
    

}


function btnDesencriptar() {
    const textoEncriptado = desencriptar (inputTexto.value);
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage="none"
}

function desencriptar (stringDesencriptada) {
    let matrizCodigoDencriptada = [["ai", "a"], ["enter", "e"], ["imes", "i"], ["ober", "o"], ["ufat", "u"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i < matrizCodigoDencriptada.length; i++) {
        if(stringDesencriptada.includes(matrizCodigoDencriptada[i][0])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigoDencriptada[i][0], matrizCodigoDencriptada[i][1])
        }
    }
    return stringDesencriptada
}

function btnCopiar(){
    var copiar = document.getElementById("criptografado")
    copiar.select();
    copiar.setSelectionRange(0,99999999);
    document.execCommand("copy");
    
    

    
}





