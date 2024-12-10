/**
 * Cree un programa el cual cumpla con los siguientes requerimientos, muestre la lista de
inscritos y permita actualizar sus calificaciones.

● Crear un arreglo estudiantes donde cada elemento sea un objeto con
nombre, edad, matrícula y calificaciones (un arreglo de números).
● Crear una función calcularPromedio que reciba una matrícula y devuelva el
promedio de calificaciones de ese estudiante.
● Crear una función actualizarCalificaciones que reciba la matrícula y un nuevo
arreglo de calificaciones, y actualice la información del estudiante
correspondiente.
 */


class Estudiante {
    constructor(nombre, edad, matricula, calificaciones) {
        this.nombre = nombre;
        this.edad = edad;
        this.matricula = matricula;
        this.calificaciones = calificaciones;
    }
}


let estudiantes = [
    new Estudiante("Juan Perez", 20, "A123", [90, 85, 88, 92]),
    new Estudiante("Ana Gomez", 21, "B456", [80, 78, 85, 88]),
    new Estudiante("Carlos Diaz", 22, "C789", [95, 90, 94, 98])
];


mostrarEstudiantes();

let matriculaABuscar = "A123";
let promedio = calcularPromedio(matriculaABuscar);
if (promedio !== null) {
    console.log(`\nEl promedio de ${matriculaABuscar} es: ${promedio}`);
} else {
    console.log("\nEstudiante no encontrado.");
}


let nuevasCalificaciones = [85, 88, 91, 89];
actualizarCalificaciones("C789", nuevasCalificaciones);


mostrarEstudiantes();




function calcularPromedio(matricula) {
    
    let estudiante = estudiantes.find(est => est.matricula === matricula);
    if (estudiante) {
       
        let suma = estudiante.calificaciones.reduce((a, b) => a + b, 0);
        return suma / estudiante.calificaciones.length;
    }
    return null;  
}


function actualizarCalificaciones(matricula, nuevasCalificaciones) {
   
    let estudiante = estudiantes.find(est => est.matricula === matricula);
    if (estudiante) {
        
        estudiante.calificaciones = nuevasCalificaciones;
        console.log(`Las calificaciones de ${estudiante.nombre} han sido actualizadas.`);
    } else {
        console.log("Estudiante no encontrado.");
    }
}

function mostrarEstudiantes() {
    console.log("Lista de estudiantes:");
    estudiantes.forEach(est => {
        console.log(`Nombre: ${est.nombre}, Edad: ${est.edad}, Matricula: ${est.matricula}, Calificaciones: ${est.calificaciones}`);
    });
}