function leng(){
var numDiv = 1000;
var numero = document.getElementById("SKK").value;


for ( i = 1; i<= numDiv; i++){
    const operacion = (numero %  i )
    console.log(operacion)
     if (operacion == 0){
 document.write("0")
 document.write("__")
    }
}
}

