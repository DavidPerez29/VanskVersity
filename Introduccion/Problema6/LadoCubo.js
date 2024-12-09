/*
6. Cree un programa que tome el lado de un cubo e imprima su volumen.
*/


let lado = parseFloat(prompt("Ingrese el valor del lado del cubo:"));

    let volumen = Math.pow(lado, 3);
    console.log("El volumen del cubo es: " + volumen);
