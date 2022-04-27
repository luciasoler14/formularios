function form1() {
    var num = document.formu1.valor.value;
    var nombres = [];


    for(x=0; x<num; x++) {
        var nombre = prompt('Ingrese el nombre ' +(x+1) + ':');
        if (nombre === null) {
            break;
        } else {
            nombres.push(nombre);
        }
    }

    for(x=0; x<nombres.length; x++) {
        document.getElementById("resultado1").innerHTML += `<li> ${x+1}. ${nombres[x]} <br></li>`;
    }
}

/************************************************/

function form2() {
    var opcion = document.formu2.paridad.value;
    var resultado = [];

    if(opcion=="par"){
        for(x=1; x<=100; x++) {
            if(x%2==0 && x%5==0) {
                resultado.push(x);
            }
        }
    } else {
        for(x=1; x<=100; x++) {
            if(x%2!=0 && x%5==0) {
                resultado.push(x);
            }  
        }   
    }

    document.getElementById("resultado2").innerHTML += `<li> Valores: ${resultado.join(" ")} <br></li>`;
}

/************************************************/

function form3() {
    var operacion = document.formu3.operacion.value;
    var x1 = parseInt(document.formu3.valor1.value);
    var x2 = parseInt(document.formu3.valor2.value);

    if(operacion=="1") {
        var operacion = "Suma";
        var resultado = x1+x2;
    } else if(operacion=="2") {
        var operacion = "Resta";
        var resultado = x1-x2;
    } else {
        var operacion = "Multiplicación";
        var resultado = x1*x2;
    }

    document.getElementById("resultado3").innerHTML += `<li> El resultado de la operación: ${operacion} <br> entre los números ${x1} y ${x2} es igual a: ${resultado} <br></li>`;
}

/************************************************/