for (let i = 0; i < 3; i++) { 
    let numero1 = parseInt(prompt(`Triángulo ${i + 1}: Ingrese el primer ángulo:`));
    let numero2 = parseInt(prompt(`Triángulo ${i + 1}: Ingrese el segundo ángulo:`));
    let numero3 = parseInt(prompt(`Triángulo ${i + 1}: Ingrese el tercer ángulo:`));

    let trianguloValido;

    if (numero1 + numero2 + numero3 === 180) {
        trianguloValido = "Válido";
        alert(`Triángulo ${i + 1}: La suma de los ángulos es 180 grados. El triángulo es: ${trianguloValido}`);
    } else {
        trianguloValido = "Inválido";
        alert(`Triángulo ${i + 1}: La suma de los ángulos no es 180 grados. El triángulo es: ${trianguloValido}`);
    }

    console.log(`Triángulo ${i + 1}: El triángulo es ${trianguloValido}`);
}
