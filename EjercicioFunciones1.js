const calcularFactorial = numero => {
    if (numero < 5) {
        return "Número no válido";
    } else if (numero === 5) {
        return 120;
    } else {
        let resultado = 1; 
        for (let i = 1; i <= numero; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

console.log(calcularFactorial(5));
