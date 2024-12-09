

let montoProducto = parseFloat(prompt("Ingresa el monto del producto:"));
let medioPago = prompt("Ingresa el medio de pago (C para tarjeta de crédito, E para efectivo, D para tarjeta de débito):").toUpperCase();

let montoFinal = facturacion(montoProducto, medioPago);
console.log(`El monto final a pagar es: $${montoFinal}`);

function facturacion(monto, medioPago) {
    let descuento = 0;

    if (monto >= 200 && monto <= 400) {
        if (medioPago === 'E') {
            descuento = 0.30;  
        } else if (medioPago === 'D') {
            descuento = 0.20;  
        } else if (medioPago === 'C') {
            descuento = 0.10;  
        }
    } else if (monto > 400) {
        descuento = 0.40;  
    }

    let montoFinal = monto - (monto * descuento);
    return montoFinal;
}