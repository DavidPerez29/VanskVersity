/*
8. Cree un programa que tome el valor de un producto e imprima su precio final si éste tiene
siempre un descuento del 10%.
*/

let precio = parseFloat(prompt("Ingrese el valor del producto:"));


const descuento = 0.10; // 10% de descuento
let precioFinal = precio - (precio * descuento);

    console.log("El precio final del producto con un 10% de descuento es: " + precioFinal);
