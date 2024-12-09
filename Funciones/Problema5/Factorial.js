function calcularFactorial(n) {
    let factorial = 1;
    
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}

let n = parseInt(prompt("Ingresa un numero para calcular su factorial:"));

let resultado = calcularFactorial(n);

console.log(`El factorial de ${n} es: ${resultado}`);
