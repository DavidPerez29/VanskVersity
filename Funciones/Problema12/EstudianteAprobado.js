
let nota1 = parseFloat(prompt("Ingresa la primera nota:"));
let nota2 = parseFloat(prompt("Ingresa la segunda nota:"));
let nota3 = parseFloat(prompt("Ingresa la tercera nota:"));
let nota4 = parseFloat(prompt("Ingresa la cuarta nota:"));
let nota5 = parseFloat(prompt("Ingresa la quinta nota:"));

let mensaje = verificarAprobacion(nota1, nota2, nota3, nota4, nota5);
console.log(mensaje);


function verificarAprobacion(nota1, nota2, nota3, nota4, nota5) {
    let promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

    if (promedio >= 3.0) {
        return "El estudiante aprobó la materia.";
    } else {
        return "El estudiante no aprobó la materia.";
    }
}
