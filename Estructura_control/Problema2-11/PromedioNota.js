
// Solicitar la cantidad de estudiantes
let n = parseInt(prompt("Ingresa la cantidad de estudiantes:"));


for (let i = 1; i <= 3; i++) {
    // Solicitar las tres notas del estudiante
    let nota1 = parseFloat(prompt(`Ingresa la primera nota del estudiante ${i}:`));
    let nota2 = parseFloat(prompt(`Ingresa la segunda nota del estudiante ${i}:`));
    let nota3 = parseFloat(prompt(`Ingresa la tercera nota del estudiante ${i}:`));
    
    // Calcular el promedio
    let promedio = calcularPromedio(nota1, nota2, nota3);
    
    // Mostrar el promedio
    console.log(`El promedio del estudiante ${i} es: ${promedio}`);
}


