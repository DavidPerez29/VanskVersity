
let edad = parseInt(prompt("Ingresa tu edad:"));
let estatura = parseFloat(prompt("Ingresa tu estatura en cm:"));
let permisoParental = prompt("¿Tienes permiso parental? (si/no)").toLowerCase() === "si";

let mensaje = permitirEntrada(edad, estatura, permisoParental);
console.log(mensaje);


function permitirEntrada(edad, estatura, permisoParental) {
    if (edad >= 18 && estatura > 150) {
        return "Acceso permitido: Eres mayor de edad y cumples con la estatura requerida.";
    } else if (edad < 18 && estatura > 150 && permisoParental === true) {
        return "Acceso permitido: Eres menor de edad pero tienes permiso parental.";
    }
}

