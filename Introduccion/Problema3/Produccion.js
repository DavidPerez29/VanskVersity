/*
En un almacén de electrodomésticos se venden éstos a crédito y de contado. Si el cliente
compra a crédito, el valor del electrodoméstico aumenta en un 5% por cada mes que dure el
crédito. Cree un programa para un almacén donde el administrador ingrese el precio de un
electrodoméstico y el plazo en meses para pagarlo a crédito y muestre el valor fijo de las cuotas
mensuales que deberá pagar por el electrodoméstico.
*/


let valorproducto = parseFloat(prompt("Ingrese valor del Electrodomesticos: "));
let mesesPlazo = parseInt(prompt("Ingrese los meses que durara el credito: "));


mesesPlazo = 2;
valorproducto = 1000;

let aumentoxmes = valorproducto * (0.5 * mesesPlazo);

let valorcuotas = aumentoxmes / mesesPlazo;

console.log("El valor fijo es : "+ aumentoxmes);
console.log(" El valor de las cuotas es : " + valorcuotas);