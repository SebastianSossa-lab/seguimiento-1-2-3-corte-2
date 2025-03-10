let copias = parseInt(prompt("Ingrese el número de copias que desea imprimir:"));

let precioPorCopia;

if (copias >= 0 && copias <= 499) {
    precioPorCopia = 120;
    alert("El precio por copia es:" + precioPorCopia);
} else if (copias >= 500 && copias <= 749) {
    precioPorCopia = 100;
    alert("El precio por copia es:" + precioPorCopia);
} else if (copias >= 750 && copias <= 999) {
    precioPorCopia = 80;
    alert("El precio por copia es:" + precioPorCopia);
} else if (copias >= 1000) {
    precioPorCopia = 50;
    alert("El precio por copia es:" + precioPorCopia);
} else {
    alert("Número de copias no válido. Por favor ingrese un número válido.");
}

let precioTotal = copias * precioPorCopia;
alert("El precio total es:" + precioTotal);



