function calcularSalarioTotal(nombre, horas) {
    let SalarioPorHora;

    if (horas <= 10) {
        SalarioPorHora = 30000;
    } else {
        SalarioPorHora = 33000;
    }

    let salarioTotal = horas * SalarioPorHora;

    console.log(`El salario total de ${nombre} es de ${salarioTotal} pesos`);
    return salarioTotal; 
}

let nombre = "Ana Lopez";
let horas = 15;

calcularSalarioTotal(nombre, horas);
