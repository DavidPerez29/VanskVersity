/*
3. Cree un programa que reciba dos números y muestre el mayor. En caso de que los números sean iguales
también se debe mostrar al usuario.
*/

// Solicitar al usuario los dos números
let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));


if (num1 > num2) {
    console.log("El mayor número es: " + num1);
} else if (num2 > num1) {
    console.log("El mayor número es: " + num2);
} else {
    console.log("Ambos números son iguales.");
}

