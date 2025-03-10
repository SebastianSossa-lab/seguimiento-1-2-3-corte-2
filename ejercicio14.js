let tamaño = prompt("Ingrese el tamaño del sándwich que desea ordenar, (grande o pequeño").toLowerCase();

let precioSandwich;
if (tamaño === "pequeño") {
    precioSandwich = 6000;
} else if (tamaño === "grande") {
    precioSandwich = 12000;
} else {
    alert("Tamaño no válido. Por favor ingrese 'pequeño' o 'grande'.");
}

let tocineta = prompt("¿Desea agregar tocineta?")
let jalapeno = prompt("¿Desea agregar jalapeño? (gratis)")
let pavo = prompt("¿Desea agregar pavo?")
let queso = prompt("¿Desea agregar queso?")

let costoIngredientes = 0;
if (tocineta) costoIngredientes += 3000;
if (pavo) costoIngredientes += 3000;
if (queso) costoIngredientes += 2500;

let valorTotal = precioSandwich + costoIngredientes;

alert("El valor total a pagar por el sándwich es: $" + valorTotal);
console.log("El valor total a pagar por el sándwich es: $" + valorTotal);

