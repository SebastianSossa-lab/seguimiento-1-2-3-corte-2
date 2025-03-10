const esPrimo = numero => {
    if (numero < 2) {
        return false;
    }
    if (numero === 2) {
        return true;
    }
    if (numero % 2 === 0) {
        return false;
    }

    const limite = Math.sqrt(numero);
    for (let divisor = 3; divisor <= limite; divisor += 2) {
        if (numero % divisor === 0) {
            return false;
        }
    }
    return true;
}

console.log(esPrimo(5));  
console.log(esPrimo(15)); 
console.log(esPrimo(20)); 
console.log(esPrimo(1));  
console.log(esPrimo(4));  
