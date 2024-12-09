/*
11. Cree un programa que simule el lanzamiento de dos dados y muestre la suma de los
resultados
*/


let dado1 = Math.floor(Math.random() * 6) + 1; ;
let dado2 = Math.floor(Math.random() * 6) + 1; ;


let suma = dado1 + dado2;


console.log("El resultado del primer dado es: " + dado1);
console.log("El resultado del segundo dado es: " + dado2);
console.log("La suma de los dos dados es: " + suma);