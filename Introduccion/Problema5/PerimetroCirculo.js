/*
5. Cree un programa que tome el radio de un círculo e imprima su área y perímetro.
*/

let radio = parseFloat(prompt("Introduce el radio del circulo: "));

let area = math.pi * radio ** 2;

let perimetro = 2 * math.pi * radio;


console.log("Area del circulo es: " + area);

console.log("Perimetro del circulo es : " + perimetro);