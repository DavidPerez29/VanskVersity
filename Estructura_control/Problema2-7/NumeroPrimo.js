/*
7. Cree un programa que lea un número entre 1 y 15 y muestre si éste es primo o no. Realice una versión con
condicionales y otra con estructura switch-case.
*/

// Función para verificar si un número es primo usando if-else
function verificarPrimo(num) {
   
}

// Solicitar al usuario un número entre 1 y 15
let num = parseInt(prompt("Ingresa un número entre 1 y 15:"));

if (num < 2 || num > 15) {
    console.log("Por favor, ingresa un número entre 1 y 15.");
    return;
}

let esPrimo = true;

// Verificar si el número es primo
for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        esPrimo = false;
        break;
    }
}

if (esPrimo) {
    console.log("El número " + num + " es primo.");
} else {
    console.log("El número " + num + " no es primo.");
}

