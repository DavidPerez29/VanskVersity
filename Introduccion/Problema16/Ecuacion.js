
// Solicitar los coeficientes a, b, c
let a = parseFloat(prompt("Ingrese el valor de a:"));
let b = parseFloat(prompt("Ingrese el valor de b:"));
let c = parseFloat(prompt("Ingrese el valor de c:"));

let discriminante = Math.pow(b, 2) - 4 * a * c;

if (discriminante > 0) {
    // Dos soluciones reales distintas
    let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    console.log("Las soluciones son: x1 = " + x1 + " y x2 = " + x2);
} else  (discriminante === 0) {
    // Una solución real doble
    let x = -b / (2 * a);
    console.log("La solución doble es: x = " + x);
}