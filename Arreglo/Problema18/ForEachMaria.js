let arreglo = ["Maria", "Pedro", "Juan", "Pablo", "Diana", "Maria"];
let contador = 0;

arreglo.forEach(nombre => {
    if (nombre === "Maria") {
        contador++;
    }
});

console.log("El nombre Maria aparece " + contador + " veces.");
