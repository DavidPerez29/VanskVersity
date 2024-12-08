/* Cree un programa que lea la edad de un usuario y muestre cuántos años tendrá el usuario
dentro de tantos años como éste indique. Por ejemplo, si el usuario tiene 20 años y quiere saber
cuántos años tendrá dentro de 15 años, el programa deberá mostrar que tendrá 35 años.
*/

let edad = parseInt(prompt("Ingrese su edad actual"));

let anno = parseInt(prompt("Ingrese año mas quiere saber: "));


let edadfutura = edad + anno;

console.log("Los años futuros son : "+ edadfutura);
