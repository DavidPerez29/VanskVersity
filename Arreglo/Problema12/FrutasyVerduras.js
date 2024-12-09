
let arreglo1 = ["Pera", "Cebolla", "Limón", "Pimentón"];
let arreglo2 = ["Manzana", "Banano", "Lechuga", "Perejíl"];

let frutas = [];
let verduras = [];

for (let i = 0; i < arreglo1.length; i++) {
    let item = arreglo1[i];
    if (item === "Pera" || item === "Limón" || item === "Manzana" || item === "Banano") {
        frutas.push(item);
    } else {
        verduras.push(item);
    }
}


for (let i = 0; i < arreglo2.length; i++) {
    let item = arreglo2[i];
    if (item === "Pera" || item === "Limón" || item === "Manzana" || item === "Banano") {
        frutas.push(item);
    } else {
        verduras.push(item);
    }
}

console.log("Frutas:", frutas);
console.log("Verduras:", verduras);
