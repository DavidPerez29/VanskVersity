/**Escriba una función la cual reciba como parámetro 2 números enteros y 1 cadena,
La idea es que los números recibidos se puedan operar según la operación que
hallamos recibido en la cadena, ejemplo miFuncion(2, 5, ”suma”).
*/



let num1 = parseInt(prompt("Ingresa el primer numero:"));
let num2 = parseInt(prompt("Ingresa el segundo numero:"));
let operacion = prompt("Ingresa la operación (suma, resta, multiplicacion, division):");

let resultadoOperacion = miFuncion(num1, num2, operacion);
console.log(`El resultado de la operación es: ${resultadoOperacion}`);


function miFuncion(num1, num2, operacion) {
    let resultado;

    switch (operacion.toLowerCase()) {
        case 'suma':
            resultado = num1 + num2;
            break;
        case 'resta':
            resultado = num1 - num2;
            break;
        case 'multiplicacion':
            resultado = num1 * num2;
            break;
        case 'division':
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                return "Error: No se puede dividir entre cero.";
            }
            break;
        default:
            return "Operacion no válida.";
    }

    return resultado;
}
