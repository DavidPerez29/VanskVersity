/**
 * Escriba una función llamada obtenerPrimeraLetra() que reciba un nombre y devuelva
la primera letra del nombre.
*/


let nombre = prompt("Ingresa un nombre:");
let primeraLetra = obtenerPrimeraLetra(nombre);
console.log(primeraLetra);


function obtenerPrimeraLetra(nombre) {
    return nombre.charAt(0);
}
