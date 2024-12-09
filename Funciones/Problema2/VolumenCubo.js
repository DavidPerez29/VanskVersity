
function calcularVolumenCubo(lado) {
    
    let volumen = lado * lado * lado;
    return volumen; 
}


let lado = parseFloat(prompt("Ingresa el lado del cubo:"));


let volumen = calcularVolumenCubo(lado);
console.log(`El volumen del cubo es: ${volumen}`);
