var input = document.querySelector("#input-texto")
var button = document.querySelector("#btn-cripto")
var buttonDecripta = document.querySelector("#btn-descripto")
var buttonVal = document.querySelector("#msg")
var copyButton = document.querySelector("#btn-copy")

function cripto(){
    var menssagem = input.value
    var textoCriptografado = menssagem.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi,"ai").replace(/o/gi,"ober").replace(/u/gi, "ufat") 
    buttonVal.value = textoCriptografado
}

function decripta(){
    var msgCripto = input.value
    var textoDecripto = msgCripto.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ober/gi,"o").replace(/ufat/gi, "u")
    alert(textoDecripto)
}

function copiar(){
    var texto = buttonVal
    texto.select()
    document.execCommand("copy")
}

button.onclick = cripto
buttonDecripta.onclick = decripta
copyButton.addEventListener("click", copiar)