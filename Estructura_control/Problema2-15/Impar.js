

let n = parseInt(prompt("Ingresa un número n para mostrar los números impares entre 1 y n:"));

for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) { 
        console.log(i); 
    }
}