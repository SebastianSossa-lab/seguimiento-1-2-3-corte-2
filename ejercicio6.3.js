function ingresarNumeros(cantidad) {
    let numeros = [];
    let i = 0;

    do {
        numeros[i] = parseInt(prompt(`Ingrese el número ${i + 1} por favor:`));
        i++;
    } while (i < cantidad);

    return numeros; 
}

function encontrarNumeroMayor(numeros) {
    let numeroMayor = numeros[0]; 
    let i = 1;

    do {
        if (numeros[i] > numeroMayor) {
            numeroMayor = numeros[i];
        }
        i++;
    } while (i < numeros.length);

    return numeroMayor; 
}

let cantidadNumeros = 3; 
let numeros = ingresarNumeros(cantidadNumeros);
let numeroMayor = encontrarNumeroMayor(numeros);

console.log("El número mayor es: " + numeroMayor);
