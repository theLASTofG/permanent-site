function login(){

let user=document.getElementById("user").value

localStorage.setItem("usuario",user)

window.location="index.html"

}

function executar(){

let codigo=document.getElementById("editorCode").value

let consoleSaida=""

const log=(msg)=>{

consoleSaida+=msg+"\n"

}

try{

eval(codigo.replaceAll("console.log","log"))

}catch(e){

consoleSaida=e.message

}

document.getElementById("console").innerText=consoleSaida

}
let pontos = 0

function responder(botao, correta){

let botoes = botao.parentElement.querySelectorAll("button")

botoes.forEach(b=>{

b.disabled=true

})

if(correta){

botao.style.background="#22c55e"
pontos++

}else{

botao.style.background="#ef4444"

}

}

function resultadoQuiz(){

document.getElementById("resultadoQuiz").innerText =
"Você acertou " + pontos + " de 10 perguntas."

}