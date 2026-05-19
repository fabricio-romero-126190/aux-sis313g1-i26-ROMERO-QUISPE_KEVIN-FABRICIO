alert("hola otra vez de la pregunta 1 forma2");
//para el ejercicio 4 inicio
let numero = parseInt(prompt("Ingrese un numero"));
for(let i = 1; i <= numero; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    }
    else if(i % 3 == 0){
        console.log("Fizz");
    }
    else if(i % 5 == 0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}
//ejercicio final 4
//ejercicio 5 inicio
let numero1 = parseInt(prompt("Ingrese la cantidad de numeros"));
let a = 0;
let b = 1;
for(let i = 0; i < numero1; i++){
    let suma = a + b;
    console.log(suma);
    a = b;
    b = suma;
}
//ejercicio 5 final
//ejercicio 6 inicio
let numero2=parseInt(prompt("ingrese un numero para ver si es primo o no"));
let c=0;
for(let i=1;i<numero2;i++){
    if(numero2%i===0){
        c++;
         console.log("este numero tiene"+c+"divisores");
    }
    else if(c===2){
        console.log("este numero tiene mas de dos divisores por lo tanto no es primo");
    }
    else{
        console.log("este numero no tiene mas de dos divisores por lo tanto sigue siendo primo");
    }
}
//ejercicio6 final
//ejercicio7 inicio
let numero3=parseInt(prompt("dame un numero para que te pueda mostrar su tabla de multiplicar del 1 hasta el 10"));
for(let i=1;i<=10;i++){
    let mul=i*numero3;
    console.log(i+"x"+numero3+"="+mul);
}
//ejercicio7 final
//ejercicio8 inicio
function contarvocales(texto){
    let c=0;
    for(let i=0; i<texto.length;i++){
        let letra=texto[i].toLowerCase();
        if(letra==="a"
            || letra==="e"
            || letra==="i"
            || letra ==="o"
            ||  letra==="u"
        ){

        c++;}
        
    }
    console.log("esta palabra tiene"+c+" "+"vocales")
}
let vocal=prompt("dame una palabra para ver cuantas vocales tiene"); 
contarvocales(vocal);

//ejercicio8 final
//ejercicio9 inicio 9
function mayor(){
    let areglo=[1,10,5,6,2];
    let m=areglo[0];
    for(let i=0;i<areglo.length;i++){
        if(areglo[i]>m){
            m=areglo[i];

        }

    }
    console.log("el numero mayor de nuestro areglo es de "+m);
}
mayor();
//ejercicio9 final
//ejercicio10 inicio
function sumar(){
    return suma=a+b;
}
function restar(){
    return resta=a-b;
}
function multiplicar(){
    return mul=a*b;
}
function dividir(){
    return div=a/b;
}
let a=parseFloat(prompt("dame un numero"));
let b=parseFloat(prompt("dame un segundo numero"));
let c=prompt("dime la operacion que deseas realizar ");
if(c==="sumar"){
    console.log("la suma es "+sumar(a,b));
}
else if(c==="restar"){
    console.log("la resta es"+restar(a,b));
}
else if(c==="multiplicar"){
    console.log("la multiplicacion es"+multiplicar(a,b));
}
else if(c==="dividir"){
    console.log("la division es "+dividir(a,b));
}
//ejercicio10 final