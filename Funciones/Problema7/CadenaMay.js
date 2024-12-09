

let cadena = prompt("Ingresa una cadena:");

let resultado = convertirAMayusculas(cadena);

console.log(resultado);


function convertirAMayusculas(cadena) {
    return cadena.toUpperCase();
}