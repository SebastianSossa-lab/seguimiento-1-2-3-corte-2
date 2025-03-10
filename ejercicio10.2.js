let pedidos = parseInt(prompt("¿Cuántos pedidos de copias desea realizar?"));

for (let i = 0; i < pedidos; i++) {
    let copias = parseInt(prompt(`Pedido ${i + 1}: Ingrese el número de copias que desea imprimir:`));
    let precioPorCopia;

    if (copias >= 0 && copias <= 499) {
        precioPorCopia = 120;
        alert(`Pedido ${i + 1}: El precio por copia es: $${precioPorCopia}`);
    } else if (copias >= 500 && copias <= 749) {
        precioPorCopia = 100;
        alert(`Pedido ${i + 1}: El precio por copia es: $${precioPorCopia}`);
    } else if (copias >= 750 && copias <= 999) {
        precioPorCopia = 80;
        alert(`Pedido ${i + 1}: El precio por copia es: $${precioPorCopia}`);
    } else if (copias >= 1000) {
        precioPorCopia = 50;
        alert(`Pedido ${i + 1}: El precio por copia es: $${precioPorCopia}`);
    } else {
        alert(`Pedido ${i + 1}: Número de copias no válido. Por favor, intente nuevamente.`);
        continue; 
    }

    let precioTotal = copias * precioPorCopia;
    alert(`Pedido ${i + 1}: El precio total es: $${precioTotal}`);
    console.log(`Pedido ${i + 1}: Número de copias: ${copias}, Precio por copia: $${precioPorCopia}, Precio total: $${precioTotal}`);
}
