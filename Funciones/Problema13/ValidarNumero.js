

let numero = parseInt(prompt("Ingresa un número entero:"));
let mensaje = determinarSigno(numero);
console.log(mensaje);

function determinarSigno(numero) {
    if (numero > 0) {
        return "El número es positivo.";
    } else if (numero < 0) {
        return "El número es negativo.";
    } else {
        return "El número es cero.";
    }
}