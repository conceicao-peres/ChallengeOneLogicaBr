
/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   

var caixaTexto = document.querySelector("#input-texto");
var text = caixaTexto.placeholder;
alert(text)
*/

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
copyButton.addEventListener("click", copiar);



/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/