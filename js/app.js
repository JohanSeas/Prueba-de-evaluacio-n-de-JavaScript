function insertar0() {
  var num1=document.getElementById('display').innerHTML;
  var opActiva=sessionStorage.getItem("opActive");
  if (num1.length<=7) {
    if(num1 == '0'){
      document.getElementById('display').innerHTML=0
    }else if(num1 != "0"&&opActiva=="yes"){
      document.getElementById('display').innerHTML=0;
      sessionStorage.setItem("opActive", "no")
    }else{
      var num2='0'; var res = num1.concat(num2);
      document.getElementById('display').innerHTML=res;
    }
  }
}
function insertar1() {
  var num1=document.getElementById('display').innerHTML;
  var opActiva=sessionStorage.getItem("opActive");
  if (num1.length<=7) {
    if(num1 == '0'){
      document.getElementById('display').innerHTML=1
    }else if(num1 != "0"&&opActiva=="yes"){
      document.getElementById('display').innerHTML=1;
      sessionStorage.setItem("opActive", "no")
    }else{
      var num2='1'; var res = num1.concat(num2);
      document.getElementById('display').innerHTML=res;
    }
  }
}
function insertar2() {
  var num1=document.getElementById('display').innerHTML;
  var opActiva=sessionStorage.getItem("opActive");
  if (num1.length<=7) {
    if(num1 == '0'){
      document.getElementById('display').innerHTML=2
    }else if(num1 != "0"&&opActiva=="yes"){
      document.getElementById('display').innerHTML=2;
      sessionStorage.setItem("opActive", "no")
    }else{
      var num2='2'; var res = num1.concat(num2);
      document.getElementById('display').innerHTML=res;
    }
  }
}
function insertar3() {
  var num1=document.getElementById('display').innerHTML;
  var opActiva=sessionStorage.getItem("opActive");
  if (num1.length<=7) {
    if(num1 == '0'){
      document.getElementById('display').innerHTML=3
    }else if(num1 != "0"&&opActiva=="yes"){
      document.getElementById('display').innerHTML=3;
      sessionStorage.setItem("opActive", "no")
    }else{
      var num2='3'; var res = num1.concat(num2);
      document.getElementById('display').innerHTML=res;
    }
  }
}
function insertar4() {
  var num1=document.getElementById('display').innerHTML;
  var opActiva=sessionStorage.getItem("opActive");
  if (num1.length<=7) {
    if(num1 == '0'){
      document.getElementById('display').innerHTML=4
    }else if(num1 != "0"&&opActiva=="yes"){
      document.getElementById('display').innerHTML=4;
      sessionStorage.setItem("opActive", "no")
    }else{
      var num2='4'; var res = num1.concat(num2);
      document.getElementById('display').innerHTML=res;
    }
  }
}
function insertar5() {
  var num1=document.getElementById('display').innerHTML;
  var opActiva=sessionStorage.getItem("opActive");
  if (num1.length<=7) {
    if(num1 == '0'){
      document.getElementById('display').innerHTML=5
    }else if(num1 != "0"&&opActiva=="yes"){
      document.getElementById('display').innerHTML=5;
      sessionStorage.setItem("opActive", "no")
    }else{
      var num2='5'; var res = num1.concat(num2);
      document.getElementById('display').innerHTML=res;
    }
  }
}
function insertar6() {
  var num1=document.getElementById('display').innerHTML;
  var opActiva=sessionStorage.getItem("opActive");
  if (num1.length<=7) {
    if(num1 == '0'){
      document.getElementById('display').innerHTML=6
    }else if(num1 != "0"&&opActiva=="yes"){
      document.getElementById('display').innerHTML=6;
      sessionStorage.setItem("opActive", "no")
    }else{
      var num2='6'; var res = num1.concat(num2);
      document.getElementById('display').innerHTML=res;
    }
  }
}
function insertar7() {
  var num1=document.getElementById('display').innerHTML;
  var opActiva=sessionStorage.getItem("opActive");
  if (num1.length<=7) {
    if(num1 == '0'){
      document.getElementById('display').innerHTML=7
    }else if(num1 != "0"&&opActiva=="yes"){
      document.getElementById('display').innerHTML=7;
      sessionStorage.setItem("opActive", "no")
    }else{
      var num2='7'; var res = num1.concat(num2);
      document.getElementById('display').innerHTML=res;
    }
  }
}
function insertar8() {
  var num1=document.getElementById('display').innerHTML;
  var opActiva=sessionStorage.getItem("opActive");
  if (num1.length<=7) {
    if(num1 == '0'){
      document.getElementById('display').innerHTML=8
    }else if(num1 != "0"&&opActiva=="yes"){
      document.getElementById('display').innerHTML=8;
      sessionStorage.setItem("opActive", "no")
    }else{
      var num2='8'; var res = num1.concat(num2);
      document.getElementById('display').innerHTML=res;
    }
  }
}
function insertar9() {
  var num1=document.getElementById('display').innerHTML;
  var opActiva=sessionStorage.getItem("opActive");
  if (num1.length<=7) {
    if(num1 == '0'){
      document.getElementById('display').innerHTML=9
    }else if(num1 != "0"&&opActiva=="yes"){
      document.getElementById('display').innerHTML=9;
      sessionStorage.setItem("opActive", "no")
    }else{
      var num2='9'; var res = num1.concat(num2);
      document.getElementById('display').innerHTML=res;
    }
  }
}
function insertarPunto() {
  var num1=document.getElementById('display').innerHTML;
  if (num1.length<=8,num1.indexOf(".",0)<1) {
    if(num1 == '0'){
      document.getElementById('display').innerHTML="0."
    }else{
      var num2='.'; var res = num1.concat(num2);
      document.getElementById('display').innerHTML=res;
    }
  }
}
function insertarSignoNegativo() {
  var num1=document.getElementById('display').innerHTML;
  if (num1.length<=7,num1.indexOf("-",0)<0) {
    if(num1 == '0'){
      document.getElementById('display').innerHTML=0
    }else{
      var num2='-'; var res = num2.concat(num1);
      document.getElementById('display').innerHTML=res;
    }
  }else{
    if(num1 == '0'){
      document.getElementById('display').innerHTML=0
    }else{
      var num2= -(document.getElementById('display').innerHTML);
      document.getElementById('display').innerHTML=num2;
    }
  }
}
function pressOn() {
  document.getElementById('display').innerHTML=0
  sessionStorage.setItem("valor", "")
  sessionStorage.setItem("signo", "")
  sessionStorage.setItem("valor2", "")
  sessionStorage.setItem("opActive", "")
}

