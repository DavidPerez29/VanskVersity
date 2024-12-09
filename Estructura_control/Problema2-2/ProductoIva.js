/*
2. En un supermercado se tiene los siguientes productos: lentejas, crema, arroz y vino. Las lentejas y el arroz no
pagan IVA, el vino y la crema si. Cree un programa que reciba el nombre de alguno de los productos
mencionados y muestre si el producto paga IVA o no. Realice una versión con condicionales y otra con estructura
switch-case.
*/

let producto = prompt("Ingresa el nombre del producto (lentejas, crema, arroz, vino):").toLowerCase();

    switch (producto) {
        case "lentejas":
        case "arroz":
            console.log("El producto " + producto + " no paga IVA.");
            break;
        case "vino":
        case "crema":
            console.log("El producto " + producto + " paga IVA.");
            break;
        default:
            console.log("Producto no reconocido.");
    }




