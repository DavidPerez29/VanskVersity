
    let suma = 0; 

 

let n = parseInt(prompt("Ingresa un número n para calcular la suma de los cuadrados de los números entre 1 y n:"));

for (let i = 1; i <= n; i++) {
    suma += i * i; 
}

console.log(`La suma de los cuadrados de los números entre 1 y ${n} es: ${suma}`);

