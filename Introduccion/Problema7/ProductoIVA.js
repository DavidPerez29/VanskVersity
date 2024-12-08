
const iva = 0.19;


let precioProducto = parseFloat(prompt("Ingrese el valor del producto"));

let precioFinal = precioProducto + (precioProducto * iva);


console.log("El precio final al consumidor con IVA es _" + precioFinal);