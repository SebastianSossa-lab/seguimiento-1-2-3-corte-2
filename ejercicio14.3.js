function calcularValorSandwich(tamaño, tocineta, pavo, queso) {
    let precioSandwich;

    if (tamaño === "pequeño") {
        precioSandwich = 6000;
    } else if (tamaño === "grande") {
        precioSandwich = 12000;
    } else {
        return "Tamaño no válido"; 
    }

    let costoIngredientes = 0;
    if (tocineta) costoIngredientes += 3000;
    if (pavo) costoIngredientes += 3000;
    if (queso) costoIngredientes += 2500;

    return precioSandwich + costoIngredientes; 
}

let cantidadPedidos = parseInt(prompt("¿Cuántos sándwiches desea ordenar?"));
let i = 0;

while (i < cantidadPedidos) {
    let tamaño = prompt(`Pedido ${i + 1}: Ingrese el tamaño del sándwich que desea ordenar (grande o pequeño)`).toLowerCase();

    if (tamaño !== "pequeño" && tamaño !== "grande") {
        alert("Tamaño no válido. Por favor ingrese 'pequeño' o 'grande'.");
        continue;
    }

    let tocineta = prompt(`Pedido ${i + 1}: ¿Desea agregar tocineta? (sí/no)`).toLowerCase() === "sí";
    let jalapeno = prompt(`Pedido ${i + 1}: ¿Desea agregar jalapeño? (gratis) (sí/no)`).toLowerCase();
    let pavo = prompt(`Pedido ${i + 1}: ¿Desea agregar pavo? (sí/no)`).toLowerCase() === "sí";
    let queso = prompt(`Pedido ${i + 1}: ¿Desea agregar queso? (sí/no)`).toLowerCase() === "sí";

    let valorTotal = calcularValorSandwich(tamaño, tocineta, pavo, queso);

    if (valorTotal === "Tamaño no válido") {
        alert("Pedido inválido. Por favor verifique los datos.");
        continue;
    }

    alert(`Pedido ${i + 1}: El valor total a pagar por el sándwich es: $${valorTotal}`);
    console.log(`Pedido ${i + 1}: El valor total a pagar por el sándwich es: $${valorTotal}`);
    i++;
}
