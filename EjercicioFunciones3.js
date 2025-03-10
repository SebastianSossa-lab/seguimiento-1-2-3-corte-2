const sumaDigitos = numero => {
    const numeroString = Math.abs(numero).toString();
    let sumaTotal = 0; 
    for (let indice = 0; indice < numeroString.length; indice++) {
        const digito = parseInt(numeroString[indice]);
        sumaTotal += digito;
    }
    return sumaTotal;
}

console.log(sumaDigitos(6789));  
console.log(sumaDigitos(-76));   
console.log(sumaDigitos(1));     
