let outputSreen = document.getElementById('output-screen');

function display(num){
    outputSreen.value += num;
}

function Calculate(){
    try{
    outputSreen.value = eval(outputSreen.value);
    }
    catch(err){
    alert("Entrada Inválida");
    }
}

function Clear(){
    outputSreen.value = "";
}

function Delete(){
    outputSreen.value = outputSreen.value.slice(0,-1);
}
