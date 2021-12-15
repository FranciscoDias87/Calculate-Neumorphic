let outputSreen = document.getElementById('outputSreen');

funcion display(num){
 outputSreen.value += num;
}

function calculate(){
try{
 outputSreen.value = eval(outputSreen.value);
}
catch(){
 alert("Entrada Inválida");
}
}

function Clear(){
 outputSreen.value = "";
}

function Delete(){
 outputSreen.value = outputSreen.value.slice(0,-1);
}
