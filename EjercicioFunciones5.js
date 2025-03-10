const calcularMCD = (numero1, numero2) => {
    if (!Number.isInteger(numero1) || !Number.isInteger(numero2) || numero1 <= 0 || numero2 <= 0) {
        return "Por favor, ingrese dos números enteros positivos.";
    }

    numero1 = Math.abs(numero1);
    numero2 = Math.abs(numero2);

    while (numero2 !== 0) {
        let temporal = numero2;
        numero2 = numero1 % numero2;
        numero1 = temporal;
    }

    return numero1;
}

console.log(calcularMCD(12, 18));  
console.log(calcularMCD(0, 18));   
console.log(calcularMCD(12, 0));   
console.log(calcularMCD(12, -18)); 
