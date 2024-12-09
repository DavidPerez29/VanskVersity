
let opcion = prompt("¿Que conversion deseas realizar? Ingresa 'C' para Celsius a Fahrenheit o 'F' para Fahrenheit a Celsius:");

if (opcion.toUpperCase() === 'C') {
    let gradosCelsius = parseFloat(prompt("Ingresa los grados Celsius:"));
    let resultadoFahrenheit = celsiusToFahrenheit(gradosCelsius);
    console.log(`${gradosCelsius} grados Celsius son ${resultadoFahrenheit} grados Fahrenheit.`);
} else if (opcion.toUpperCase() === 'F') {
    let gradosFahrenheit = parseFloat(prompt("Ingresa los grados Fahrenheit:"));
    let resultadoCelsius = fahrenheitToCelsius(gradosFahrenheit);
    console.log(`${gradosFahrenheit} grados Fahrenheit son ${resultadoCelsius} grados Celsius.`);
} else {
    console.log("Opcion no valida. Ingresa 'C' o 'F' para seleccionar la conversion.");
}


function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}