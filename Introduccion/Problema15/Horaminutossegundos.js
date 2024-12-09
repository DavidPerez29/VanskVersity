/*
15. Cree un programa que calcule horas y minutos a partir de segundos.
*/

let segundos = parseInt(prompt("Ingrese la cantidad de segundos:"));


let horas = Math.floor(segundos / 3600); 
let minutos = Math.floor((segundos % 3600) / 60); 
let segundosRestantes = segundos % 60; 


console.log(segundos + " segundos equivalen a " + horas + " horas, " + minutos + " minutos y " + segundosRestantes + " segundos.");

