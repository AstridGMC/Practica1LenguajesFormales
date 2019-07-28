var textoEliminar = "texto";
var numero = 0;
console.log("hola mundo"); 

function eliminarTexto(){
    textoEliminar = textoVerificar.value;
        if (textoVerificar.value == textoEliminar){
            textoVerificar.value=="";
        }
}

function validarNumero(){
    var i = 0;
    for (i = 0; i< textoEliminar.length ; i++) {
        if(textoEliminar.charAt(i)=="."){
            numero =4;
            break;
        } else if(textoEliminar.charAt(i) > 0 || textoEliminar.charAt(i)!=".") {
            if(/[a-z]/.test(textoEliminar.charAt(0))){
                if(textoEliminar.charAt(i)<0 && textoEliminar.charAt(i) != "&" && textoEliminar.charAt(i) != "%" && textoEliminar.charAt(i) != "#"){
                    numero = 3;
                    console.log("2 jhkj nada"+ numero)
                }else if(textoEliminar.charAt(i) == "&" || textoEliminar.charAt(i) == "%"  || textoEliminar.charAt(i) == "#"){   
                numero=4;
                console.log("numero  no essss "+ numero );
                }
            }else if(textoEliminar.charAt(i) >= 0 ){
                numero= 1;
            } else if(textoEliminar.charAt(0) >= 0 && /[a-z]/.test(textoEliminar.charAt(i))){
                numero = 4;
            }
        }
    }
}

function validarIdentificador(){
    for (var i = 0; i< textoEliminar.length; i++) {
        if(/[a-z]/.test(textoEliminar.charAt(i)) || textoEliminar.charAt(i) != toString(1109) || "%" || "#"){
            if(textoEliminar.charAt(i) == "&" || textoEliminar.charAt(i) == "%"  || textoEliminar.charAt(i) == "#"  ){
                console.log("no es "+ numero );
                numero = 4;
                console.log("nada"+ numero)
            } else if(textoEliminar.charAt(i)<0 && textoEliminar.charAt(i) != "&" || textoEliminar.charAt(i) != "%"  || textoEliminar.charAt(i) != "#"){
                numero = 3;
                console.log("2nada"+ numero)
            } else if(textoEliminar.charAt(i) != "&" || textoEliminar.charAt(i) != "%"  || textoEliminar.charAt(i) != "#"){
                numero = 3;
                console.log("3nada"+ numero)
            }
        }
   }
}

function validarSimbolo(){
    for (var i = 0; i< textoEliminar.length; i++) {
        if(textoEliminar.charAt(i) == "&" ){
            numero = 5;
        } else if(textoEliminar.charAt(i) == "%"){
            numero = 5;
        }else if(textoEliminar.charAt(i) == "#"){
            
            numero = 5;
        }
       
    }
}

function validarExpresion(){
    
    validarIdentificador();
    validarSimbolo();
    validarNumero();

    if(numero == 1){
        alert (" numero " + textoEliminar);
    } 

    if(numero == 3){
        alert (" identificador " + textoEliminar);
    }
    
    if(numero == 4){
        alert (" error " + textoEliminar);
    }

    if(numero == 5){
        alert (" simbolo " + textoEliminar);
    } 
   
}

function agregarLista(){
    if(numero == 4){
        historialErrores.innerHTML = historialErrores.innerHTML + textoEliminar + "<br>"
    }else if(numero == 3 || 1||5){ 
        historial.innerHTML = "   "+historial.innerHTML + textoEliminar + "<br>";        
    }
}