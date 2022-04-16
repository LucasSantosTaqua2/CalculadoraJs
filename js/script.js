function insert(num){
    
    var numero = document.getElementById('result').innerText;
    document.getElementById('result').innerText = numero + num;
}

function clean(){
    document.getElementById('result').innerText = "";
}

function back(){
    var result = document.getElementById('result').innerText;
    document.getElementById('result').innerText = result.substring(0, result.length -1)

}

function calc(){
    var result = document.getElementById('result').innerText;
    if(result){
        document.getElementById('result').innerText = eval(result)
    }
    else{
        var result = document.getElementById('result').innerText = "Nada para calcular!";
    }
}