var input = document.querySelector("#input-texto")
input.focus()
var button = document.querySelector("#btn-cripto")
var buttonDecripta = document.querySelector("#btn-descripto")
var buttonVal = document.querySelector("#msg")
var copyButton = document.querySelector("#btn-copy")

function limpaTela(){
    input.value = ""
    input.focus() 
}

function cripto(){
    var texto = input.value
    var textoDecripto = texto.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi,"ai").replace(/o/gi,"ober").replace(/u/gi, "ufat")
    buttonVal.value = textoDecripto
    input.value = ""
}

function validarMaiuscula(){
    var i=0
    var contator = 0
    var caracter = ""
    var texto = input.value
    if(texto == ""){
        alert("Diigte um texto para ser criptografado")
        input.focus()
    }else{
        while (i <= texto.length - 1){
            caracter = texto.charAt(i)
            if ((caracter == caracter.toUpperCase() && caracter != " ") || caracter == caracter.match(/[áâãàéêíóõôúç]/)) {
                contator++
            }
            i++
        }
    }
    if (contator > 0){
        alert("Digite apenas letras minúscula, sem acentuação")
        limpaTela()
    }else(
        cripto()
    )
 }

function decripta(){
    var msgCripto = input.value
    if(msgCripto != "" ){
        var textoDecripto = msgCripto.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ober/gi,"o").replace(/ufat/gi, "u")
        alert(textoDecripto)
        limpaTela()

    }else{
        alert("Diigte um texto para ser descriptografado")
        input.focus()
    }
}

function copiar(){
    var texto = buttonVal
    texto.select()
    document.execCommand("copy")
    texto.value = ""
}

button.onclick = validarMaiuscula
buttonDecripta.onclick = decripta
copyButton.addEventListener("click", copiar)