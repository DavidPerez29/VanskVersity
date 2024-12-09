/*
12. Cree un programa que realice la conversión de grados Celsius a Fahrenheit
*/


// Solicitar al usuario el valor en grados Celsius
let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));

let fahrenheit = (celsius * 9/5) + 32;
console.log(celsius + " grados Celsius son " + fahrenheit + " grados Fahrenheit.");
