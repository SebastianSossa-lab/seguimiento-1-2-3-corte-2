let numeros = []; 
let i = 0;

do {
    numeros[i] = parseInt(prompt(`Ingrese el número ${i + 1} por favor:`));
    i++;
} while (i < 3);

let numeroMayor = numeros[0]; 


i = 1; 
do {
    if (numeros[i] > numeroMayor) {
        numeroMayor = numeros[i];
    }
    i++;
} while (i < numeros.length);

console.log("El número mayor es: " + numeroMayor);
