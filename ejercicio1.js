let = nombre = "Ana Lopez";
let horas = 15; 

let SalarioPorHora;
if (horas <= 10) {
    SalarioPorHora = 30000
} else {
    SalarioPorHora =33000
}

let salarioTotal = horas * SalarioPorHora;

console.log(`El salario total de ${nombre} es de ${salarioTotal} pesos`);