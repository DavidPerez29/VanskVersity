

let largo = parseFloat(prompt("Ingresa el largo del rectangulo:"));
let ancho = parseFloat(prompt("Ingresa el ancho del rectangulo:"));

let area = calcularArea(largo, ancho);
let perimetro = calcularPerimetro(largo, ancho);

console.log("El area del rectangulo es: " + area);
console.log("El perimetro del rectangulo es: " + perimetro);


function calcularArea(largo, ancho) {
    return largo * ancho;
}

function calcularPerimetro(largo, ancho) {
    return 2 * (largo + ancho);
}