/*

*/

let mensaje;



// Solicitar al usuario los tres ángulos
let angulo1 = parseFloat(prompt("Ingresa el primer ángulo:"));
let angulo2 = parseFloat(prompt("Ingresa el segundo ángulo:"));
let angulo3 = parseFloat(prompt("Ingresa el tercer ángulo:"));


switch (true) {
    case (angulo1 > 0 && angulo2 > 0 && angulo3 > 0 && (angulo1 + angulo2 + angulo3 === 180)):
        mensaje = "Los ángulos corresponden a un triángulo válido.";
        break;
    default:
        mensaje = "Los ángulos no corresponden a un triángulo válido.";
        break;
}
console.log(mensaje);
