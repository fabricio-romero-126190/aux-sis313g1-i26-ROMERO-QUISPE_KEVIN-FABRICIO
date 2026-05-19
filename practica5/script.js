/*
alert("Hola otra vez desde JavaScript externo");

// EJERCICIO 4
function ejercicio4(){

    let numero = parseInt(prompt("Ingrese un numero"));

    let salida = "";

    for(let i = 1; i <= numero; i++){

        if(i % 3 == 0 && i % 5 == 0){
            salida += "FizzBuzz <br>";
        }
        else if(i % 3 == 0){
            salida += "Fizz <br>";
        }
        else if(i % 5 == 0){
            salida += "Buzz <br>";
        }
        else{
            salida += i + "<br>";
        }
    }

    document.getElementById("resultado").innerHTML = salida;
}

// EJERCICIO 5
function ejercicio5(){

    let numero1 = parseInt(prompt("Ingrese la cantidad de numeros"));

    let a = 0;
    let b = 1;

    let salida = a + "<br>" + b + "<br>";

    for(let i = 3; i <= numero1; i++){

        let suma = a + b;

        salida += suma + "<br>";

        a = b;
        b = suma;
    }

    document.getElementById("resultado").innerHTML = salida;
}

// EJERCICIO 6
function ejercicio6(){

    let numero2 = parseInt(prompt("Ingrese un numero"));

    let divisores = 0;

    for(let i = 1; i <= numero2; i++){

        if(numero2 % i == 0){
            divisores++;
        }
    }

    if(divisores == 2){
        document.getElementById("resultado").innerHTML =
        "El numero es primo";
    }
    else{
        document.getElementById("resultado").innerHTML =
        "El numero no es primo";
    }
}

// EJERCICIO 7
function ejercicio7(){

    let numero3 = parseInt(prompt("Ingrese un numero"));

    let salida = "";

    for(let i = 1; i <= 10; i++){

        salida += numero3 + " x " + i + " = " +
        (numero3 * i) + "<br>";
    }

    document.getElementById("resultado").innerHTML = salida;
}

// EJERCICIO 8
function ejercicio8(){

    let texto = prompt("Ingrese una palabra o texto");

    let contador = 0;

    for(let i = 0; i < texto.length; i++){

        let letra = texto[i].toLowerCase();

        if(
            letra == "a" ||
            letra == "e" ||
            letra == "i" ||
            letra == "o" ||
            letra == "u"
        ){
            contador++;
        }
    }

    document.getElementById("resultado").innerHTML =
    "La palabra tiene " + contador + " vocales";
}

// EJERCICIO 9
function ejercicio9(){

    let arreglo = [1, 10, 5, 6, 2];

    let mayor = arreglo[0];

    for(let i = 0; i < arreglo.length; i++){

        if(arreglo[i] > mayor){
            mayor = arreglo[i];
        }
    }

    document.getElementById("resultado").innerHTML =
    "El numero mayor del arreglo es: " + mayor;
}

// FUNCIONES EJERCICIO 10
function sumar(a,b){
    return a + b;
}

function restar(a,b){
    return a - b;
}

function multiplicar(a,b){
    return a * b;
}

function dividir(a,b){
    return a / b;
}

// EJERCICIO 10
function ejercicio10(){

    let num1 = parseFloat(prompt("Ingrese el primer numero"));

    let num2 = parseFloat(prompt("Ingrese el segundo numero"));

    let operacion = prompt(
        "Ingrese la operacion: sumar, restar, multiplicar o dividir"
    );

    let resultado = "";

    if(operacion == "sumar"){
        resultado = sumar(num1, num2);
    }
    else if(operacion == "restar"){
        resultado = restar(num1, num2);
    }
    else if(operacion == "multiplicar"){
        resultado = multiplicar(num1, num2);
    }
    else if(operacion == "dividir"){
        resultado = dividir(num1, num2);
    }
    else{
        resultado = "Operacion no valida";
    }

    document.getElementById("resultado").innerHTML =
    "Resultado: " + resultado;
}


*/
alert("Hola otra vez desde JavaScript externo");

