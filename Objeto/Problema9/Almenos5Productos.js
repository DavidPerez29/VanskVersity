/**
 * Cree un programa que pida al usuario el nombre de un producto existente en una tienda,
luego, que le muestre el precio del producto. El usuario debe poder elegir de entre por lo
menos cinco productos.
 */

let productos = {
    "papa": 1.5,
    "arroz": 2.3,
    "aceite": 3.5,
    "leche": 1.2,
    "pan": 0.8
};

// Lista de productos disponibles
let listaProductos = ["papa", "arroz", "aceite", "leche", "pan"];

let productoElegido = "";

while (!listaProductos.includes(productoElegido.toLowerCase())) {
    productoElegido = prompt("Ingrese el nombre de un producto (papa, arroz, aceite, leche, pan):").toLowerCase();

   
    if (listaProductos.includes(productoElegido)) {
        alert("El precio de " + productoElegido + " es: $" + productos[productoElegido]);
    } else {
        alert("Producto no disponible en la tienda. Por favor, elija uno de los siguientes productos: papa, arroz, aceite, leche, pan.");
    }
}