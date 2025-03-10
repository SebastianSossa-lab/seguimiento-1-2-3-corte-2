function verificarTriangulo(angulo1, angulo2, angulo3, indice) {
    let trianguloValido;

    if (angulo1 + angulo2 + angulo3 === 180) {
        trianguloValido = "Válido";
        alert(`Triángulo ${indice}: La suma de los ángulos es 180 grados. El triángulo es: ${trianguloValido}`);
    } else {
        trianguloValido = "Inválido";
        alert(`Triángulo ${indice}: La suma de los ángulos no es 180 grados. El triángulo es: ${trianguloValido}`);
    }

    console.log(`Triángulo ${indice}: El triángulo es ${trianguloValido}`);
}

for (let i = 0; i < 3; i++) {
    let numero1 = parseInt(prompt(`Triángulo ${i + 1}: Ingrese el primer ángulo:`));
    let numero2 = parseInt(prompt(`Triángulo ${i + 1}: Ingrese el segundo ángulo:`));
    let numero3 = parseInt(prompt(`Triángulo ${i + 1}: Ingrese el tercer ángulo:`));

    verificarTriangulo(numero1, numero2, numero3, i + 1); 
}
