/*}
Cree un programa que lea una cantidad e imprima un porcentaje a calcular requerido sobre
esa cantidad.
*/


// Solicitar al usuario la cantidad
let cantidad = parseFloat(prompt("Ingrese la cantidad sobre la que desea calcular el porcentaje:");)

// Solicitar al usuario el porcentaje
let porcentaje = parseFloat(prompt("Ingrese el porcentaje a calcular sobre la cantidad:"));


let resultado = (cantidad * porcentaje) / 100;
console.log("El " + porcentaje + "% de " + cantidad + " es: " + resultado);
