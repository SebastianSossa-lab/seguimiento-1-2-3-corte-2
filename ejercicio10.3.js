function calcularPrecioCopias(copias, indice) {
    let precioPorCopia;

    if (copias >= 0 && copias <= 499) {
        precioPorCopia = 120;
    } else if (copias >= 500 && copias <= 749) {
        precioPorCopia = 100;
    } else if (copias >= 750 && copias <= 999) {
        precioPorCopia = 80;
    } else if (copias >= 1000) {
        precioPorCopia = 50;
    } else {
        alert(`Pedido ${indice}: Número de copias no válido. Por favor, intente nuevamente.`);
        return null; 
    }

    let precioTotal = copias * precioPorCopia;
    alert(`Pedido ${indice}: El precio por copia es: $${precioPorCopia}`);
    alert(`Pedido ${indice}: El precio total es: $${precioTotal}`);
    console.log(`Pedido ${indice}: Número de copias: ${copias}, Precio por copia: $${precioPorCopia}, Precio total: $${precioTotal}`);
    return precioTotal; 
}

let pedidos = parseInt(prompt("¿Cuántos pedidos de copias desea realizar?"));

for (let i = 0; i < pedidos; i++) {
    let copias = parseInt(prompt(`Pedido ${i + 1}: Ingrese el número de copias que desea imprimir:`));

    calcularPrecioCopias(copias, i + 1);
}
