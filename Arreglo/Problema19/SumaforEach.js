let arreglo = [-2, 8, 99, 1, 7];
let sumaCuadrados = 0;

arreglo.forEach(num => {
    sumaCuadrados += num * num;
});

console.log("La suma de los cuadrados es: " + sumaCuadrados);
