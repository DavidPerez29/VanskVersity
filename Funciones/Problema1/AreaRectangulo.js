
function calcularAreaRectangulo(base, altura) {
   
    let area = base * altura;
    return area; 
}


let base = parseFloat(prompt("Ingresa la base del rectángulo:"));
let altura = parseFloat(prompt("Ingresa la altura del rectángulo:"));

let area = calcularAreaRectangulo(base, altura);
console.log(`El área del rectángulo es: ${area}`);
