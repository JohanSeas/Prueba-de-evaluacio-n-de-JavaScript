var calculadora = {
  insertar0: function() {
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
  },
  insertar1: function() {
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
  },
  insertar2: function() {
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
  },
  insertar3: function() {
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
  },
  insertar4: function() {
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
  },
  insertar5: function() {
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
  },
  insertar6: function() {
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
  },
  insertar7: function() {
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
  },
  insertar8: function() {
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
  },
  insertar9: function() {
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
  },
  insertarPunto: function() {
    var num1=document.getElementById('display').innerHTML;
    if (num1.length<=8,num1.indexOf(".",0)<1) {
      if(num1 == '0'){
        document.getElementById('display').innerHTML="0."
      }else{
        var num2='.'; var res = num1.concat(num2);
        document.getElementById('display').innerHTML=res;
      }
    }
  },
  insertarSignoNegativo: function() {
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
  },
  pressOn: function() {
    document.getElementById('display').innerHTML=0
    sessionStorage.setItem("valor", "")
    sessionStorage.setItem("signo", "")
    sessionStorage.setItem("valor2", "")
    sessionStorage.setItem("opActive", "")
  },
  sumar: function() {
    var valor2 = document.getElementById("display").innerHTML;
    sessionStorage.setItem("valor2", valor2)
    sessionStorage.setItem("signo", "+")
    sessionStorage.setItem("opActive", "yes")
    var valor1 = sessionStorage.getItem("valor");
    var valor2 = sessionStorage.getItem("valor2");
    var res =  parseFloat(valor1) + parseFloat(valor2);
    document.getElementById('display').innerHTML = res;
    sessionStorage.setItem("valor", res)
  },
  restar: function() {
    var valor2 = document.getElementById("display").innerHTML;
    sessionStorage.setItem("valor2", valor2)
    sessionStorage.setItem("signo", "-")
    sessionStorage.setItem("opActive", "yes")
    var valor1 = sessionStorage.getItem("valor");
    var valor2 = sessionStorage.getItem("valor2");
    var res =  parseFloat(valor1) - parseFloat(valor2);
    document.getElementById('display').innerHTML = res;
    sessionStorage.setItem("valor", res)
  },
  multiplicar: function() {
    var valor2 = document.getElementById("display").innerHTML;
    sessionStorage.setItem("valor2", valor2)
    sessionStorage.setItem("signo", "*")
    sessionStorage.setItem("opActive", "yes")
    var valor1 = sessionStorage.getItem("valor");
    var valor2 = sessionStorage.getItem("valor2");
    var res =  parseFloat(valor1) * parseFloat(valor2);
    document.getElementById('display').innerHTML = res;
    sessionStorage.setItem("valor", res)
  },
  dividir: function() {
    var valor2 = document.getElementById("display").innerHTML;
    sessionStorage.setItem("valor2", valor2)
    sessionStorage.setItem("signo", "/")
    sessionStorage.setItem("opActive", "yes")
    var valor1 = sessionStorage.getItem("valor");
    var valor2 = sessionStorage.getItem("valor2");
    var res =  parseFloat(valor1) / parseFloat(valor2);
    document.getElementById('display').innerHTML = res;
    sessionStorage.setItem("valor", res)
  },
  btnSumar: function(){
    if (sessionStorage.getItem("signo")=="+") {
      calculadora.sumar()
    } else if (sessionStorage.getItem("signo")=="-") {
      calculadora.restar()
    } else if (sessionStorage.getItem("signo")=="*") {
      calculadora.multiplicar()
    } else if (sessionStorage.getItem("signo")=="/") {
      calculadora.dividir()
    } else {
      var valor = document.getElementById("display").innerHTML;
      sessionStorage.setItem("valor", valor)
      sessionStorage.setItem("signo", "+")
      sessionStorage.setItem("opActive", "yes")
      document.getElementById('display').innerHTML=""
    }
    sessionStorage.setItem("signo", "+")
  },
  btnRestar: function(){
    if (sessionStorage.getItem("signo")=="+") {
      calculadora.sumar()
    } else if (sessionStorage.getItem("signo")=="-") {
      calculadora.restar()
    } else if (sessionStorage.getItem("signo")=="*") {
      calculadora.multiplicar()
    } else if (sessionStorage.getItem("signo")=="/") {
      calculadora.dividir()
    } else {
      var valor = document.getElementById("display").innerHTML;
      sessionStorage.setItem("valor", valor)
      sessionStorage.setItem("signo", "-")
      sessionStorage.setItem("opActive", "yes")
      document.getElementById('display').innerHTML=""
    }
    sessionStorage.setItem("signo", "-")
  },
  btnMultiplicar: function(){
    if (sessionStorage.getItem("signo")=="+") {
      calculadora.sumar()
    } else if (sessionStorage.getItem("signo")=="-") {
      calculadora.restar()
    } else if (sessionStorage.getItem("signo")=="*") {
      calculadora.multiplicar()
    } else if (sessionStorage.getItem("signo")=="/") {
      calculadora.dividir()
    } else {
      var valor = document.getElementById("display").innerHTML;
      sessionStorage.setItem("valor", valor)
      sessionStorage.setItem("signo", "*")
      sessionStorage.setItem("opActive", "yes")
      document.getElementById('display').innerHTML=""
    }
    sessionStorage.setItem("signo", "*")
  },
  btnDividir: function(){
    if (sessionStorage.getItem("signo")=="+") {
      calculadora.sumar()
    } else if (sessionStorage.getItem("signo")=="-") {
      calculadora.restar()
    } else if (sessionStorage.getItem("signo")=="*") {
      calculadora.multiplicar()
    } else if (sessionStorage.getItem("signo")=="/") {
      calculadora.dividir()
    } else {
      var valor = document.getElementById("display").innerHTML;
      sessionStorage.setItem("valor", valor)
      sessionStorage.setItem("signo", "/")
      sessionStorage.setItem("opActive", "yes")
      document.getElementById('display').innerHTML=""
    }
    sessionStorage.setItem("signo", "/")
  },
  calc: function() {
    var valor2 = document.getElementById("display").innerHTML;
    sessionStorage.setItem("valor2", valor2)
    if (sessionStorage.getItem("signo")=="+") {
      calculadora.sumar()
    }else if (sessionStorage.getItem("signo")=="-") {
      calculadora.restar()
    }else if (sessionStorage.getItem("signo")=="*") {
      calculadora.multiplicar()
    }else if (sessionStorage.getItem("signo")=="/") {
      calculadora.dividir()
    }else {
      document.getElementById('display').innerHTML="error"
    }
    sessionStorage.setItem("valor", "0")
    sessionStorage.setItem("signo", "=")
    sessionStorage.setItem("valor2", "")
    sessionStorage.setItem("opActive", "yes")
  }
}

document.getElementById('on').onclick = calculadora.pressOn
document.getElementById('0').onclick = calculadora.insertar0
document.getElementById('1').onclick = calculadora.insertar1
document.getElementById('2').onclick = calculadora.insertar2
document.getElementById('3').onclick = calculadora.insertar3
document.getElementById('4').onclick = calculadora.insertar4
document.getElementById('5').onclick = calculadora.insertar5
document.getElementById('6').onclick = calculadora.insertar6
document.getElementById('7').onclick = calculadora.insertar7
document.getElementById('8').onclick = calculadora.insertar8
document.getElementById('9').onclick = calculadora.insertar9
document.getElementById('punto').onclick = calculadora.insertarPunto
document.getElementById('sign').onclick = calculadora.insertarSignoNegativo
document.getElementById('igual').onclick = calculadora.calc
document.getElementById('mas').onclick = calculadora.btnSumar
document.getElementById('menos').onclick = calculadora.btnRestar
document.getElementById('por').onclick = calculadora.btnMultiplicar
document.getElementById('dividido').onclick = calculadora.btnDividir

calculadora.pressOn()
