/**
 * Cree una función que reciba un arreglo de números enteros no repetidos y lo retorne
ordenado de menor a mayor según el valor de tales elementos.
 */

let numeros = [7, 2, 5, 9, 1, 4];
let numerosOrdenados = ordenarArreglo(numeros);

console.log(numerosOrdenados);

function ordenarArreglo(arreglo) {
    return arreglo.sort((a, b) => a - b);
}
