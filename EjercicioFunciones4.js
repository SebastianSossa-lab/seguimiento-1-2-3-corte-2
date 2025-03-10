const generarFibonacci = (cantidad) => {
    if (cantidad <= 1 || !Number.isInteger(cantidad)) {
        return "Por favor, ingrese un número entero positivo mayor que 1.";
    }

    let secuenciaFibonacci = "";
    let numeroActual = 1, numeroAnterior = 0;

    for (let indice = 0; indice < cantidad; indice++) {
        secuenciaFibonacci += numeroActual + " ";
        numeroActual += numeroAnterior;
        numeroAnterior = numeroActual - numeroAnterior;
    }

    return secuenciaFibonacci.trim(); 
}

console.log(generarFibonacci(10)); 
console.log(generarFibonacci(0));  
console.log(generarFibonacci(1));  