function btnSumar(){
  if (sessionStorage.getItem("valor")>0) {
    var valor2 = document.getElementById("display").innerHTML;
    sessionStorage.setItem("valor2", valor2)
    sessionStorage.setItem("signo", "+")
    sessionStorage.setItem("opActive", "yes")
    var valor1 = sessionStorage.getItem("valor");
    var valor2 = sessionStorage.getItem("valor2");
    var res =  parseFloat(valor1) + parseFloat(valor2);
    document.getElementById('display').innerHTML = res;
    sessionStorage.setItem("valor", res)
  } else {
    var valor = document.getElementById("display").innerHTML;
    sessionStorage.setItem("valor", valor)
    sessionStorage.setItem("signo", "+")
    sessionStorage.setItem("opActive", "yes")
    document.getElementById('display').innerHTML=""
  }
}

function btnRestar(){
  if (sessionStorage.getItem("valor")>0) {
    var valor2 = document.getElementById("display").innerHTML;
    sessionStorage.setItem("valor2", valor2)
    sessionStorage.setItem("signo", "-")
    sessionStorage.setItem("opActive", "yes")
    var valor1 = sessionStorage.getItem("valor");
    var valor2 = sessionStorage.getItem("valor2");
    var res =  parseFloat(valor1) - parseFloat(valor2);
    document.getElementById('display').innerHTML = res;
    sessionStorage.setItem("valor", res)
  } else {
    var valor = document.getElementById("display").innerHTML;
    sessionStorage.setItem("valor", valor)
    sessionStorage.setItem("signo", "-")
    sessionStorage.setItem("opActive", "yes")
    document.getElementById('display').innerHTML=""
  }
}

function calc() {
  var valor2 = document.getElementById("display").innerHTML;
  sessionStorage.setItem("valor2", valor2)
  if (sessionStorage.getItem("signo")=="+") {
    var valor1 = sessionStorage.getItem("valor");
    var valor2 = sessionStorage.getItem("valor2");
    var res =  parseFloat(valor1) + parseFloat(valor2);
    document.getElementById('display').innerHTML = res;
    sessionStorage.setItem("valor", "0")
    sessionStorage.setItem("signo", "=")
    sessionStorage.setItem("valor2", "")
    sessionStorage.setItem("opActive", "yes")
  }else if (sessionStorage.getItem("signo")=="-") {
    var valor1 = sessionStorage.getItem("valor");
    var valor2 = sessionStorage.getItem("valor2");
    var res =  parseFloat(valor1) - parseFloat(valor2);
    document.getElementById('display').innerHTML = res;
    sessionStorage.setItem("valor", "0")
    sessionStorage.setItem("signo", "=")
    sessionStorage.setItem("valor2", "")
    sessionStorage.setItem("opActive", "yes")
  }else {
    alert("no es suma")
  }
}

document.getElementById('on').onclick = pressOn
document.getElementById('0').onclick = insertar0
document.getElementById('1').onclick = insertar1
document.getElementById('2').onclick = insertar2
document.getElementById('3').onclick = insertar3
document.getElementById('4').onclick = insertar4
document.getElementById('5').onclick = insertar5
document.getElementById('6').onclick = insertar6
document.getElementById('7').onclick = insertar7
document.getElementById('8').onclick = insertar8
document.getElementById('9').onclick = insertar9
document.getElementById('punto').onclick = insertarPunto
document.getElementById('sign').onclick = insertarSignoNegativo
document.getElementById('igual').onclick = calc
document.getElementById('mas').onclick = btnSumar
document.getElementById('menos').onclick = btnRestar