// EJERCICIO 4
function ejercicio4(){

    let numero = parseInt(prompt("Ingrese un numero"));

    let salida = "";

    for(let i = 1; i <= numero; i++){

        if(i % 3 == 0 && i % 5 == 0){
            salida += "FizzBuzz <br>";
        }
        else if(i % 3 == 0){
            salida += "Fizz <br>";
        }
        else if(i % 5 == 0){
            salida += "Buzz <br>";
        }
        else{
            salida += i + "<br>";
        }
    }

    document.getElementById("resultado").innerHTML = salida;
}

// EJERCICIO 5
function ejercicio5(){

    let numero1 = parseInt(prompt("Ingrese la cantidad de numeros"));

    let a = 0;
    let b = 1;

    let salida = a + "<br>" + b + "<br>";

    for(let i = 3; i <= numero1; i++){

        let suma = a + b;

        salida += suma + "<br>";

        a = b;
        b = suma;
    }

    document.getElementById("resultado").innerHTML = salida;
}

// EJERCICIO 6
function ejercicio6(){

    let numero2 = parseInt(prompt("Ingrese un numero"));

    let divisores = 0;

    for(let i = 1; i <= numero2; i++){

        if(numero2 % i == 0){
            divisores++;
        }
    }

    if(divisores == 2){
        document.getElementById("resultado").innerHTML =
        "El numero es primo";
    }
    else{
        document.getElementById("resultado").innerHTML =
        "El numero no es primo";
    }
}

// EJERCICIO 7
function ejercicio7(){

    let numero3 = parseInt(prompt("Ingrese un numero"));

    let salida = "";

    for(let i = 1; i <= 10; i++){

        salida += numero3 + " x " + i + " = " +
        (numero3 * i) + "<br>";
    }

    document.getElementById("resultado").innerHTML = salida;
}

// EJERCICIO 8
function ejercicio8(){

    let texto = prompt("Ingrese una palabra o texto");

    let contador = 0;

    for(let i = 0; i < texto.length; i++){

        let letra = texto[i].toLowerCase();

        if(
            letra == "a" ||
            letra == "e" ||
            letra == "i" ||
            letra == "o" ||
            letra == "u"
        ){
            contador++;
        }
    }

    document.getElementById("resultado").innerHTML =
    "La palabra tiene " + contador + " vocales";
}

// EJERCICIO 9
function ejercicio9(){

    let arreglo = [1, 10, 5, 6, 2];

    let mayor = arreglo[0];

    for(let i = 0; i < arreglo.length; i++){

        if(arreglo[i] > mayor){
            mayor = arreglo[i];
        }
    }

    document.getElementById("resultado").innerHTML =
    "El numero mayor del arreglo es: " + mayor;
}

// FUNCIONES EJERCICIO 10
function sumar(a,b){
    return a + b;
}

function restar(a,b){
    return a - b;
}

function multiplicar(a,b){
    return a * b;
}

function dividir(a,b){
    return a / b;
}

// EJERCICIO 10
function ejercicio10(){

    let num1 = parseFloat(prompt("Ingrese el primer numero"));

    let num2 = parseFloat(prompt("Ingrese el segundo numero"));

    let operacion = prompt(
        "Ingrese la operacion: sumar, restar, multiplicar o dividir"
    );

    let resultado = "";

    if(operacion == "sumar"){
        resultado = sumar(num1, num2);
    }
    else if(operacion == "restar"){
        resultado = restar(num1, num2);
    }
    else if(operacion == "multiplicar"){
        resultado = multiplicar(num1, num2);
    }
    else if(operacion == "dividir"){
        resultado = dividir(num1, num2);
    }
    else{
        resultado = "Operacion no valida";
    }

    document.getElementById("resultado").innerHTML =
    "Resultado: " + resultado;
}