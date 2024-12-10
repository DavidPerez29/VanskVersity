let productos = {
    Papa: 1.5,
    Arroz: 2.3,
    Lentejas: 1.8,
    Aceite: 3.2
};

for (let producto in productos) {
    console.log(producto + ": " + productos[producto]);
}