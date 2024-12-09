/*
14. Cree un programa que genere un número aleatorio dentro de un rango específico.
*/


let min = 1;  // Límite inferior
let max = 100; // Límite superior

// Generar un número aleatorio en el rango especificado
let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;;

console.log("El numero aleatorio es :  " + numeroAleatorio);