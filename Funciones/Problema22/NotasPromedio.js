

let notas = [];
for (let i = 0; i < 3; i++) {
    let nota = parseFloat(prompt("Ingresa la nota " + (i + 1) + ":"));
    notas.push(nota);
}

let promedio = calcularPromedio(notas);
let aprobado = esAprobado(promedio);
mostrarResultado(aprobado);


function calcularPromedio(notas) {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    return suma / notas.length;
}

function esAprobado(promedio) {
    return promedio >= 6;
}

function mostrarResultado(aprobado) {
    if (aprobado) {
        console.log("El estudiante aprueba.");
    } else {
        console.log("El estudiante reprueba.");
    }
}